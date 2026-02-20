export default function Home() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'flex-start', minHeight: '100vh', paddingTop: 44,
      boxSizing: 'border-box'
    }}>
      <img
        src="/epic-tech-ai-logo.png"
        alt="Epic Tech AI Logo"
        style={{ width: 120, filter: 'drop-shadow(0 0 24px #FF00C8)' }}
      />
      <h1 style={{
        fontSize: 38,
        fontWeight: 'bold',
        margin: '18px 0 8px 0',
        letterSpacing: 1.2,
        color: '#39FF14',
        textShadow: '0 0 20px #FF00C8, 0 0 8px #08F7FE'
      }}>
        Epic Tech AI Lounge After Dark
      </h1>
      <p style={{
        color: '#08F7FE',
        marginBottom: 32,
        textShadow: '0 0 4px #fff'
      }}>
        The place to vibe, build, and create—late-night and live.
      </p>
      {/* ===== YOUTUBE LIVE EMBED HERE ===== */}
      <div style={{
        width: '95%',
        maxWidth: 720,
        background: "#222a",
        boxShadow: "0 0 24px #39FF1455",
        borderRadius: 18,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        marginBottom: 32
      }}>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, width: "100%" }}>
          <iframe
            src="https://www.youtube.com/embed/4baEOAm80Is"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Epic Tech AI Live"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: 18 }}
          />
        </div>
      </div>
      {/* ===== CTA BUTTONS ===== */}
      <div style={{ display: 'flex', gap: 32 }}>
        <a
          href="#"
          style={{
            padding: "16px 32px",
            background: "linear-gradient(90deg, #39FF14 60%, #FF00C8 100%)",
            color: "#161622",
            fontWeight: "bold",
            fontSize: 18,
            borderRadius: 12,
            textDecoration: "none",
            boxShadow: '0 0 16px #08F7FEAA',
            transition: 'background 0.2s'
          }}
        >
          Join Open Mic
        </a>
        <a
          href="#"
          style={{
            padding: "16px 32px",
            background: "linear-gradient(90deg, #08F7FE 60%, #FF00C8 100%)",
            color: "#161622",
            fontWeight: "bold",
            fontSize: 18,
            borderRadius: 12,
            textDecoration: "none",
            boxShadow: '0 0 16px #39FF1444',
            transition: 'background 0.2s'
          }}
        >
          Submit Art / Meme
        </a>
      </div>
    </div>
  );
}
