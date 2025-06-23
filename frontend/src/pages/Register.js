import React, { useState } from "react";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let tempErrors = {};

    if (!firstName.trim()) tempErrors.firstName = "First name is required.";
    if (!lastName.trim()) tempErrors.lastName = "Last name is required.";
    if (!validateEmail(email)) tempErrors.email = "Please enter a valid email address.";
    if (!password) tempErrors.password = "Password is required.";
    if (password !== confirmPassword) tempErrors.confirmPassword = "Passwords do not match.";

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length > 0) return;

    setLoading(true);

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        // ewentualnie reset formularza lub przekierowanie
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setErrors({});
      } else {
        alert(`Registration error: ${data.message || "Unknown error"}`);
      }
    } catch {
      alert("Network or server error.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (error) => ({
    padding: "0.5rem",
    borderRadius: "4px",
    border: error ? "1px solid red" : "1px solid #ccc",
    fontSize: "1rem",
  });

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
          width: "320px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        noValidate
      >
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Register</h2>

        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={inputStyle(errors.firstName)}
          disabled={loading}
          required
        />
        {errors.firstName && (
          <div style={{ color: "red", fontSize: "0.85rem", marginTop: "-0.5rem" }}>
            {errors.firstName}
          </div>
        )}

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={inputStyle(errors.lastName)}
          disabled={loading}
          required
        />
        {errors.lastName && (
          <div style={{ color: "red", fontSize: "0.85rem", marginTop: "-0.5rem" }}>
            {errors.lastName}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle(errors.email)}
          disabled={loading}
          required
        />
        {errors.email && (
          <div style={{ color: "red", fontSize: "0.85rem", marginTop: "-0.5rem" }}>
            {errors.email}
          </div>
        )}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle(errors.password)}
          disabled={loading}
          required
        />
        {errors.password && (
          <div style={{ color: "red", fontSize: "0.85rem", marginTop: "-0.5rem" }}>
            {errors.password}
          </div>
        )}

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={inputStyle(errors.confirmPassword)}
          disabled={loading}
          required
        />
        {errors.confirmPassword && (
          <div style={{ color: "red", fontSize: "0.85rem", marginTop: "-0.5rem" }}>
            {errors.confirmPassword}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "0.7rem",
            borderRadius: "4px",
            border: "none",
            backgroundColor: loading ? "#999" : "#007bff",
            color: "white",
            fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: "1rem",
          }}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
