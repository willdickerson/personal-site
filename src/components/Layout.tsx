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
        <div className="max-w-4xl mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <a
            href="/"
            className="text-lg font-semibold tracking-wide text-dark hover:text-brown transition-colors whitespace-nowrap"
          >
            will dickerson
          </a>
          <Nav />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 px-6 md:px-12 py-12 flex flex-col">
        <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12">
        <div className="max-w-4xl mx-auto pt-8 border-t border-dark/[0.18] flex items-center justify-between font-mono text-xs text-brown">
          <span>© {new Date().getFullYear()} will dickerson</span>
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@willdickerson.net"
              className="hover:text-dark transition-colors"
            >
              contact
            </a>
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
