import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  onSearch?: (query: string) => void;
}

export default function Layout({ children, onSearch }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={onSearch} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}