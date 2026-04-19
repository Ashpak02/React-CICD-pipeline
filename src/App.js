import React from "react";
import "./App.css";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🚀 DevOps CI/CD Project</h1>

      <p style={styles.description}>
        This project demonstrates a complete CI/CD pipeline using Jenkins,
        Docker, GitHub, and AWS EC2. The application is built using React and
        deployed inside a Docker container through an automated Jenkins pipeline.
      </p>

      <div style={styles.card}>
        <h2>📌 Project Overview</h2>
        <ul>
          <li>Automated CI/CD pipeline using Jenkins</li>
          <li>Dockerized React application</li>
          <li>Deployed on AWS EC2 instance</li>
          <li>Integrated with GitHub repository</li>
        </ul>
      </div>

      <div style={styles.card}>
        <h2>⚙️ Technologies Used</h2>
        <ul>
          <li>React.js</li>
          <li>Docker</li>
          <li>Jenkins</li>
          <li>AWS EC2</li>
          <li>Git & GitHub</li>
          <li>Linux (Ubuntu)</li>
        </ul>
      </div>

      <div style={styles.card}>
        <h2>🔄 CI/CD Workflow</h2>
        <ol>
          <li>Code pushed to GitHub</li>
          <li>Jenkins pulls the repository</li>
          <li>Docker image is built</li>
          <li>Container is deployed automatically</li>
          <li>App runs on EC2 instance</li>
        </ol>
      </div>

      <div style={styles.footer}>
        <p>💡 This project highlights my skills in DevOps and Cloud deployment.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "30px",
    backgroundColor: "#f4f6f8",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    color: "#2c3e50",
  },
  description: {
    textAlign: "center",
    maxWidth: "800px",
    margin: "20px auto",
    fontSize: "18px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    margin: "20px auto",
    borderRadius: "10px",
    maxWidth: "700px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  footer: {
    textAlign: "center",
    marginTop: "30px",
    fontWeight: "bold",
  },
};

export default App;