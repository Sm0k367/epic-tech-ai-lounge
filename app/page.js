"use client";
import { useState } from "react"; // <-- Needed for React state

export default function Home() {
  const [liveMode, setLiveMode] = useState(true);

  const liveEmbed = "https://www.youtube.com/embed/live_stream?channel=UC79Phi4kA_IQhYpQvG2imoQ";
  const videoEmbed = "https://www.youtube.com/embed/4baEOAm80Is";

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
        marginTop: 38,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <button
          onClick={() => setLiveMode(mode => !mode)}
          style={{
            marginBottom: 30,
            padding: "0.7rem 2rem",
            fontSize: "1.07rem",
            color: "#190a2d",
            fontWeight: "bold",
            textTransform: "uppercase",
            background: liveMode
              ? "linear-gradient(90deg,#fb00ff 0%, #00f9ff 100%)"
              : "linear-gradient(90deg,#00f9ff 0%, #fb00ff 100%)",
            letterSpacing: "0.04em",
            border: "none",
            borderRadius: "100px",
            boxShadow: liveMode
              ? "0 0 18px #fb00ffb5, 0 0 44px #00f9ff90"
              : "0 0 18px #00f9ffb5, 0 0 44px #fb00ff90",
            filter: "brightness(1.20)",
            cursor: "pointer",
            outline: "2px solid #fb00ff55",
            transition: "all 0.15s cubic-bezier(.41,1.19,.62,1.02)"
          }}
        >
          Switch to {liveMode ? "Video" : "Live"} Mode
        </button>
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
          width="100%"
          height="100%"
          src={liveMode ? liveEmbed : videoEmbed}
          title={liveMode ? "Epic Tech AI Lounge - Live Stream" : "YouTube video player"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
