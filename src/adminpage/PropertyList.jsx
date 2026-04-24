

import React, { useEffect, useState } from "react";
import axios from "axios";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [editingProperty, setEditingProperty] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    area: "",
    city: "",
    price: "",
    status: "",
    bedrooms: "",
    bathrooms: "",
    images: [],
  });

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {

      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/properties`
      );

      setProperties(res.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      try {

        await axios.delete(
          `${import.meta.env.VITE_API_BASE_URL}/api/properties/${id}`
        );

        alert("Property deleted");
        fetchProperties();
      } catch (error) {
        console.error("Error deleting property:", error);
        alert("Failed to delete property");
      }
    }
  };

  const handleEditClick = (property) => {
    setEditingProperty(property._id);
    setEditFormData({
      title: property.title,
      area: property.location?.area || "",
      city: property.location?.city || "",
      price: property.price,
      status: property.status,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      images: [],
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditFileChange = (e) => {
    setEditFormData((prevData) => ({
      ...prevData,
      images: Array.from(e.target.files),
    }));
  };





  const handleEditSubmit = async (id) => {
    try {
      const data = new FormData();
      data.append("title", editFormData.title);
      data.append("area", editFormData.area);
      data.append("city", editFormData.city);
      data.append("price", editFormData.price);
      data.append("status", editFormData.status);
      data.append("bedrooms", editFormData.bedrooms);
      data.append("bathrooms", editFormData.bathrooms);

      if (editFormData.images && editFormData.images.length > 0) {
        editFormData.images.forEach((file) => {
          data.append("images", file);
        });
      }

      // Debug: View FormData content
      for (let pair of data.entries()) {
        console.log(`${pair[0]}:`, pair[1]);
      }

      const res = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/properties/${id}`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert("Property updated!");
      setEditingProperty(null);
      fetchProperties(); // Refresh list
    } catch (error) {
      console.error("Error updating property:", error);
      alert("Failed to update property");
    }
  };




  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold text-center">Explore Properties</h2>







      <div className="row">
        {properties.map((property) => (
          <div key={property._id} className="col-md-4 mb-4">
            <div
              className="card h-100 rounded-4"
              style={{
                border: "1px solid #f1f1f1",
                backgroundColor: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                overflow: "hidden",
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
              {/* Image Section */}
              <div className="position-relative">
                <img
                  src={
                    property.imageUrls && property.imageUrls.length > 0
                      ? property.imageUrls[0].startsWith("http://") ||
                        property.imageUrls[0].startsWith("https://")
                        ? property.imageUrls[0]
                        : `${import.meta.env.VITE_API_BASE_URL}${property.imageUrls[0]}`
                      : "https://via.placeholder.com/400x230?text=No+Image"
                  }
                  className="card-img-top rounded-top-4"
                  alt={property.title || "Property Image"}
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
                    background: "linear-gradient(to top, rgba(0,0,0,0.45), transparent)",
                  }}
                ></div>

                {/* Type Badge */}
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

                {/* Status Badge */}
                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
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

                {/* Price Tag */}
                <span
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
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

              {/* Body Section */}
              <div className="card-body" style={{ padding: "18px" }}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5
                    className="card-title fw-semibold text-truncate mb-0"
                    style={{ color: "#212529", fontWeight: 700 }}
                  >
                    {property.title}
                  </h5>
                  <i
                    className="bi bi-heart fs-5"
                    role="button"
                    title="Add to Wishlist"
                    style={{
                      color: "#ccc",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ff4b2b")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#ccc")}
                  ></i>
                </div>

                <p className="text-muted mb-2">
                  <i className="bi bi-geo-alt-fill me-1"></i>
                  {property.location?.area}, {property.location?.city}
                </p>

                <ul
                  className="list-unstyled text-muted small mb-2"
                  style={{ lineHeight: "1.5" }}
                >
                  <li>
                    📏 {property.sizeSqFt || 950} sq ft | 🛏 {property.bedrooms} BR | 🛁{" "}
                    {property.bathrooms} Bath
                  </li>
                  <li>
                    🏢 {property.floor || "0/1"} Floor | 🌅 {property.facing || "East"}
                  </li>
                </ul>

                <p className="text-muted small mb-3">
                  <i className="bi bi-calendar-event me-1"></i>
                  Available:{" "}
                  {property.availabilityDate
                    ? new Date(property.availabilityDate).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "2-digit",
                    })
                    : "N/A"}
                </p>

                {/* Edit Section */}
                {editingProperty === property._id ? (
                  <div className="mt-3">
                    <h6 className="fw-bold mb-3">Edit Property</h6>
                    <input
                      type="text"
                      name="title"
                      value={editFormData.title}
                      onChange={handleEditChange}
                      className="form-control mb-2"
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      name="area"
                      value={editFormData.area}
                      onChange={handleEditChange}
                      className="form-control mb-2"
                      placeholder="Area"
                    />
                    <input
                      type="text"
                      name="city"
                      value={editFormData.city}
                      onChange={handleEditChange}
                      className="form-control mb-2"
                      placeholder="City"
                    />
                    <input
                      type="number"
                      name="price"
                      value={editFormData.price}
                      onChange={handleEditChange}
                      className="form-control mb-2"
                      placeholder="Price"
                    />
                    <select
                      name="status"
                      value={editFormData.status}
                      onChange={handleEditChange}
                      className="form-select mb-2"
                    >
                      <option value="Rent">Rent</option>
                      <option value="Buy">Buy</option>
                      <option value="Sell">Sell</option>
                      <option value="Lease">Lease</option>
                    </select>
                    <input
                      type="number"
                      name="bedrooms"
                      value={editFormData.bedrooms}
                      onChange={handleEditChange}
                      className="form-control mb-2"
                      placeholder="Bedrooms"
                    />
                    <input
                      type="number"
                      name="bathrooms"
                      value={editFormData.bathrooms}
                      onChange={handleEditChange}
                      className="form-control mb-2"
                      placeholder="Bathrooms"
                    />
                    <div className="mb-3">
                      <label className="form-label">Upload New Images</label>
                      <input
                        type="file"
                        name="images"
                        multiple
                        onChange={handleEditFileChange}
                        className="form-control"
                      />
                    </div>
                    <button
                      onClick={() => handleEditSubmit(property._id)}
                      className="btn btn-success btn-sm me-2"
                      style={{
                        borderRadius: "20px",
                        padding: "5px 14px",
                        background: "linear-gradient(45deg, #28a745, #00c851)",
                        border: "none",
                      }}
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingProperty(null)}
                      className="btn btn-secondary btn-sm"
                      style={{
                        borderRadius: "20px",
                        padding: "5px 14px",
                        background: "#6c757d",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between mt-3">
                    <button
                      onClick={() => handleEditClick(property)}
                      className="btn btn-sm"
                      style={{
                        borderRadius: "20px",
                        padding: "5px 14px",
                        background: "linear-gradient(45deg, #007bff, #6610f2)",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(property._id)}
                      className="btn btn-sm"
                      style={{
                        borderRadius: "20px",
                        padding: "5px 14px",
                        background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>











    </div>
  );
};

export default PropertyList;
