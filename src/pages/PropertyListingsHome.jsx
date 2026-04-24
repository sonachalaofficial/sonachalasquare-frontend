import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PropertyContext } from "../usecontext/PropertyContext";

const PropertyListingsHome = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedProperty } = useContext(PropertyContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/properties`
        );

        // Ensure response.data is an array
        if (Array.isArray(response.data)) {
          setProperties(response.data);
        } else if (response.data && response.data.properties && Array.isArray(response.data.properties)) {
          // Handle case where API returns { properties: [...] }
          setProperties(response.data.properties);
        } else {
          console.error("API response is not an array:", response.data);
          setProperties([]);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCardClick = (property) => {
    setSelectedProperty(property);
    navigate(`/PropertyDetails/${property._id}`);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <h2 className="mb-2">PROPERTY LISTINGS</h2>
          <p className="text-muted mb-4">
            {properties.length} properties found
          </p>

          {loading ? (
            <p>Loading properties...</p>
          ) : (






            <div className="row">
              {properties.map((property) => (
                <div
                  key={property._id}
                  className="col-lg-4 col-md-6 mb-4"
                  onClick={() => handleCardClick(property)}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className="card h-100 rounded-4 overflow-hidden"
                    style={{
                      border: "1px solid #f1f1f1",
                      backgroundColor: "#fff",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                    }}
                  >
                    <div className="position-relative">
                      <img
                        src={
                          property.imageUrls?.length > 0
                            ? (property.imageUrls[0].startsWith("http://") ||
                              property.imageUrls[0].startsWith("https://")
                              ? property.imageUrls[0]
                              : `${import.meta.env.VITE_API_BASE_URL}${property.imageUrls[0]}`)
                            : "https://via.placeholder.com/400x230?text=No+Image"
                        }
                        alt={property.title || "Property Image"}
                        className="card-img-top"
                        style={{
                          height: "230px",
                          objectFit: "cover",
                          transition: "transform 0.4s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      />

                      {/* Gradient overlay */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                        }}
                      ></div>

                      {/* Badges */}
                      <span
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          background: "linear-gradient(45deg, #007bff, #007bff)",
                          color: "#fff",
                          padding: "6px 14px",
                          borderRadius: "20px",
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        {property.propertyType || "Flat"}
                      </span>

                      <span
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          background: "linear-gradient(45deg, #007bff, #6610f2)",
                          color: "#333",
                          padding: "6px 14px",
                          borderRadius: "20px",
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        {property.status || "Rent"}
                      </span>

                      <span
                        style={{
                          position: "absolute",
                          bottom: "10px",
                          left: "10px",
                          background: "linear-gradient(45deg, #E67433, #E67433)",
                          color: "#fff",
                          padding: "6px 14px",
                          borderRadius: "20px",
                          fontSize: "15px",
                          fontWeight: 600,
                          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                        }}
                      >
                        ₹{property.price || 0}
                      </span>
                    </div>

                    <div className="card-body" style={{ padding: "16px" }}>
                      <h5 className="card-title" style={{ fontWeight: 700, marginBottom: "6px", color: "#212529" }}>
                        {property.title}
                      </h5>
                      <p className="text-muted small" style={{ marginBottom: "8px" }}>
                        📍 {property.location?.area}, {property.location?.city}
                      </p>

                      <ul
                        className="list-unstyled mb-3 small"
                        style={{ color: "#6c757d", marginBottom: "10px" }}
                      >
                        <li>
                          📏 {property.sizeSqFt} sq ft | 🛏 {property.bedrooms} BR | 🚿{" "}
                          {property.bathrooms} Bath
                        </li>
                        <li>
                          🏢 {property.floor} | 🌅 {property.facing}
                        </li>
                      </ul>

                      <div className="d-flex justify-content-between align-items-center">
                        <p className="small text-muted mb-0">
                          Available:{" "}
                          {property.availabilityDate
                            ? new Date(property.availabilityDate).toLocaleDateString()
                            : "N/A"}
                        </p>

                        <button
                          className="btn btn-sm"
                          style={{
                            background: "linear-gradient(45deg, #ff6a00, #ff6a00)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "20px",
                            padding: "6px 16px",
                            fontWeight: 500,
                            transition: "background 0.3s ease",
                          }}
                          onMouseEnter={(e) =>
                          (e.currentTarget.style.background =
                            "linear-gradient(45deg, #ff6a00, #ff6a00)")
                          }
                          onMouseLeave={(e) =>
                          (e.currentTarget.style.background =
                            "linear-gradient(45deg, #ff4b2b, #ff416c)")
                          }
                        >
                          ENQUIRE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>







          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyListingsHome;
