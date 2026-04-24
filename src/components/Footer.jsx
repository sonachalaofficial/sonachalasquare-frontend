import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import navlogo from "../assets/navlogo/logo5.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #038A5E, #026b48)",
      }}
      className="text-white pt-5 pb-3 mt-5"
    >
      <div className="container">
        <div className="row gy-4 align-items-start">

          {/* Location */}
          <div className="col-12 col-md-2">
            <h5 className="fw-semibold mb-3">India</h5>
            <p className="mb-0 text-light">Tiruvannamalai</p>
          </div>

          {/* Services */}
          <div className="col-12 col-md-3">
            <h5 className="fw-semibold mb-3">Services</h5>
            <ul className="list-unstyled text-light mb-0">
              <li className="mb-1">Manage a Property in India</li>
              <li className="mb-1">Rental Property Management</li>
              <li className="mb-1">Services for Owners</li>
              <li className="mb-1">Property for Rent in Tiruvannamalai</li>
              <li className="mb-1">Property for Sale in Tiruvannamalai</li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-12 col-md-2">
            <h5 className="fw-semibold mb-3">Company</h5>
            <ul className="list-unstyled text-light mb-0">
              <li className="mb-1">Our Team</li>
              <li className="mb-1">Partners</li>
              <li className="mb-1">Contact Us</li>
              <li className="mb-1">Social Artifacts</li>
              <li className="mb-1">FAQ</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-12 col-md-3">
            <h5 className="fw-semibold mb-3">Connect</h5>

            <div className="d-flex gap-3 mb-3 fs-5">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
              <FaYoutube />
            </div>

            <p className="text-light mb-2">
              <strong >Registered Address:</strong>{" "}
                  Hrify Technologies Pvt Ltd - Annai Parvathi Nagar, Vengikkal, Tiruvannamalai, Tamil Nadu 606604
            </p>

            <p className="d-flex align-items-center gap-2 text-light mb-2">
              <FaEnvelope /> sonachalasquare.support@gmail.com
            </p>

            <p className="d-flex align-items-center gap-2 text-light mb-0">
              <FaPhoneAlt /> +91 8608601049
            </p>
          </div>

          {/* Logo Section */}
          <div className="col-12 col-md-2 text-center text-md-end">
            <img
              src={navlogo}
              alt="logo"
              style={{
                height: "90px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <p
              style={{
                fontSize: "13px",
                margin: 0,
                lineHeight: "1.4",
              }}
            >
              Sonachala Square Property <br />
              Management Company
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-top border-light mt-4 pt-3 text-center">
          <p className="mb-0" style={{ fontSize: "14px" }}>
            © 2025 Sonachala Square | All rights reserved |{" "}
            <a href="#" className="text-white text-decoration-none">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;