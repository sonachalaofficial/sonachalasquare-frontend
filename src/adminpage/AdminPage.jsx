import React, { useState } from 'react';
import PropertyForm from './PropertyForm';
import PropertyList from './PropertyList';

const AdminPage = () => {
  const [showList, setShowList] = useState(false);

  const handleViewList = () => {
    setShowList(!showList);
  };

  return (


  <div
  style={{
    maxWidth: "1100px",
    margin: "50px auto",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    fontFamily: "Poppins, sans-serif",
  }}
>
  <h1
    style={{
      marginBottom: "25px",
      fontSize: "28px",
      fontWeight: "600",
      color: "#2c3e50",
      textAlign: "center",
    }}
  >
    Admin — Manage Properties
  </h1>

  {/* Button to toggle list */}
  <div style={{ textAlign: "center", marginBottom: "30px" }}>
    <button
      onClick={handleViewList}
      style={{
        backgroundColor: showList ? "#e74c3c" : "#007bff",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer",
        boxShadow: "0 3px 6px rgba(0,0,0,0.15)",
        transition: "0.3s",
      }}
      onMouseOver={(e) =>
        (e.target.style.backgroundColor = showList ? "#c0392b" : "#0056b3")
      }
      onMouseOut={(e) =>
        (e.target.style.backgroundColor = showList ? "#e74c3c" : "#007bff")
      }
    >
      {showList ? "Hide List" : "View List"}
    </button>
  </div>

  {/* Conditional rendering */}
  {showList ? (
    <div
      style={{
        borderTop: "1px solid #eee",
        paddingTop: "20px",
        animation: "fadeIn 0.5s ease",
      }}
    >
      <PropertyList />
    </div>
  ) : (
    <div
      style={{
        borderTop: "1px solid #eee",
        paddingTop: "20px",
        animation: "fadeIn 0.5s ease",
      }}
    >
      <PropertyForm />
    </div>
  )}
</div>



  );
};

export default AdminPage;
