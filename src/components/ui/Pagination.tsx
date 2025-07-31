import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  return (
    <nav className="flex items-center justify-center space-x-2">
      <Link
        href={currentPage > 1 ? `${basePath}/${currentPage - 1}` : '#'}
        className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          currentPage > 1
            ? 'text-foreground hover:bg-accent hover:text-accent-foreground'
            : 'text-muted-foreground cursor-not-allowed opacity-50'
        }`}
        aria-disabled={currentPage <= 1}
      >
        <ChevronLeftIcon className="h-4 w-4 mr-1" />
        Previous
      </Link>

      <div className="flex items-center space-x-1">
        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <span key={index} className="px-3 py-2 text-sm text-muted-foreground">
              ...
            </span>
          ) : (
            <Link
              key={index}
              href={`${basePath}/${page}`}
              className={`inline-flex items-center justify-center w-10 h-10 rounded-md text-sm font-medium transition-colors ${
                currentPage === page
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {page}
            </Link>
          )
        ))}
      </div>

      <Link
        href={currentPage < totalPages ? `${basePath}/${currentPage + 1}` : '#'}
        className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          currentPage < totalPages
            ? 'text-foreground hover:bg-accent hover:text-accent-foreground'
            : 'text-muted-foreground cursor-not-allowed opacity-50'
        }`}
        aria-disabled={currentPage >= totalPages}
      >
        Next
        <ChevronRightIcon className="h-4 w-4 ml-1" />
      </Link>
    </nav>
  );
}