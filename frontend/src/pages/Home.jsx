import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <h2 style={styles.logo}>NutriSmart</h2>
        <div>
          <Link to="/login" style={styles.navBtn}>Login</Link>
          <Link to="/register" style={styles.primaryBtn}>Register</Link>
        </div>
      </nav>

      <section style={styles.hero}>
        <h1 style={styles.title}>
          Build Better Eating Habits.<br />
          Live Healthier.
        </h1>
        <p style={styles.subtitle}>
          Track your food habits, get AI-powered nutrition advice,
          and improve your lifestyle with smart insights.
        </p>
      </section>

      <section style={styles.features}>
        <div style={styles.card}>
          <h3>📊 Health Score</h3>
          <p>Get a personalized health score based on your daily habits.</p>
          <Link to="/health-score" style={styles.cardBtn}>
            Go to Health Score
          </Link>
        </div>

        <div style={styles.card}>
          <h3>🤖 AI Nutrition Chatbot</h3>
          <p>Ask questions and receive smart food recommendations.</p>
          <Link to="/chatbot" style={styles.cardBtn}>
            Open Chatbot
          </Link>
        </div>

        <div style={styles.card}>
          <h3>📚 Food Education</h3>
          <p>Learn which foods improve energy, immunity and overall wellness.</p>
          <Link to="/education" style={styles.cardBtn}>
            Explore Education
          </Link>
        </div>
      </section>

      <footer style={styles.footer}>
        © 2026 NutriSmart • Eat Smart • Live Better
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    width: "100%",
    background: "linear-gradient(to right, #e8f5e9, #ffffff)"
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px"
  },
  logo: { color: "#2e7d32" },
  navBtn: {
    marginRight: "15px",
    textDecoration: "none",
    color: "#2e7d32",
    fontWeight: "bold"
  },
  primaryBtn: {
    padding: "8px 16px",
    backgroundColor: "#2e7d32",
    color: "white",
    borderRadius: "20px",
    textDecoration: "none"
  },
  hero: {
    textAlign: "center",
    padding: "80px 20px"
  },
  title: {
    fontSize: "42px",
    color: "#1b5e20"
  },
  subtitle: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#555",
    maxWidth: "600px",
    marginInline: "auto"
  },
  features: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    padding: "50px 20px",
    flexWrap: "wrap"
  },
  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "15px",
    width: "280px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  cardBtn: {
    display: "inline-block",
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#2e7d32",
    color: "white",
    borderRadius: "20px",
    textDecoration: "none",
    fontWeight: "bold"
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    marginTop: "50px",
    backgroundColor: "#f1f1f1"
  }
};

export default Home;