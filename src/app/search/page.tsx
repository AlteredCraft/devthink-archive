'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { SearchIcon } from 'lucide-react';
import Layout from '@/components/ui/Layout';
import ArticleCard from '@/components/ui/ArticleCard';
import type { Article } from '@/lib/articles';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams?.get('q') || '');
  const [results, setResults] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [allArticles, setAllArticles] = useState<Article[]>([]);

  // Load articles on component mount
  useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await fetch('/articles/articles_index.json');
        const articles = await response.json();
        setAllArticles(articles.map((article: {
          title: string;
          author: string;
          date: string;
          url: string;
          filename: string;
        }) => ({
          ...article,
          slug: article.filename.replace('.md', ''),
          excerpt: `Explore ${article.title.toLowerCase()} in this comprehensive guide covering key concepts, practical implementations, and expert insights for developers.`
        })));
      } catch (error) {
        console.error('Error loading articles:', error);
      }
    };
    
    loadArticles();
  }, []);

  const searchArticles = useCallback((searchQuery: string): Article[] => {
    const lowercaseQuery = searchQuery.toLowerCase();
    return allArticles.filter(article => 
      article.title.toLowerCase().includes(lowercaseQuery) ||
      (article.author && article.author.toLowerCase().includes(lowercaseQuery))
    );
  }, [allArticles]);

  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    setIsLoading(true);
    setHasSearched(true);

    // Simulate a slight delay for better UX
    setTimeout(() => {
      const searchResults = searchArticles(searchQuery);
      setResults(searchResults);
      setIsLoading(false);
    }, 200);
  }, [allArticles, searchArticles]);

  useEffect(() => {
    const initialQuery = searchParams?.get('q');
    if (initialQuery && allArticles.length > 0) {
      setQuery(initialQuery);
      performSearch(initialQuery);
    }
  }, [searchParams, allArticles, performSearch]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(query);
    
    // Update URL with search query
    const url = new URL(window.location.href);
    if (query.trim()) {
      url.searchParams.set('q', query);
    } else {
      url.searchParams.delete('q');
    }
    window.history.replaceState({}, '', url.toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    
    // Perform search as user types (debounced)
    if (newQuery.trim().length >= 2) {
      const timeoutId = setTimeout(() => {
        performSearch(newQuery);
      }, 300);
      
      return () => clearTimeout(timeoutId);
    } else if (newQuery.trim().length === 0) {
      setResults([]);
      setHasSearched(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Search Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Search Articles</h1>
            <p className="text-muted-foreground mb-8">
              Search through 115+ DevThink.AI newsletter articles
            </p>
            
            {/* Search Form */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search articles by title, author, or content..."
                  className="w-full h-14 pl-12 pr-4 text-lg rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={query}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="mt-4 inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                <SearchIcon className="mr-2 h-5 w-5" />
                Search
              </button>
            </form>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-12">
              <div className="inline-flex items-center text-muted-foreground">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mr-3"></div>
                Searching articles...
              </div>
            </div>
          )}

          {/* Search Results */}
          {!isLoading && hasSearched && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Search Results {query && `for "${query}"`}
              </h2>
              <p className="text-muted-foreground">
                {results.length === 0 
                  ? 'No articles found. Try adjusting your search terms.'
                  : `Found ${results.length} article${results.length !== 1 ? 's' : ''}`
                }
              </p>
            </div>
          )}

          {/* Results Grid */}
          {!isLoading && results.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}

          {/* No Results State */}
          {!isLoading && hasSearched && results.length === 0 && query.trim() && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <SearchIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-6">
                  We couldn&apos;t find any articles matching &quot;{query}&quot;. Try using different keywords or check the spelling.
                </p>
                <button
                  onClick={() => {
                    setQuery('');
                    setResults([]);
                    setHasSearched(false);
                  }}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-md transition-colors"
                >
                  Clear search
                </button>
              </div>
            </div>
          )}

          {/* Popular Searches or Recent Articles when no search */}
          {!isLoading && !hasSearched && (
            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-6">Popular Topics</h2>
              <div className="flex flex-wrap gap-3 mb-12">
                {['AI Agents', 'LLM Applications', 'RAG Systems', 'Prompt Engineering', 'OpenAI', 'LangChain', 'Machine Learning'].map((topic) => (
                  <button
                    key={topic}
                    onClick={() => {
                      setQuery(topic);
                      performSearch(topic);
                    }}
                    className="px-4 py-2 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}