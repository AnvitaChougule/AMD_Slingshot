import { Link } from "react-router-dom";

export default function Education() {
  return (
    <div style={styles.container}>
      <h1>Food Education</h1>

      <div style={styles.card}>
        <h3>🥦 Vegetables</h3>
        <p>Improve immunity and digestion. Rich in vitamins and fiber.</p>
      </div>

      <div style={styles.card}>
        <h3>🍎 Fruits</h3>
        <p>Provide antioxidants and natural sugars for energy.</p>
      </div>

      <div style={styles.card}>
        <h3>🥚 Protein</h3>
        <p>Essential for muscle growth and repair.</p>
      </div>

      <div style={styles.card}>
        <h3>💧 Water</h3>
        <p>Maintains hydration and supports metabolism.</p>
      </div>

      <div style={styles.card}>
        <h3>😴 Sleep & Nutrition</h3>
        <p>Good sleep improves digestion and hormonal balance.</p>
      </div>

      <Link to="/" style={styles.back}>Back to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    textAlign: "center",
    background: "#108cb6ff"
  },
  card: {
    background: "white",
    padding: "20px",
    margin: "15px auto",
    maxWidth: "500px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },
  back: {
    display: "inline-block",
    marginTop: "30px",
    padding: "10px 20px",
    backgroundColor: "#2e7d32",
    color: "white",
    borderRadius: "20px",
    textDecoration: "none"
  }
};