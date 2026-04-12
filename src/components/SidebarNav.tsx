import React from 'react';
import { NavLink } from 'react-router-dom';

type NavItem = {
  label: string;
  to: string;
  end?: boolean;
};

const navItems: NavItem[] = [
  { label: 'Home', to: '/', end: true },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Blog', to: '/blog' },
  { label: 'Fun Corner', to: '/fun-corner' },
];

const SidebarNav: React.FC = () => {
  return (
    <aside className="sidebar-nav" aria-label="Primary">
      <NavLink to="/" className="sidebar-avatar-link" aria-label="Go to home">
        <img
          src="/images/SA_profile_v2.jpg"
          className="sidebar-avatar"
          alt="Sudarshan Anand profile"
        />
      </NavLink>

      <nav className="sidebar-links" aria-label="Section navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `sidebar-link${isActive ? ' active' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default SidebarNav;
