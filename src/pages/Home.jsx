import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import emailjs from "emailjs-com";

import PropertyListingsHome from "../pages/PropertyListingsHome.jsx";

// Assets

import visitImg from "../assets/services/visitImg.jpg";
import maintenanceImg from "../assets/services/maintenanceImg.jpg";
import tenantImg from "../assets/services/tenantImg.jpg";
import backgroundImg from "../assets/services/backgroundImg.jpg";
import rentImg from "../assets/services/rentImg.jpg";
import marketingImg from "../assets/services/marketingImg.jpg";
import openHouseImg from "../assets/services/openHouseImg.jpg";
import leadImg from "../assets/services/leadImg.jpg";

// WHAT WE OFFER

import ownerImg from "../assets/services/owner.jpg";
import rentalsImg from "../assets/services/rental.jpg";
import tenant from "../assets/services/tenant.jpg";


// banner
import banner from "../assets/banner/banner.png";
// import banner1 from "../assets/banner/banner1.png";
// import banner2 from "../assets/banner/banner2.png";
// import banner3 from "../assets/banner/banner3.png";
// import banner4 from "../assets/banner/banner4.png";

import img1 from "../assets/careers/rental.jpeg"



const Home = () => {
  const navigate = useNavigate();
  const [startCount, setStartCount] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Advanced Search State
  const [searchData, setSearchData] = useState({
    location: "",
    propertyType: "",
    budget: "",
    bhk: "",
    purpose: "Buy"
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });



  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Advanced Search
  const handleSearchChange = (e) => {
    setSearchData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAdvancedSearch = (e) => {
    e.preventDefault();
    
    // Create URL search parameters with ONLY location (ignore property type completely)
    const params = new URLSearchParams();
    
    // Only add location if it has a value
    if (searchData.location.trim()) {
      params.append('location', searchData.location.trim());
    }
    
    // Property Type is NOT sent - intentionally ignored as per requirement
    
    // Build the target URL
    const targetUrl = params.toString() 
      ? `/PropertyListings?${params.toString()}` 
      : '/PropertyListings';
    
    // Navigate to listings page with query parameters
    navigate(targetUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_emvfrmo",
        "template_szxp2yc",
        formData,
        "2K-8VzSS5KV80UWSh"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0ANumber: ${formData.number}%0AMessage: ${formData.message}`;
          window.open(
            `https://wa.me/918438438413?text=${whatsappMessage}`,
            "_blank"
          );

          setFormData({ name: "", email: "", number: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  useEffect(() => {
    const handleScroll = () => {
      const stats = document.getElementById("stats-section");
      if (stats) {
        const rect = stats.getBoundingClientRect();
        if (rect.top < window.innerHeight && !startCount) {
          setStartCount(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startCount]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const statsData = [
    { end: 6, label: "Metro Cities Served", emoji: "📍" },
    { end: 500, label: "Happy NRI Clients", emoji: "🌏" },
    { end: 1000, label: "Properties Managed", emoji: "🏘️" },
  ];

  const faqs = [
    {
      question: "What property services do you offer?",
      answer:
        "From finding tenants and collecting rent to maintenance and legal paperwork — we do it all, end-to-end.",
    },
    {
      question: "Which cities do you operate in?",
      answer:
        "We currently serve Tiruvannamalai, Mumbai, Hyderabad, Pune, Chennai, and Kolkata.",
    },
    {
      question: "Do I pay upfront for tenant placement?",
      answer:
        "No. We charge only after we've successfully placed a tenant in your home.",
    },
    {
      question: "How much does your service cost in Tiruvannamalai?",
      answer:
        "Our pricing depends on the services you select. Contact us for a transparent and customized quote.",
    },
    {
      question: "Will I have to deal with tenants or vendors?",
      answer:
        "Not at all. We handle all ground-level interactions, so you enjoy peace of mind — wherever you are.",
    },
  ];

  return (
    <div className="font-sans text-dark">
    <section className="text-white text-center">
  <div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            minHeight: "70vh",
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative"
          }}
        >
          {/* ✅ Overlay (fixed) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              zIndex: 1
            }}
          ></div>

          {/* ✅ Content */}
          <div
            className="position-relative px-3"
            style={{ zIndex: 2, width: "100%", maxWidth: "900px" }}
          >
            <div
              style={{
                borderRadius: "20px",
                padding: "30px 15px"
              }}
            >
              {/* Heading */}
              <h2
                className="fw-bold mb-2"
                style={{
                  fontSize: "clamp(22px, 4vw, 40px)",
                  textShadow: "0 2px 10px rgba(0,0,0,0.5)"
                }}
              >
                Your dream property starts here
              </h2>

              <p
                className="mb-4"
                style={{
                  fontSize: "clamp(14px, 2.5vw, 22px)",
                  textShadow: "0 2px 10px rgba(0,0,0,0.5)"
                }}
              >
                Explore, Rent, Buy or Sell effortlessly
              </p>

              {/* ✅ SEARCH FORM */}
              <form onSubmit={handleAdvancedSearch}>
                <div className="d-flex justify-content-center px-2">
                  <div
                    className="d-flex flex-column flex-md-row align-items-stretch align-items-md-center gap-2 p-2"
                    style={{
                      background: "#fff",
                      borderRadius: "20px",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                      width: "100%",
                      maxWidth: "700px"
                    }}
                  >
                    {/* Location */}
                    <input
                      type="text"
                      name="location"
                      value={searchData.location}
                      onChange={handleSearchChange}
                      placeholder="📍 Location"
                      className="form-control border-0"
                      style={{
                        borderRadius: "50px",
                        minWidth: "0",
                        padding: "10px 15px"
                      }}
                    />

                    {/* Type */}
                    <select
                      name="propertyType"
                      value={searchData.propertyType}
                      onChange={handleSearchChange}
                      className="form-select border-0"
                      style={{
                        borderRadius: "50px",
                        maxWidth: "160px",
                        width: "100%",
                        padding: "10px 15px"
                      }}
                    >
                      <option value="">🏠 Type</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                      <option>Plot</option>
                    </select>

                    {/* Button */}
                    <button
                      type="submit"
                      className="btn px-4"
                      style={{
                        background: "#038A5E",
                        color: "#fff",
                        borderRadius: "50px",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                        padding: "10px 20px",
                        width: "100%"
                      }}
                    >
                       Search
                    </button>
                  </div>
                </div>
              </form>
              {/* END FORM */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>







      <div className="container mt-5" style={{ position: "relative" }}>

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Choose Us?</h2>
          <p>Your complete destination for smart property decisions</p>
        </div>

        {/* Cards */}
        <div className="row justify-content-center position-relative">

          {/* Card 1 */}
          <div className="col-md-4 position-relative" style={{ zIndex: 3 }}>
            <div
              className="p-4 text-center"
              style={{
                background: "#fff",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "0.4s",
                border: "2px solid transparent"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.border = "2px solid #038A5E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.border = "2px solid transparent";
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  margin: "0 auto",
                  borderRadius: "50%",
                  background: "#e6f4ef",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px"
                }}
              >
                🏡
              </div>

              <h5 className="mt-3 fw-bold">Effortless Rentals</h5>
              <p className="text-muted">
                Step into spaces that feel like home from day one. Explore handpicked
                rental properties designed for comfort, convenience, and lifestyle.
              </p>
            </div>
          </div>

          {/* Card 2 (Center - slightly down like image) */}
          <div
            className="col-md-4 position-relative"
            style={{ marginTop: "60px", zIndex: 2 }}
          >
            <div
              className="p-4 text-center"
              style={{
                background: "#fff",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "0.4s",
                border: "2px solid transparent"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.border = "2px solid #038A5E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.border = "2px solid transparent";
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  margin: "0 auto",
                  borderRadius: "50%",
                  background: "#e6f4ef",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px"
                }}
              >
                🔑
              </div>

              <h5 className="mt-3 fw-bold">Own Your Dream</h5>
              <p className="text-muted">
                Turn your vision into reality with the perfect property. From modern
                homes to valuable investments — find what truly belongs to you.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 position-relative" style={{ zIndex: 1 }}>
            <div
              className="p-4 text-center"
              style={{
                background: "#fff",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "0.4s",
                border: "2px solid transparent"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.border = "2px solid #038A5E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.border = "2px solid transparent";
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  margin: "0 auto",
                  borderRadius: "50%",
                  background: "#e6f4ef",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px"
                }}
              >
                📊
              </div>

              <h5 className="mt-3 fw-bold">Sell Smarter, Faster</h5>
              <p className="text-muted">
                Maximize your property’s value with the right exposure. Connect with
                genuine buyers and close deals with confidence and ease.
              </p>
            </div>
          </div>

        </div>
      </div>

















































      {/* --- Slide 2 ---
          <div className="carousel-item">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                height: "80vh",
                backgroundImage: `url(${banner1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-dark bg-opacity-75 py-5 px-4 rounded">
                <h1 className="display-4 fw-bold mb-3">
                  EXPERT PROPERTY SOLUTIONS
                </h1>
                <p className="lead">
                  Buy | Sell | Rent | Lease | Maintain
                </p>
                <Link to="/contact">
                  <button
                    style={{ backgroundColor: "#335393" }}
                    className="btn btn-lg text-white mt-4"
                  >
                    CONTACT US →
                  </button>
                </Link>
              </div>
            </div>
          </div>

          --- Slide 3 ---
          <div className="carousel-item">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                height: "80vh",
                backgroundImage: `url(${banner2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-dark bg-opacity-75 py-5 px-4 rounded">
                <h1 className="display-4 fw-bold mb-3">
                  YOUR TRUSTED PROPERTY PARTNER
                </h1>
                <p className="lead">
                  Rent | Lease | Maintenance | More
                </p>
                <Link to="/contact">
                  <button
                    style={{ backgroundColor: "#335393" }}
                    className="btn btn-lg text-white mt-4"
                  >
                    LEARN MORE →
                  </button>
                </Link>
              </div>
            </div>
          </div>

          --- Slide 4 ---
          <div className="carousel-item">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                height: "80vh",
                backgroundImage: `url(${banner3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-dark bg-opacity-75 py-5 px-4 rounded">
                <h1 className="display-4 fw-bold mb-3">
                  COMPLETE PROPERTY CARE SERVICES
                </h1>
                <p className="lead">
                  Sell | Buy | Rent | Maintain
                </p>
                <Link to="/contact">
                  <button
                    style={{ backgroundColor: "#335393" }}
                    className="btn btn-lg text-white mt-4"
                  >
                    KNOW MORE →
                  </button>
                </Link>
              </div>
            </div>
          </div> */}

      {/* --- Slide 5 --- */}

      {/* <div className="carousel-item">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                height: "80vh",
                backgroundImage: `url(${banner4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-dark bg-opacity-75 py-5 px-4 rounded">
                <h1 className="display-4 fw-bold mb-3">
                  ONE-STOP PROPERTY MANAGEMENT
                </h1>
                <p className="lead">
                  Buy | Sell | Rent | Lease | Maintain
                </p>
                <Link to="/contact">
                  <button
                    style={{ backgroundColor: "#335393" }}
                    className="btn btn-lg text-white mt-4"
                  >
                    GET STARTED →
                  </button>
                </Link>
              </div>
            </div>
          </div> */}
      {/* </div> */}

      {/* Controls */}
      {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      {/* </div> */}


      {/* Stats Section */}
      {/* <section id="stats-section" className="container py-5">
        <div className="row text-center g-4">
          {statsData.map((item, index) => (
            <div key={index} className="col-md-4">
              <div>
                <div className="display-3 mb-3">{item.emoji}</div>
                <h1 style={{ color: "#335393" }} className="fw-bold mb-2">
                  {startCount ? <CountUp end={item.end} duration={2} /> : "0"}+
                </h1>
                <p className="fw-medium">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Services Section */}
      {/* <section className="bg-light py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">OUR SERVICES</h2>
          <p className="mb-4">
            Tailogreen property management solutions for{" "}
            <span className="fw-semibold" style={{ color: "#335393" }}>
              NRIs & Homeowners in Tiruvannamalai
            </span>
          </p>
          <p className="mb-4">
            Managing a property from afar can be challenging — but we make it
            effortless. At PropTech Solutions, we handle every aspect of your
            property so you don’t have to.
          </p>

          <div className="row g-4">
            {[
              { name: "Scheduled Property Visits", icon: visitImg },
              { name: "Maintenance & Repairs", icon: maintenanceImg },
              { name: "Tenant Sourcing", icon: tenantImg },
              { name: "Background Verification", icon: backgroundImg },
              { name: "Rental Collection & Remittance", icon: rentImg },
              { name: "Digital Marketing & Listings", icon: marketingImg },
              { name: "Open House Management", icon: openHouseImg },
              { name: "Buyer Lead Generation", icon: leadImg },
            ].map((service, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="card h-100 shadow">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="card-img-top p-3"
                    style={{ height: "100px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <p className="fw-semibold">{service.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* WHAT WE OFFER */}

      {/* <section className="py-5" style={{ backgroundColor: "#f0f8ff" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-5">WHAT WE OFFER</h2>
          <div className="row g-4">
            Owner
            <div className="col-md-4">
              <div
                className="card h-100 border-0 shadow-sm position-relative"
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setHoveredCard("owner")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img
                  src={ownerImg}
                  className="card-img-top"
                  alt="Owner"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body p-0">
                  <Link
                    to="/property-management"
                    className="btn fw-semibold rounded-0 w-100 py-3"
                    style={{ fontSize: "1.1rem", color: "white", backgroundColor: "#335393" }}

                  >
                    Owner
                  </Link>
                </div>
                {hoveredCard === "owner" && (
                  <div
                    className="position-absolute top-50 start-50 translate-middle bg-dark text-white px- py-2 rounded shadow-lg"
                    style={{
                      zIndex: 1000,
                      fontSize: "0.9rem",
                      maxWidth: "500px",
                      textAlign: "center",
                    }}
                  >
                    NRI and other people staying away from their property and need management for rentals, tenant, and other maintenance related to the property
                  </div>
                )}
              </div>
            </div>

            Rentals
            <div className="col-md-4">
              <div
                className="card h-100 border-0 shadow-sm position-relative"
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setHoveredCard("rentals")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img
                  src={rentalsImg}
                  className="card-img-top"
                  alt="Rentals"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body p-0">
                  <Link
                    to="/PropertyListings"
                    className="btn fw-semibold rounded-0 w-100 py-3"
                    style={{ fontSize: "1.1rem", color: "white", backgroundColor: "#335393" }}
                  >
                    Rentals
                  </Link>
                </div>
                {hoveredCard === "rentals" && (
                  <div
                    className="position-absolute top-50 start-50 translate-middle bg-dark text-white px-3 py-2 rounded shadow-lg"
                    style={{
                      zIndex: 1000,
                      fontSize: "0.9rem",
                      maxWidth: "200px",
                      textAlign: "center",
                    }}
                  >
                    Complete rental management including tenant sourcing, background verification, rent collection, and property maintenance
                  </div>
                )}
              </div>
            </div>

            Tenant
            <div className="col-md-4">
              <div
                className="card h-100 border-0 shadow-sm position-relative"
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setHoveredCard("tenant")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img
                  src={tenant}
                  className="card-img-top"
                  alt="Tenant"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body p-0">
                  <Link
                    to="/tenant-management"
                    className="btn  fw-semibold rounded-0 w-100 py-3"
                    style={{ fontSize: "1.1rem", color: "white", backgroundColor: "#335393" }}
                  >
                    Tenant
                  </Link>
                </div>
                {hoveredCard === "tenant" && (
                  <div
                    className="position-absolute top-50 start-50 translate-middle bg-dark text-white px-3 py-2 rounded shadow-lg"
                    style={{
                      zIndex: 1000,
                      fontSize: "0.9rem",
                      maxWidth: "200px",
                      textAlign: "center",
                    }}
                  >
                    Tenant support services including property search, application assistance, move-in coordination, and ongoing tenant relations
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-5" style={{ backgroundColor: "#fff" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-5" style={{ fontSize: "2.5rem" }}>PLANS & PRICING</h2>
          <div className="row g-4 justify-content-center">
            Silver
            <div className="col-md-3">
              <div
                className="card border-2 shadow-lg h-100 position-relative"
                style={{
                  borderColor: "#335393",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  backgroundColor: "#fff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(217, 55, 94, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
                }}
              >
                <div className="position-absolute top-0 start-50 translate-middle badge px-4 py-2 rounded-pill shadow-sm" style={{ backgroundColor: "#335393", color: "white", fontSize: "0.9rem", fontWeight: "600" }}>
                  SILVER
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center pt-5 pb-4">
                  <p className="text-muted mb-2" style={{ fontSize: "0.9rem" }}>(1 year)</p>
                  <h2 className="fw-bold mb-3" style={{ color: "#335393", fontSize: "2.2rem" }}>
                    ₹ 750 <small className="fs-6 text-muted">/month</small>
                  </h2>
                  <p className="mb-4 text-center px-2" style={{ fontSize: "0.9rem", lineHeight: "1.4" }}>
                    Professional management services and routine maintenance
                  </p>



                  <Link
                    to="/plans"
                    className="btn fw-semibold px-4 py-2"
                    style={{
                      backgroundColor: "transparent",
                      color: "#335393",
                      border: "2px solid #335393",
                      borderRadius: "25px",
                      transition: "all 0.3s ease",
                      textDecoration: "none",
                      display: "inline-block",
                      textAlign: "center",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#335393";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#335393";
                    }}
                  >
                    VIEW MORE
                  </Link>







                </div>
              </div>
            </div>

            Gold - Featured/Center
            <div className="col-md-3">
              <div
                className="card border-2 shadow-lg h-100 position-relative"
                style={{
                  borderColor: "#335393",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  backgroundColor: "#335393",
                  color: "white",
                  transform: "scale(1.05)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05) translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(217, 55, 94, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(217, 55, 94, 0.2)";
                }}
              >
                <div className="position-absolute top-0 start-50 translate-middle badge bg-white px-4 py-2 rounded-pill shadow-sm" style={{ color: "#335393", fontSize: "0.9rem", fontWeight: "600" }}>
                  GOLD
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center pt-5 pb-4">
                  <p className="mb-2" style={{ fontSize: "0.9rem", opacity: "0.9" }}>(1 year)</p>
                  <h2 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
                    ₹ 1250 <small className="fs-6" style={{ opacity: "0.9" }}>month</small>
                  </h2>
                  <p className="mb-4 text-center px-2" style={{ fontSize: "0.95rem", lineHeight: "1.4" }}>
                    Leave the problem to us and expect verified tenants in no time
                  </p>


                  <button
                    className="btn btn-light fw-semibold px-4 py-2"
                    style={{
                      color: "#335393",
                      borderRadius: "25px",
                      fontWeight: "600"
                    }}
                    onClick={() => handleViewMore('gold')}
                  >
                    VIEW MORE
                  </button>



                  <Link
                    to="/plans"
                    state={{ type: 'gold' }}
                    className="btn btn-light fw-semibold px-4 py-2"
                    style={{
                      color: "#335393",
                      borderRadius: "25px",
                      fontWeight: "600",
                      textDecoration: "none",
                      display: "inline-block",
                      textAlign: "center",
                    }}
                  >
                    VIEW MORE
                  </Link>


                </div>
              </div>
            </div>

            Diamond
            <div className="col-md-3">
              <div
                className="card border-2 shadow-lg h-100 position-relative"
                style={{
                  borderColor: "#335393",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  backgroundColor: "#fff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(217, 55, 94, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
                }}
              >
                <div className="position-absolute top-0 start-50 translate-middle badge px-4 py-2 rounded-pill shadow-sm" style={{ backgroundColor: "#335393", color: "white", fontSize: "0.9rem", fontWeight: "600" }}>
                  DIAMOND
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center pt-5 pb-4">
                  <p className="text-muted mb-2" style={{ fontSize: "0.9rem" }}>(2 years)</p>
                  <h2 className="fw-bold mb-3" style={{ color: "#335393", fontSize: "2.2rem" }}>
                    ₹ 1000 <small className="fs-6 text-muted">/month</small>
                  </h2>
                  <p className="mb-4 text-center px-2" style={{ fontSize: "0.9rem", lineHeight: "1.4" }}>
                    Join us and live with hassle free Maintenance & rentals
                  </p>
                  <Link
                    to="/plans"
                    className="btn fw-semibold px-4 py-2"
                    style={{
                      backgroundColor: "transparent",
                      color: "#335393",
                      border: `2px solid #335393`,
                      borderRadius: "25px",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#335393";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#335393";
                    }}
                    onClick={() => handleViewMore('diamond')}
                  >
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>

            Platinum
            <div className="col-md-3">
              <div
                className="card border-2 shadow-lg h-100 position-relative"
                style={{
                  borderColor: "#335393",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  backgroundColor: "#fff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(217, 55, 94, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
                }}
              >
                <div className="position-absolute top-0 start-50 translate-middle badge px-4 py-2 rounded-pill shadow-sm" style={{ backgroundColor: "#335393", color: "white", fontSize: "0.9rem", fontWeight: "600" }}>
                  PLATINUM
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center pt-5 pb-4">
                  <p className="text-muted mb-2" style={{ fontSize: "0.9rem" }}>(5 years)</p>
                  <h2 className="fw-bold mb-3" style={{ color: "#335393", fontSize: "2.2rem" }}>
                    ₹ 750 <small className="fs-6 text-muted">/month</small>
                  </h2>
                  <p className="mb-4 text-center px-2" style={{ fontSize: "0.9rem", lineHeight: "1.4" }}>
                    Join us and live with hassle free Maintenance & rentals
                  </p>
                  <Link
                    to="/plans"
                    className="btn fw-semibold px-4 py-2"
                    style={{
                      backgroundColor: "transparent",
                      color: "#335393",
                      border: `2px solid #335393`,
                      borderRadius: "25px",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#335393";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#335393";
                    }}
                    onClick={() => handleViewMore('platinum')}
                  >
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* How It Works */}
      {/* <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">HOW IT WORKS</h2>
          <p className="mb-5">
            A simple, seamless process to manage your property stress-free
          </p>

          <div className="row g-4">
            {[
              { icon: "📋", label: "Choose Your Service" },
              { icon: "🤝", label: "Connect with Our Expert" },
              { icon: "🔑", label: "We Handle Everything" },
              { icon: "🎉", label: "Relax & Enjoy Peace of Mind" },
            ].map((step, index) => (
              <div key={index} className="col-6 col-md-3">
                <div>
                  <div className="display-4 mb-3" style={{ color: "#335393" }}>
                    {step.icon}
                  </div>
                  <p className="fw-semibold">{step.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <div className="container">
        <div className="row">
          <div className="col-12">
            <PropertyListingsHome />
          </div>
        </div>
      </div> */}

      {/* Contact & FAQs
      <section className="container py-5">
        <div className="row mb-5 g-5">
          <div className="col-md-6">
            <h3 className="fw-bold mb-3">
              Drop us a message for property management in Tiruvannamalai
            </h3>
            <p>
              US: +1-248-275-5811 <br /> IN: +91 81096 51510 <br /> Mail:
              sales@Sonagiri.in
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Number"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Message*"
                  className="form-control"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-success">
                SEND
              </button>
            </form>
          </div>

          <div className="col-md-6">
            <p>
              Looking for a property management company in Tiruvannamalai to
              manage your home? At PropTech Solutions, we are here to help you
              with all of your property management needs.
            </p>
            <p>
              Getting in touch with us is easy! Email us at{" "}
              <strong>sales@Sonagiri.in</strong>, or call{" "}
              <strong>+91 81096 51510</strong>.
            </p>
            <p>
              If you have any specific queries, fill the form and one of our
              representatives will get in touch within 48 hours.
            </p>
          </div>
        </div>

        FAQs
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-3">FAQs</h2>
          <p className="text-muted">Most frequent questions and answers</p>
        </div>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading-${index}`}>
                <button
                  className={`accordion-button ${activeIndex === index ? "" : "collapsed"
                    }`}
                  type="button"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""
                  }`}
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </section> */}






      {/* 

      DOCUMENTS Section

      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-5" style={{ fontSize: "2.5rem" }}>DOCUMENTS</h2>

          <div className="row g-4 justify-content-center">
            Rental Agreement
            <div className="col-lg-6 col-md-8">
              <div
                className="card h-100 shadow-lg border-0 position-relative"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  backgroundColor: "#fff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(217, 55, 94, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
                }}
              >
                <div style={{
                  height: "250px",
                  background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  Image added
                  <img
                    src={img1}
                    alt="Rental Agreement"
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: "0.85",
                      top: 0,
                      left: 0,
                    }}
                  />

                  Optional overlay for readability
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(255,255,255,0.3)"
                    }}
                  ></div>

                  Existing icons/text
                  <div style={{ fontSize: "4rem", color: "#335393", opacity: "0.3", zIndex: 2 }}>📄</div>
                  <div style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    fontSize: "1.5rem",
                    color: "#335393",
                    zIndex: 2
                  }}>
                    📋
                  </div>
                  <div style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                    fontSize: "1.2rem",
                    color: "#335393",
                    opacity: "0.7",
                    zIndex: 2
                  }}>
                    Legal Document
                  </div>
                </div>

                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-3" style={{ color: "#335393" }}>
                    Rental Agreement
                  </h5>
                  <p className="card-text text-muted mb-4">
                    Download the standard rental agreement template for property leasing and tenant management.
                  </p>

                  <button
                    className="btn fw-bold px-4 py-3 d-flex align-items-center justify-content-center w-100"
                    style={{
                      backgroundColor: "#335393",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      fontSize: "1.1rem",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#E67433";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#335393";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/rental-agreement.pdf';
                      link.download = 'rental-agreement.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <span style={{ marginRight: "10px" }}>📥</span>
                    Rental Agreement
                  </button>
                </div>
              </div>
            </div>

            Ownership Declaration
            <div className="col-lg-6 col-md-8">
              <div
                className="card h-100 shadow-lg border-0 position-relative"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  backgroundColor: "#fff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(217, 55, 94, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
                }}
              >
                <div style={{
                  height: "250px",
                  background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  Image added
                  <img
                    src="../src/assets/careers/ownership.jpeg"
                    alt="Ownership Declaration"
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: "0.85",
                      top: 0,
                      left: 0,
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(255,255,255,0.3)"
                    }}
                  ></div>

                  <div style={{ fontSize: "4rem", color: "#335393", opacity: "0.3", zIndex: 2 }}>📋</div>
                  <div style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    fontSize: "1.5rem",
                    color: "#335393",
                    zIndex: 2
                  }}>
                    🏠
                  </div>
                  <div style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                    fontSize: "1.2rem",
                    color: "#335393",
                    opacity: "0.7",
                    zIndex: 2
                  }}>
                    Legal Declaration
                  </div>
                </div>

                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-3" style={{ color: "#335393" }}>
                    Ownership Declaration
                  </h5>
                  <p className="card-text text-muted mb-4">
                    Download the property ownership declaration form for legal verification and documentation.
                  </p>

                  <button
                    className="btn fw-bold px-4 py-3 d-flex align-items-center justify-content-center w-100"
                    style={{
                      backgroundColor: "#335393",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      fontSize: "1.1rem",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#E67433";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#335393";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/ownership-declaration.pdf';
                      link.download = 'ownership-declaration.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <span style={{ marginRight: "10px" }}>📥</span>
                    Ownership Declaration
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                <i className="bi bi-info-circle me-2"></i>
                These documents are for reference purposes. Please consult with legal professionals for official use.
              </p>
            </div>
          </div>
        </div>
      </section> */}

    </div>
  );
};

export default Home;
