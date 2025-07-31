import { notFound } from 'next/navigation';
import Link from 'next/link';
import { format } from 'date-fns';
import { CalendarIcon, UserIcon, ArrowLeftIcon } from 'lucide-react';
import Layout from '@/components/ui/Layout';
import { getArticleBySlug, getProcessedArticleContent, getAllSlugs } from '@/lib/articles';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    notFound();
  }

  const content = await getProcessedArticleContent(slug);

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMMM dd, yyyy');
    } catch {
      return dateString;
    }
  };

  return (
    <Layout>
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/articles/page/1"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to articles
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              {article.author && (
                <div className="flex items-center gap-2">
                  <UserIcon className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <span>{formatDate(article.date)}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground">
                  This article was originally published on{' '}
                  <a
                    href="https://devthink.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    DevThink.AI
                  </a>
                </p>
              </div>
              
              <div className="flex gap-2">
                <Link
                  href="/articles/page/1"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 rounded-md transition-colors"
                >
                  Browse more articles
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </Layout>
  );
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: 'Article Not Found | DevThink.AI Archive',
    };
  }

  return {
    title: `${article.title} | DevThink.AI Archive`,
    description: article.excerpt || `Read "${article.title}" by ${article.author || 'DevThink.AI'} from the DevThink.AI newsletter archive.`,
    authors: article.author ? [{ name: article.author }] : undefined,
    openGraph: {
      title: article.title,
      description: article.excerpt || `Read "${article.title}" by ${article.author || 'DevThink.AI'} from the DevThink.AI newsletter archive.`,
      type: 'article',
      publishedTime: article.date,
      authors: article.author ? [article.author] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt || `Read "${article.title}" by ${article.author || 'DevThink.AI'} from the DevThink.AI newsletter archive.`,
    },
  };
}