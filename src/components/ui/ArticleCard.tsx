import Link from 'next/link';
import { format } from 'date-fns';
import { CalendarIcon, UserIcon, ExternalLinkIcon } from 'lucide-react';
import type { Article } from '@/lib/articles';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM dd, yyyy');
    } catch {
      return dateString;
    }
  };

  return (
    <article className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
      <div className="flex flex-col space-y-4">
        <div className="space-y-2">
          <h3 className="font-semibold leading-tight tracking-tight">
            <Link 
              href={`/articles/${article.slug}`}
              className="hover:text-primary transition-colors"
            >
              {article.title}
            </Link>
          </h3>
          
          {article.excerpt && (
            <p className="text-sm text-muted-foreground line-clamp-3">
              {article.excerpt}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          {article.author && (
            <div className="flex items-center gap-1">
              <UserIcon className="h-3 w-3" />
              <span>{article.author}</span>
            </div>
          )}
          
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-3 w-3" />
            <span>{formatDate(article.date)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <Link
            href={`/articles/${article.slug}`}
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Read more
            <ExternalLinkIcon className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
      
    </article>
  );
}