import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated registration
    navigate("/login");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account 🌿</h2>
        <p style={styles.subtitle}>Start building healthier habits today</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required style={styles.input}/>
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required style={styles.input}/>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required style={styles.input}/>
          <input type="number" name="age" placeholder="Age" onChange={handleChange} required style={styles.input}/>
          <input type="text" name="gender" placeholder="Gender" onChange={handleChange} required style={styles.input}/>
          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>

        <p style={styles.footerText}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #d4fc79, #96e6a1)",
    fontFamily: "Arial, sans-serif"
  },
  card: {
    background: "rgba(255, 255, 255, 0.95)",
    padding: "40px",
    borderRadius: "20px",
    width: "350px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    textAlign: "center"
  },
  title: {
    marginBottom: "10px",
    color: "#1b5e20"
  },
  subtitle: {
    marginBottom: "20px",
    fontSize: "14px",
    color: "#555"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px"
  },
  button: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#2e7d32",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  },
  footerText: {
    marginTop: "20px",
    fontSize: "14px"
  },
  link: {
    color: "#2e7d32",
    fontWeight: "bold",
    textDecoration: "none"
  }
};

export default Register;