import { notFound } from 'next/navigation';
import Layout from '@/components/ui/Layout';
import ArticleCard from '@/components/ui/ArticleCard';
import Pagination from '@/components/ui/Pagination';
import { getPaginatedArticles } from '@/lib/articles';

interface Props {
  params: Promise<{ page: string }>;
}

export default async function ArticlesPage({ params }: Props) {
  const { page } = await params;
  const pageNumber = parseInt(page, 10);
  
  if (isNaN(pageNumber) || pageNumber < 1) {
    notFound();
  }

  const paginatedArticles = getPaginatedArticles(pageNumber, 12);
  
  if (pageNumber > paginatedArticles.totalPages) {
    notFound();
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">All Articles</h1>
          <p className="text-muted-foreground">
            Showing {paginatedArticles.articles.length} of {paginatedArticles.totalArticles} articles
            {pageNumber > 1 && ` (Page ${pageNumber} of ${paginatedArticles.totalPages})`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paginatedArticles.articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <Pagination
          currentPage={paginatedArticles.currentPage}
          totalPages={paginatedArticles.totalPages}
          basePath="/articles/page"
        />
      </div>
    </Layout>
  );
}

export async function generateStaticParams() {
  const totalArticles = getPaginatedArticles(1, 12).totalArticles;
  const totalPages = Math.ceil(totalArticles / 12);
  
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { page } = await params;
  const pageNumber = parseInt(page, 10);
  
  return {
    title: `Articles - Page ${pageNumber} | DevThink.AI Archive`,
    description: `Browse DevThink.AI newsletter articles - Page ${pageNumber}. Discover AI development insights, tools, and expert guidance for software developers.`,
  };
}