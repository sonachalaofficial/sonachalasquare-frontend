import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();



const handleLogin = async (e) => {
  e.preventDefault();
  setErrorMsg("");

  try {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    console.log("Backend URL:", BASE_URL); // ✅ for debug

    const res = await axios.post(`${BASE_URL}/api/admin/AdminLogin`, {
      email,
      password,
    });

    if (res.data.success) {
      alert("Login successful!");
      navigate("/AdminPage");
    } else {
      setErrorMsg(res.data.message || "Login failed!");
    }
  } catch (err) {
    console.error("Login Error:", err);
    setErrorMsg("Invalid credentials or server error.");
  }
};




  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
      <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-3 " style={{color:"#335393"}}>Admin Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          {errorMsg && <div className="alert alert-danger py-1">{errorMsg}</div>}
          <button type="submit" className="btn  w-100" style={{color:"white",backgroundColor:"#335393", borderColor:"#335393"}}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
