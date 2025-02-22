/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const Login = ({ onSubmit , credentials }) => {
    const [formData , setformData] = useState({
      email:"",
      password:"",
    });

    const formChange = (event) =>{
      setformData({...formData,[event.target.name]:event.target.value});
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      if (!formData.email || !formData.password) {
          alert("please fill all the details");
          return;
      }

      if(
        credentials && 
        formData.email ===  credentials.email &&
        formData.password === credentials.password
      )
      {
        onSubmit(formData);
      } else {
        alert("Invalid email or password");
      }
  };
  return ( 
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f4f4f4" }}>
  <form
    onSubmit={handleSubmit}
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      width: "300px",
    }}
  >
    <h2 style={{ textAlign: "center", color: "#333" }}>Login</h2>

    <label htmlFor="email" style={{ display: "block", marginBottom: "5px", color: "#555" }}>
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={formChange}
      required
      style={{ width: "100%", padding: "8px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
    />

    <label htmlFor="password" style={{ display: "block", marginBottom: "5px", color: "#555" }}>
      Password
    </label>
    <input
      type="password"
      id="password"
      name="password"
      value={formData.password}
      onChange={formChange}
      required
      style={{ width: "100%", padding: "8px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "5px" }}
    />

    <button
      type="submit"
      style={{
        width: "100%",
        padding: "10px",
        background: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      Login
    </button>
  </form>
</div>
   
  )
}

export default Login;
