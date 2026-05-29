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
        <div className="max-w-4xl mx-auto flex flex-row items-center justify-between gap-4">
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
      <main className="flex-1 px-6 md:px-12 py-8 md:py-12 flex flex-col">
        <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12">
        <div className="max-w-4xl mx-auto pt-8 border-t border-dark/[0.18] font-mono text-xs text-brown flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-6 md:gap-y-2">
          <span>© {new Date().getFullYear()} will dickerson</span>
          <div className="flex flex-wrap items-center gap-x-6">
            <a
              href="mailto:hello@willdickerson.net"
              className="inline-flex items-center min-h-[44px] hover:text-dark transition-colors"
            >
              contact
            </a>
            <a
              href="https://github.com/willdickerson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[44px] hover:text-dark transition-colors"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/will-dickerson/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[44px] hover:text-dark transition-colors"
            >
              linkedin
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
