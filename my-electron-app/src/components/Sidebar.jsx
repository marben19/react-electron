import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/img/brand/light.svg';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: (
      <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
      </svg>
    ) },
    { path: '/login', label: 'Tasks', icon: (
      <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4h12v2H4V4zm0 5h12v2H4V9zm0 5h12v2H4v-2z"/>
      </svg>
    ) },
    { path: '/settings', label: 'Settings', icon: (
      <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20">
        <path d="M11 0h-2v2h2V0zm0 18h-2v2h2v-2zm8-9h-2v2h2v-2zm-18 0H0v2h2v-2zm14.95-7.95l-1.414 1.414 1.414-1.414zm-11.314 11.314l-1.414 1.414 1.414-1.414zm11.314 1.414l1.414 1.414-1.414-1.414zm-11.314-11.314l1.414 1.414-1.414-1.414z"/>
      </svg>
    ) },
  ];

  return (
    <nav className={`sidebar d-lg-block bg-gray-800 text-white ${collapsed ? 'collapsed' : ''}`} data-simplebar>
      <div className="sidebar-inner px-4 pt-3">
        {/* Sidebar toggle for mobile */}
        <div className="d-flex d-md-none justify-content-end mb-3">
          <button className="btn btn-sm btn-light" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? '☰' : '×'}
          </button>
        </div>

        {/* Sidebar menu */}
        <ul className="nav flex-column pt-3">
          <li className="nav-item">
            <a href="/dashboard" className="nav-link d-flex align-items-center">
              <span className="sidebar-icon">
                <img
                  src={logo}
                  height="20"
                  width="20"
                  alt="Volt Logo"
                />
              </span>
              <span className="mt-1 ms-1 sidebar-text">JJ's Inventory</span>
            </a>
          </li>
          <li>
            <hr className="my-2 border-gray-600" />
          </li>
          {menuItems.map((item) => (
            <li className={`nav-item ${location.pathname === item.path ? 'active' : ''}`} key={item.path}>
              <a
                href="#!"
                className={`nav-link d-flex align-items-center`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.path);
                }}
              >
                {item.icon}
                <span className="sidebar-text">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
