import React from "react";
import { useNavigate } from "react-router-dom";

// ===== Icons (Simple Line Icons) =====
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.83.37 1.64.73 2.4a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.77-.28a2 2 0 0 1 2.11.45c.76.36 1.57.61 2.4.73A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ListIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav flex-1 ">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo" onClick={() => navigate("/")}>
          <span className="drop">🩸</span> Life Drop
        </div>

        {/* Icons */}
        <div className="nav-icons">
          <button onClick={() => navigate("/")}>
            <HomeIcon />
          </button>
          <button onClick={() => navigate("/about")}>
            <InfoIcon />
          </button>
          <button onClick={() => navigate("/contact")}>
            <PhoneIcon />
          </button>
        </div>

        {/* Donor Button */}
        <button onClick={() => navigate("/donors")} className="donor-btn">
          <ListIcon /> Donors
        </button>

        {/* Auth Buttons */}
        <div className="nav-auth">
          <button onClick={() => navigate("/login")} className="login">Login</button>
          <button onClick={() => navigate("/signup")} className="signup">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
