import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f2f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "2rem",
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        noValidate
      >
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "0.5rem",
            borderRadius: "4px",
            border: error ? "1px solid red" : "1px solid #ccc",
            fontSize: "1rem",
          }}
          required
        />
        {error && (
          <div
            style={{
              color: "red",
              fontSize: "0.9rem",
              marginTop: "-0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            {error}
          </div>
        )}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
          required
        />

        <button
          type="submit"
          style={{
            padding: "0.7rem",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
