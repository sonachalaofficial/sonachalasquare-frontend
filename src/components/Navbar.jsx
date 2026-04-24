import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import navlogo from "../assets/navlogo/logo5.png";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "linear-gradient(135deg, #038A5E, #026b48)",
        padding: "14px 24px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
      }}
    >
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={navlogo}
            alt="logo"
            style={{
              height: "95px",
              objectFit: "contain",
              filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.3))"
            }}
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          style={{
            border: "1px solid rgba(255,255,255,0.5)",
            color: "#fff"
          }}
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto" style={{ gap: "10px" }}>

            {/* Main Menu */}
            {[
              { name: "Home", link: "/", icon: "fa-home" },
              { name: "Property", link: "/PropertyListings", icon: "fa-building" },
              { name: "For Buyer", link: "/buyer", icon: "fa-user" },
              { name: "For Rent", link: "/rent", icon: "fa-key" },
              { name: "For Seller", link: "/seller", icon: "fa-user-tie" },
            ].map((item, i) => (
              <li className="nav-item" key={i}>
                <Link
                  className="nav-link text-white d-flex align-items-center gap-2"
                  to={item.link}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "8px",
                    transition: "0.3s"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <i className={`fas ${item.icon}`}></i>
                  {item.name}
                </Link>
              </li>
            ))}



            {/* Services Dropdown */}



            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white d-flex align-items-center gap-2"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="fas fa-concierge-bell"></i>
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/housing-edge">
                    <i className="fas fa-star me-2"></i> Housing Edge
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/home-loan">
                    <i className="fas fa-hand-holding-usd me-2"></i> Home Loan
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/housing-protect">
                    <i className="fas fa-shield-alt me-2"></i> Housing Protect
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/housing-premium">
                    <i className="fas fa-crown me-2"></i> Housing Premium
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/emi">
                    <i className="fas fa-calculator me-2"></i> EMI Calculator
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/property-value">
                    <i className="fas fa-chart-line me-2"></i> Property Value Calculator
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/rent-receipt">
                    <i className="fas fa-file-invoice me-2"></i> Rent Receipt Generator
                  </Link>
                </li>     
              </ul>
            </li>

            {/* Tools Dropdown */}
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white d-flex align-items-center gap-2"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="fas fa-tools"></i>
                Tools
              </a>
              <ul className="dropdown-menu">
                
              </ul>
            </li> */}

            {/* Support */}
            <li className="nav-item">
              <Link
                className="nav-link text-white d-flex align-items-center gap-2"
                to="/support"
                style={{ padding: "8px 14px", borderRadius: "8px" }}
              >
                <i className="fas fa-headset"></i>
                Support
              </Link>
            </li>

          </ul>

          {/* Login Button */}
          <Link
            to="/AdminLogin"
            className="btn"
            style={{
              background: "#fff",
              color: "#038A5E",
              fontWeight: "700",
              borderRadius: "10px",
              padding: "8px 18px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              transition: "0.3s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <i className="fas fa-user me-2"></i>
            Login
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;