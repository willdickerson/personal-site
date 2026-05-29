import { NavLink } from 'react-router-dom';

export function Nav() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `inline-flex items-center min-h-[44px] text-sm tracking-wide transition-colors duration-200 ${
      isActive ? 'text-dark' : 'text-brown hover:text-dark'
    }`;

  return (
    <nav className="flex items-center gap-8">
      <NavLink to="/" className={linkClass} end>
        {({ isActive }) => (
          <span className={isActive ? 'border-b border-dark' : ''}>about</span>
        )}
      </NavLink>
      <NavLink to="/music" className={linkClass}>
        {({ isActive }) => (
          <span className={isActive ? 'border-b border-dark' : ''}>music</span>
        )}
      </NavLink>
    </nav>
  );
}
