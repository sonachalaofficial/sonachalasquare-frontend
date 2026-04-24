import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { PropertyContext } from "../usecontext/PropertyContext"; // ✅ correct path

const PropertyListings = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    category: "",
    type: "",
    minBeds: "",
    minBaths: "",
  });

  const { setSelectedProperty } = useContext(PropertyContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/properties`
        );

        // Ensure response.data is an array
        let propertiesArray = [];
        if (Array.isArray(response.data)) {
          propertiesArray = response.data;
        } else if (response.data && response.data.properties && Array.isArray(response.data.properties)) {
          // Handle case where API returns { properties: [...] }
          propertiesArray = response.data.properties;
        } else {
          console.error("API response is not an array:", response.data);
          propertiesArray = [];
        }

        setProperties(propertiesArray);
        setFilteredProperties(propertiesArray);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setProperties([]);
        setFilteredProperties([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Dynamic filtering effect with debounce - ONLY location filtering per requirement
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filtered = properties.filter((property) => {
        // If no location filter, show all properties
        if (searchFilters.location === "") {
          return true;
        }

        // Safe null checks, case-insensitive match
        const searchValue = searchFilters.location.toLowerCase();
        const area = (property.location?.area || "").toLowerCase();
        const city = (property.location?.city || "").toLowerCase();

        // Match if either area OR city includes the search value
        return area.includes(searchValue) || city.includes(searchValue);
      });

      setFilteredProperties(filtered);
    }, 300); // 300ms debounce delay

    return () => clearTimeout(timeoutId);
  }, [searchFilters.location, properties]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = properties.filter((property) => {
      // If no location filter, show all properties
      if (searchFilters.location === "") {
        return true;
      }

      // Safe null checks, case-insensitive match
      const searchValue = searchFilters.location.toLowerCase();
      const area = (property.location?.area || "").toLowerCase();
      const city = (property.location?.city || "").toLowerCase();

      // Match if either area OR city includes the search value
      return area.includes(searchValue) || city.includes(searchValue);
    });

    setFilteredProperties(filtered);
  };

  const handleChange = (e) => {
    setSearchFilters({ ...searchFilters, [e.target.name]: e.target.value });
  };

  const clearFilters = () => {
    setSearchFilters({
      location: "",
      category: "",
      type: "",
      minBeds: "",
      minBaths: "",
    });
    setFilteredProperties(properties);
  };

  const handleCardClick = (property) => {
    setSelectedProperty(property);
    navigate(`/PropertyDetails/${property._id}`);
  };

  const location = useLocation();

  // Parse URL query parameters and apply filters - ONLY use location per requirement
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const locationParam = urlParams.get('location') || "";

    // All other parameters (category, type, etc.) are intentionally ignored
    setSearchFilters({
      location: locationParam,
      category: "",
      type: "",
      minBeds: "",
      minBaths: "",
    });
  }, [location.search]);

  // This will be true when path is "/"
  const isHomePage = location.pathname === "/";

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-9">
          <h2 className="mb-2">PROPERTY LISTINGS</h2>
          <p className="text-muted mb-4">
            {filteredProperties.length} properties found
            {properties.length > 0 && filteredProperties.length !== properties.length && (
              <small className="text-primary ms-2">
                (filtered from {properties.length} total)
              </small>
            )}
          </p>

          {loading ? (
            <p>Loading properties...</p>
          ) : (





           <div className="row">
  {filteredProperties.map((property) => (
    <div
      key={property._id}
      className="col-12 mb-4"
      onClick={() => handleCardClick(property)}
      style={{ cursor: "pointer" }}
    >
      <div
        className="d-flex flex-column flex-md-row"
        style={{
          background: "#fff",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          position: "relative", // ✅ for price
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow =
            "0 10px 25px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 4px 12px rgba(0,0,0,0.1)";
        }}
      >
        {/* ✅ PRICE (TOP RIGHT) */}
        <span
        className="price-mobile"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "linear-gradient(45deg, #ffdf7e, #ffc107)",
            color: "#333",
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "15px",
            fontWeight: 600,
            zIndex: 10,
          }}
        >
          ₹{property.price || 0}
        </span>

        {/* ✅ IMAGE */}
        <div
          className="position-relative property-card-image"
          style={{
            width: "260px",
            minWidth: "260px",
          }}
        >
          <img
            src={
              property.imageUrls?.length > 0
                ? property.imageUrls[0].startsWith("http")
                  ? property.imageUrls[0]
                  : `${import.meta.env.VITE_API_BASE_URL}${property.imageUrls[0]}`
                : "https://via.placeholder.com/400x230?text=No+Image"
            }
            alt={property.title || "Property Image"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* PROPERTY TYPE */}
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              background: "linear-gradient(45deg, #007bff, #6610f2)",
              color: "#fff",
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            {property.propertyType || "Flat"}
          </span>

          {/* STATUS */}
          <span
            style={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              background: "linear-gradient(45deg, #ffdf7e, #ffc107)",
              color: "#333",
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            {property.status || "Rent"}
          </span>
        </div>

        {/* ✅ CONTENT */}
        <div className="flex-grow-1 p-3 d-flex flex-column justify-content-between">
          {/* TOP */}
          <div>
            <h5 style={{ fontWeight: 700, marginBottom: "6px" }}>
              {property.title}
            </h5>

            <p className="text-muted small mb-2">
              📍 {property.location?.area}, {property.location?.city}
            </p>

            <ul className="list-unstyled small text-muted mb-2">
              <li>
                📏 {property.sizeSqFt} sq ft | 🛏 {property.bedrooms} BR | 🚿{" "}
                {property.bathrooms} Bath
              </li>
              <li>
                🏢 {property.floor} | 🌅 {property.facing}
              </li>
            </ul>
          </div>

          {/* BOTTOM */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
            <p className="small text-muted mb-0">
              Available:{" "}
              {property.availabilityDate
                ? new Date(property.availabilityDate).toLocaleDateString()
                : "N/A"}
            </p>

            <button
              className="btn btn-sm"
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "linear-gradient(45deg, #ff4b2b, #ff416c)",
                color: "#fff",
                border: "none",
                borderRadius: "20px",
                padding: "6px 16px",
                fontWeight: 500,
              }}
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

        {/* ADVANCED SEARCH */}

        {!isHomePage && (
          <div className="col-md-3">
            <div className="bg-info text-white p-3 rounded mb-4">
              <h5 className="fw-bold">ADVANCED SEARCH</h5>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  name="location"
                  value={searchFilters.location}
                  onChange={handleChange}
                  placeholder="Location"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  name="category"
                  value={searchFilters.category}
                  onChange={handleChange}
                  placeholder="Property Category"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  name="type"
                  value={searchFilters.type}
                  onChange={handleChange}
                  placeholder="Property Type"
                  className="form-control mb-2"
                />
                <div className="row mb-2">
                  <div className="col">
                    <input
                      type="number"
                      name="minBeds"
                      value={searchFilters.minBeds}
                      onChange={handleChange}
                      placeholder="Min Beds"
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      name="minBaths"
                      value={searchFilters.minBaths}
                      onChange={handleChange}
                      placeholder="Min Baths"
                      className="form-control"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-warning w-100 fw-bold mb-2">
                  SEARCH
                </button>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="btn btn-secondary w-100 fw-bold"
                >
                  CLEAR FILTERS
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyListings;
