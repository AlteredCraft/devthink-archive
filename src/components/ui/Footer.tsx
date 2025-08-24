import Link from 'next/link';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                DT
              </div>
              <span className="font-bold">DevThink.AI Archive</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A comprehensive archive of DevThink.AI newsletter articles covering 
              AI development, tools, and insights for software developers.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/articles/page/1"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                All Articles
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">External Links</h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="https://www.linkedin.com/in/samkeen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                www.linkedin.com/in/samkeen
                <ExternalLinkIcon className="ml-1 h-3 w-3" />
              </a>
              <a
                href="https://alteredcraft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                alteredcraft.com
                <ExternalLinkIcon className="ml-1 h-3 w-3" />
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2025 DevThink.AI Archive. All articles are the property of their respective authors.
            </p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}