


// ✅ Updated PropertyForm.jsx to handle multiple images
import React, { useState } from "react";
import axios from "axios";

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    area: "",
    city: "",
    propertyType: "",
    status: "Rent",
    price: "",
    sizeSqFt: "",
    bedrooms: "",
    bathrooms: "",
    floor: "",
    facing: "",
    availabilityDate: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      images: Array.from(e.target.files),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("area", formData.area);
    data.append("city", formData.city);
    data.append("propertyType", formData.propertyType);
    data.append("status", formData.status);
    data.append("price", formData.price);
    data.append("sizeSqFt", formData.sizeSqFt);
    data.append("bedrooms", formData.bedrooms);
    data.append("bathrooms", formData.bathrooms);
    data.append("floor", formData.floor);
    data.append("facing", formData.facing);
    data.append("availabilityDate", formData.availabilityDate);

    formData.images.forEach((file) => {
      data.append("images", file);
    });

    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/properties`,
        data
      );

      // await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/properties`, data);

      // await axios.post("http://localhost:5000/api/properties", data);

      alert("Property added successfully!");
      setFormData({
        title: "",
        area: "",
        city: "",
        propertyType: "",
        status: "Rent",
        price: "",
        sizeSqFt: "",
        bedrooms: "",
        bathrooms: "",
        floor: "",
        facing: "",
        availabilityDate: "",
        images: [],
      });
    } catch (error) {
      console.error("Error adding property:", error);
      alert("Failed to add property!");
    }
  };

  return (
    <div className="container my-5">
      <h2>Add New Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Area</label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Property Type</label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="High Raised Apartment">High Raised Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Duplex">Duplex</option>
            <option value="Duplex Apartment">Duplex Apartment</option>
            <option value="Multistorey Apartment">Multistorey Apartment</option>
            <option value="Commercial Office Space">
              Commercial Office Space
            </option>
            <option value="Commercial Shop">Commercial Shop</option>
            <option value="Commercial Showroom">Commercial Showroom</option>
            <option value="Warehouse/Godown">Warehouse/Godown</option>
            <option value="Farm House">Farm House</option>
            <option value="Independent Houses">Independent Houses</option>
            <option value="Row Houses">Row Houses</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="form-select"
          >
            <option value="Rent">Rent</option>
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
            <option value="Lease">Lease</option> {/* ✅ Newly added */}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Size (Sq Ft)</label>
          <input
            type="number"
            name="sizeSqFt"
            value={formData.sizeSqFt}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Bedrooms</label>
          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Bathrooms</label>
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Floor</label>
          <input
            type="text"
            name="floor"
            value={formData.floor}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Facing</label>
          <input
            type="text"
            name="facing"
            value={formData.facing}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Availability Date</label>
          <input
            type="date"
            name="availabilityDate"
            value={formData.availabilityDate}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Images</label>
          <input
            type="file"
            name="images"
            multiple
            onChange={handleFileChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default PropertyForm;
