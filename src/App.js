import React, { useState, useEffect } from 'react';

const App = () => {
  const [uptime, setUptime] = useState(0);
  const [logs, setLogs] = useState([
    "🚀 Initializing Cloud Environment...",
    "📦 Pulling Docker Image: ashpak02/react-cicd:latest",
    "🔧 Jenkins Pipeline: Stage 'Build' - SUCCESS",
    "☁️ AWS EC2 Instance: Healthy",
  ]);

  // Fun Task: Simulate real-time monitoring logs
  useEffect(() => {
    const timer = setInterval(() => setUptime(prev => prev + 1), 1000);
    const logInterval = setInterval(() => {
      const messages = [
        "📊 Prometheus scraping metrics...",
        "📈 Grafana dashboard updated",
        "🐧 Linux kernel stable",
        "✅ GitHub Webhook triggered",
      ];
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      setLogs(prev => [randomMsg, ...prev.slice(0, 5)]);
    }, 4000);

    return () => {
      clearInterval(timer);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.title}>CloudOps Portfolio Dashboard</h1>
        <div style={styles.badgeContainer}>
          <span style={styles.badge}>AWS EC2</span>
          <span style={styles.badge}>Docker</span>
          <span style={styles.badge}>Jenkins</span>
          <span style={styles.badge}>Linux</span>
        </div>
      </header>

      <main style={styles.main}>
        {/* Stats Grid */}
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>System Uptime</h3>
            <p style={styles.statText}>{uptime}s</p>
          </div>
          <div style={styles.card}>
            <h3>Deployment Status</h3>
            <p style={{ ...styles.statText, color: '#4ade80' }}>ACTIVE</p>
          </div>
          <div style={styles.card}>
            <h3>Monitoring</h3>
            <p style={styles.statText}>Prometheus / Grafana</p>
          </div>
        </div>

        {/* Console / Log Section */}
        <div style={styles.console}>
          <div style={styles.consoleHeader}>terminal — ashpak@cloud-instance</div>
          <div style={styles.consoleBody}>
            {logs.map((log, i) => (
              <div key={i} style={styles.logLine}>
                <span style={{ color: '#4ade80' }}>$</span> {log}
              </div>
            ))}
          </div>
        </div>

        {/* Fun Task: Skill Interaction */}
        <section style={styles.funSection}>
          <h3>Interactive Skill Check</h3>
          <p>Click a service to verify connection:</p>
          <div style={styles.buttonGroup}>
            {['Docker', 'AWS', 'GitHub', 'Grafana'].map(skill => (
              <button 
                key={skill} 
                onClick={() => alert(`${skill} Connection: 200 OK ✅`)}
                style={styles.button}
              >
                Test {skill}
              </button>
            ))}
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        Built by Ashpak | Deployed via CI/CD Pipeline 🚀
      </footer>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    borderBottom: '1px solid #334155',
    paddingBottom: '20px',
  },
  title: { fontSize: '2.5rem', color: '#38bdf8' },
  badgeContainer: { display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' },
  badge: {
    backgroundColor: '#1e293b',
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    border: '1px solid #38bdf8',
  },
  main: { maxWidth: '900px', margin: '0 auto' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  card: {
    backgroundColor: '#1e293b',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  },
  statText: { fontSize: '1.5rem', fontWeight: 'bold', margin: '10px 0' },
  console: {
    backgroundColor: '#000',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.5)',
  },
  consoleHeader: {
    backgroundColor: '#334155',
    padding: '8px 15px',
    fontSize: '0.8rem',
    color: '#cbd5e1',
  },
  consoleBody: { padding: '15px', minHeight: '150px' },
  logLine: { marginBottom: '8px', fontFamily: 'monospace', fontSize: '0.95rem' },
  funSection: { marginTop: '40px', textAlign: 'center' },
  buttonGroup: { display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '15px' },
  button: {
    padding: '10px 20px',
    backgroundColor: '#38bdf8',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'transform 0.2s',
  },
  footer: { textAlign: 'center', marginTop: '50px', opacity: 0.6, fontSize: '0.8rem' }
};

export default App;