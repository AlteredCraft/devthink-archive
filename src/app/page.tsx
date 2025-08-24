import Link from 'next/link';
import { ArrowRightIcon, BookOpenIcon, TrendingUpIcon } from 'lucide-react';
import Layout from '@/components/ui/Layout';
import ArticleCard from '@/components/ui/ArticleCard';
import { getAllArticles } from '@/lib/articles';

export default function Home() {
  const allArticles = getAllArticles();

  return (
    <Layout>
      {/* Hero Section with title and Archive Info */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="gradient-text">DevThink.AI</span>
              <br />
              Newsletter Archive
            </h1>
            
            <h2 className="text-3xl font-bold tracking-tight mb-6">Archive Information</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              This archive contains the complete history of the newsletter from its DevThink.AI era. 
              For the latest AI development insights and current newsletter issues, visit AlteredCraft.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/articles/page/1"
                className="inline-flex items-center justify-center px-6 py-3 border border-border bg-background hover:bg-accent text-foreground font-medium rounded-lg transition-colors"
              >
                <BookOpenIcon className="mr-2 h-5 w-5" />
                Browse Archive
              </Link>
              
              <a
                href="https://alteredcraft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                <TrendingUpIcon className="mr-2 h-5 w-5" />
                Subscribe to Current Newsletter
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
            <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-primary/20 to-secondary/20 opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">{allArticles.length}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Articles</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">2023-2025</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Covered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">AI & Dev</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Focus Areas</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
