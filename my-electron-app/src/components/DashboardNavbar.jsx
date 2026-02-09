import { useState } from "react";
import avatarImg from "../assets/img/team/profile-picture-3.jpg";

const DashboardNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
      <div className="container-fluid px-0">
        <div className="d-flex justify-content-between w-100" id="navbarSupportedContent">
          <div className="d-flex align-items-center">
            {/* Search form */}
            <form className="navbar-search form-inline" id="navbar-search-main">
              <div className="input-group input-group-merge search-bar">
                <span className="input-group-text" id="topbar-addon">
                  <svg
                    className="icon icon-xs"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="topbar-addon"
                />
              </div>
            </form>
          </div>

          {/* Navbar links */}
          <ul className="navbar-nav align-items-center">
            {/* Notifications */}
            <li className="nav-item dropdown">
              <a
                className="nav-link text-dark notification-bell unread dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  className="icon icon-sm text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                <div className="list-group list-group-flush">
                  <a href="#" className="text-center text-primary fw-bold border-bottom border-light py-3">
                    Notifications
                  </a>
                  {/* Example notification */}
                  <a href="#" className="list-group-item list-group-item-action border-bottom">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <img
                          alt="Avatar"
                          src="../../assets/img/team/profile-picture-1.jpg"
                          className="avatar-md rounded"
                        />
                      </div>
                      <div className="col ps-0 ms-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <h4 className="h6 mb-0 text-small">Jose Leos</h4>
                          <small className="text-danger">a few moments ago</small>
                        </div>
                        <p className="font-small mt-1 mb-0">
                          Added you to an event "Project stand-up" tomorrow at 12:30 AM.
                        </p>
                      </div>
                    </div>
                  </a>
                  {/* Add more notifications here */}
                  <a href="#" className="dropdown-item text-center fw-bold rounded-bottom py-3">
                    View all
                  </a>
                </div>
              </div>
            </li>

            {/* User profile */}
            <li className="nav-item dropdown ms-lg-3">
              <a
                className="nav-link dropdown-toggle pt-1 px-0"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="d-flex align-items-center">
                  <img className="avatar rounded-circle" alt="Avatar" src={avatarImg} />
                  <div className="ms-2 d-none d-lg-block">
                    <span className="mb-0 font-small fw-bold text-gray-900">Bonnie Green</span>
                  </div>
                </div>
              </a>
              <div className="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1">
                <a className="dropdown-item d-flex align-items-center" href="#">
                  My Profile
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  Settings
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  Messages
                </a>
                <div className="dropdown-divider my-1"></div>
                <a className="dropdown-item d-flex align-items-center text-danger" href="#">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
