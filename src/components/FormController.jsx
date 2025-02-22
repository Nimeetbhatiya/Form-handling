/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

const FormController = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userCredentials, setUserCredentials] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    if (isLogin) {
      if (!userCredentials) {
        alert("No user found. Please sign up first.");
        return;
      }
      setUserData(data);
    } else {
      setUserCredentials({ email: data.email, password: data.password });
      setIsLogin(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      {userData ? (
        <h2>Welcome, {userData.email}!</h2>
      ) : isLogin ? (
        <Login onSubmit={handleFormSubmit} credentials={userCredentials} />
      ) : (
        <Signup onSubmit={handleFormSubmit} />
      )}

      <button
        onClick={() => setIsLogin(!isLogin)}
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default FormController;
