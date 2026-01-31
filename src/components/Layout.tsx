import type { ReactNode } from 'react';
import { Nav } from './Nav';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-8 px-6 md:px-12">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="text-lg font-semibold tracking-wide text-dark hover:text-brown transition-colors">
            will dickerson
          </a>
          <Nav />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 border-t-2 border-dark">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-brown">
          <span>© {new Date().getFullYear()}</span>
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/willdickerson" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-dark transition-colors"
            >
              github
            </a>
            <a 
              href="https://www.linkedin.com/in/will-dickerson/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-dark transition-colors"
            >
              linkedin
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
