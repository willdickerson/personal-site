import { NavLink } from 'react-router-dom';

export function Nav() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm tracking-wide transition-colors duration-200 ${
      isActive 
        ? 'text-dark border-b border-dark' 
        : 'text-brown hover:text-dark'
    }`;

  return (
    <nav className="flex items-center gap-8">
      <NavLink to="/" className={linkClass} end>
        about
      </NavLink>
      <NavLink to="/projects" className={linkClass}>
        projects
      </NavLink>
      <NavLink to="/music" className={linkClass}>
        music
      </NavLink>
    </nav>
  );
}
