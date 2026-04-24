import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PropertyContext } from "../usecontext/PropertyContext";
import axios from "axios";
import emailjs from "emailjs-com";

const PropertyDetails = () => {
  const { selectedProperty } = useContext(PropertyContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(selectedProperty);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    memberType: "NonMember",
    category: "",
    name: "",
    phone: "",
    email: "",
    message: "",
    captcha: "",
  });

  useEffect(() => {
    if (!selectedProperty && id) {
      const fetchProperty = async () => {
        try {
          

const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/properties/${id}`);


          setProperty(res.data);
        } catch (err) {
          console.error("Error loading property:", err);
        }
      };
      fetchProperty();
    }
  }, [id, selectedProperty]);

  if (!property) {
    return (
      <div className="container my-5">
        <h3>No property selected or loading...</h3>
        <button onClick={() => navigate("/PropertyListings")} className="btn btn-primary mt-3">
          Back to Listings
        </button>
      </div>
    );
  }

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    const carousel = document.querySelector("#propertyCarousel");
    const carouselInstance = window.bootstrap.Carousel.getInstance(carousel);
    carouselInstance.to(index);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare email data
    const emailData = {
      member_type: formData.memberType,
      category: formData.category,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
      property_title: property.title,
      property_price: property.price,
      property_location: `${property.location?.area}, ${property.location?.city}`,
    };

    emailjs
      .send(
        "service_npeqjzm",
        "template_gslupvu",
        emailData,
        "Q7Q475cnO7gwnp8YK"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setShowModal(false);
          setFormData({
            memberType: "NonMember",
            category: "",
            name: "",
            phone: "",
            email: "",
            message: "",
            captcha: "",
          });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-start flex-wrap">
        <h2 className="fw-bold text-uppercase">
          {property.title} <span className="badge bg-danger ms-2">ENQUIRE</span>
        </h2>
        <h4 className="text-danger">₹ {property.price}</h4>
      </div>
      <h5 className="text-muted">
        For Rent in {property.location?.area}, {property.location?.city}
      </h5>

      {/* Image Carousel */}
      {property.imageUrls && property.imageUrls.length > 0 && (
        <>
          <div id="propertyCarousel" className="carousel slide my-3" data-bs-ride="carousel">
            <div className="carousel-inner rounded shadow">
              {property.imageUrls.map((url, index) => (
                <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                  <img
                    src={
                      url.startsWith('http://') || url.startsWith('https://')
                        ? url
                        : `${import.meta.env.VITE_API_BASE_URL}${url}`
                    }
                    className="d-block w-100"
                    style={{ height: "400px", objectFit: "cover" }}
                    alt={`Property ${index}`}
                  />
                </div>
              ))}
            </div>

            {/* Arrows */}
            {property.imageUrls.length > 1 && (
              <>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#propertyCarousel"
                  data-bs-slide="prev"
                  onClick={() => setActiveIndex((prev) => (prev === 0 ? property.imageUrls.length - 1 : prev - 1))}
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#propertyCarousel"
                  data-bs-slide="next"
                  onClick={() => setActiveIndex((prev) => (prev === property.imageUrls.length - 1 ? 0 : prev + 1))}
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          <div className="d-flex overflow-auto justify-content-center  mb-4">
            {property.imageUrls.map((url, index) => (
              <img
                key={index}
              

                src={
                  url.startsWith('http://') || url.startsWith('https://')
                    ? url
                    : `${import.meta.env.VITE_API_BASE_URL}${url}`
                }


                alt={`Thumb ${index}`}
                onClick={() => handleThumbnailClick(index)}
                className={`me-2 rounded border ${index === activeIndex ? "border-primary border-3" : ""}`}
                style={{ height: "80px", width: "120px", objectFit: "cover", cursor: "pointer" }}
              />
            ))}
          </div>
        </>
      )}

      {/* ABOUT PROPERTY */}
      <h4 className="text-center mt-5 mb-3">ABOUT PROPERTY</h4>
      <div className="row text-center mb-4">
        <div className="col">
          <i className="bi bi-house-door-fill fs-4 d-block mb-1"></i>
          Age of Property<br /><strong>{property.age || 14}</strong>
        </div>
        <div className="col">
          <i className="bi bi-building fs-4 d-block mb-1"></i>
          Bedrooms<br /><strong>{property.bedrooms}</strong>
        </div>
        <div className="col">
          <i className="bi bi-droplet fs-4 d-block mb-1"></i>
          Bathrooms<br /><strong>{property.bathrooms}</strong>
        </div>
        <div className="col">
          <i className="bi bi-compass fs-4 d-block mb-1"></i>
          Facing<br /><strong>{property.facing || "East"}</strong>
        </div>
        <div className="col">
          <i className="bi bi-truck-front fs-4 d-block mb-1"></i>
          Parking<br /><strong>{property.parking || "Car Bike"}</strong>
        </div>
        <div className="col">
          <i className="bi bi-aspect-ratio fs-4 d-block mb-1"></i>
          Square Feet<br /><strong>{property.sizeSqFt}</strong>
        </div>
      </div>

      {/* QUICK SUMMARY */}
      <h5>Quick Summary</h5>
      <div className="table-responsive w-100 w-md-50">
        <table className="table table-bordered">
          <tbody>
            <tr><td>Bedrooms</td><td>{property.bedrooms}</td></tr>
            <tr><td>Bathrooms</td><td>{property.bathrooms}</td></tr>
            <tr><td>Status</td><td>{property.status}</td></tr>
            <tr><td>Available From</td><td>{property.availabilityDate ? new Date(property.availabilityDate).toLocaleDateString() : "N/A"}</td></tr>
            <tr><td>Floors</td><td>{property.floor || "0/1"}</td></tr>
            <tr><td>Facing</td><td>{property.facing || "East"}</td></tr>
            <tr><td>Furnished</td><td>{property.furnished || "SemiFurnished"}</td></tr>
            <tr><td>Parking</td><td>{property.parking || "Car Bike"}</td></tr>
            <tr><td>Maintenance Charge</td><td>₹ {property.maintenance || 1000}</td></tr>
          </tbody>
        </table>
      </div>

      {/* Preferences */}
      <h5>PREFERENCES</h5>
      <p>{property.preferences || "👨 Bachelors 👨‍👩‍👧‍👦 Family"}</p>

      {/* Facilities */}
      <h5>FACILITIES</h5>
      <p>{property.facilities || "💡 Light ⚡ Fan 🛏 Wardrobe"}</p>

      {/* CTA Button */}
      <div className="text-center">
        <button
          onClick={openModal}
          className="btn btn-danger mt-4 px-4 py-2 fw-bold"
          style={{ fontSize: "1.1rem", padding: "12px 30px" }}
        >
          ARE YOU INTERESTED?
        </button>
      </div>

      {/* Contact Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content" style={{ borderRadius: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
              <div className="modal-header" style={{ backgroundColor: "#f8f9fa", borderRadius: "15px 15px 0 0" }}>
                <h5 className="modal-title fw-bold">Send us a message</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                  aria-label="Close"
                ></button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  {/* Member Type Dropdown */}
                  <div className="mb-3">
                    <select
                      className="form-select"
                      name="memberType"
                      value={formData.memberType}
                      onChange={handleInputChange}
                      style={{ borderRadius: "8px", border: "1px solid #ddd" }}
                    >
                      <option value="NonMember">NonMember</option>
                      <option value="Member">Member</option>
                    </select>
                  </div>

                  {/* Category Dropdown */}
                  <div className="mb-3">
                    <select
                      className="form-select"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      style={{ borderRadius: "8px", border: "1px solid #ddd" }}
                    >
                      <option value="">Select Member Category</option>
                      <option value="Property Owner">Property Owner</option>
                      <option value="Tenant">Tenant</option>
                      <option value="Agent">Agent</option>
                      <option value="Investor">Investor</option>
                    </select>
                  </div>

                  {/* Name Input */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      style={{ borderRadius: "8px", border: "1px solid #ddd" }}
                    />
                  </div>

                  {/* Phone Input with India Flag */}
                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text" style={{ borderRadius: "8px 0 0 8px", border: "1px solid #ddd", borderRight: "none" }}>
                        🇮🇳
                      </span>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        required
                        style={{ borderRadius: "0 8px 8px 0", border: "1px solid #ddd", borderLeft: "none" }}
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      required
                      style={{ borderRadius: "8px", border: "1px solid #ddd" }}
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                      rows="3"
                      style={{ borderRadius: "8px", border: "1px solid #ddd", resize: "none" }}
                    ></textarea>
                  </div>

            

                </div>

                <div className="modal-footer" style={{ borderRadius: "0 0 15px 15px" }}>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                    style={{ borderRadius: "8px" }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn fw-bold px-4 py-2"
                    style={{
                      backgroundColor: "#007bff",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "1rem"
                    }}
                  >
                    SUBMIT NOW
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal Backdrop */}
      {showModal && (
        <div
          className="modal-backdrop fade show"
          onClick={closeModal}
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        ></div>
      )}
    </div>
  );
};

export default PropertyDetails;
