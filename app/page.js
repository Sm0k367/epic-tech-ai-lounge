export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #190a2d 0%, #2f1847 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0",
        fontFamily: "'Orbitron', 'Montserrat', 'Segoe UI', system-ui, sans-serif",
      }}
    >
      <div style={{
        marginTop: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <img
          src="/epic-tech-ai-logo.png"
          alt="Epic Tech AI Logo"
          style={{
            width: 200,
            filter: "drop-shadow(0 0 20px #0ff9fa) drop-shadow(0 0 32px #f600ff)",
            marginBottom: 28,
            borderRadius: "18px",
            background: "#140018bb",
            padding: "1.5rem"
          }}
        />
        <h1 style={{
          color: "#fb00ff",
          fontWeight: "900",
          fontSize: "3rem",
          letterSpacing: "0.04em",
          textShadow: "0 0 14px #00f0ff88, 0 0 40px #f600ff55"
        }}>
          Epic Tech AI Lounge <span style={{ color: "#00f9ff" }}>After&nbsp;Dark</span>
        </h1>
        <h2 style={{
          color: "#0ff9fa",
          fontWeight: "700",
          fontSize: "1.3rem",
          letterSpacing: "0.03em",
          textTransform: "uppercase",
          marginBottom: 24,
          textShadow: "0 0 10px #0ff9fa99"
        }}>
          Live Stream, Open Mic, Creative Tech + AI Community
        </h2>
        <div style={{
          display: "flex",
          gap: "1.3rem",
          marginBottom: 34
        }}>
          <a
            href="#"
            style={{
              padding: "1rem 2rem",
              background: "linear-gradient(90deg,#fb00ff 0%, #00f9ff 100%)",
              color: "#190a2d",
              fontWeight: "bold",
              fontSize: "1.1rem",
              textDecoration: "none",
              borderRadius: "100px",
              boxShadow: "0 0 18px #1ffaff90, 0 0 44px #fb00ff70",
              transition: "transform 0.12s",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              filter: "brightness(1.25)",
              outline: "2px solid #00f9ff55"
            }}
            onMouseOver={e => e.currentTarget.style.transform = "scale(1.07)"}
            onMouseOut={e => e.currentTarget.style.transform = "scale(1.00)"}
          >Join Open Mic</a>
          <a
            href="#"
            style={{
              padding: "1rem 2rem",
              background: "linear-gradient(90deg,#00f9ff 0%, #fb00ff 100%)",
              color: "#190a2d",
              fontWeight: "bold",
              fontSize: "1.1rem",
              textDecoration: "none",
              borderRadius: "100px",
              boxShadow: "0 0 18px #fb00ff90, 0 0 44px #00f9ff70",
              transition: "transform 0.12s",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              filter: "brightness(1.25)",
              outline: "2px solid #fb00ff55"
            }}
            onMouseOver={e => e.currentTarget.style.transform = "scale(1.07)"}
            onMouseOut={e => e.currentTarget.style.transform = "scale(1.00)"}
          >Submit Art/Meme</a>
        </div>
      </div>
      <div style={{
        maxWidth: "900px",
        width: "100%",
        aspectRatio: "16/9",
        background: "#222",
        boxShadow: "0 0 30px #00f9ff40, 0 0 60px #fb00ff33",
        borderRadius: "18px",
        overflow: "hidden",
        margin: "0 auto 48px auto",
        border: "2px solid #00f9ff55",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <iframe
          src="https://www.youtube.com/embed/live_stream?channel=UC79Phi4kA_IQhYpQvG2imoQ"
          title="Epic Tech AI Lounge - Live Stream"
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder={0}
          style={{
            width: "100%",
            height: "100%",
            minHeight: "350px",
            background: "#111"
          }}
        />
      </div>
      <footer style={{
        textAlign: "center",
        color: "#00f9ffbb",
        fontSize: "1.2rem",
        letterSpacing: "0.04em",
        marginBottom: 25,
        textShadow: "0 0 12px #fb00ff66",
        fontWeight: 600,
        width: "100%"
      }}>
        Made with ⚡ by <span style={{ color: "#fb00ff" }}>Epic Tech AI</span>
      </footer>
    </main>
  );
}
