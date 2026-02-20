export default function Home() {
  // ========== UPDATE THESE LINKS FOR YOUR COMMUNITY ==============
  const discordUrl = "https://discord.com/invite/your-invite";
  const openMicUrl = "https://forms.gle/your-open-mic-formlink";
  const submitArtUrl = "https://forms.gle/your-art-formlink";
  const twitterUrl = "https://twitter.com/yourprofile";
  const githubUrl = "https://github.com/Sm0k367";
  const emailUrl = "mailto:hello@epictech.ai?subject=Epic%20Tech%20AI%20Lounge";
  // Examples (replace with your real ones)

  // Dummy data for past streams -- swap links or add/remove as you go live!
  const pastStreams = [
    {
      title: "Open Mic Kickoff – Feb. 2026",
      url: "https://www.youtube.com/watch?v=4baEOAm80Is",
    },
    {
      title: "AI + Art Night Highlight Reel",
      url: "https://www.youtube.com/watch?v=XnG6w8JD2JQ",
    },
  ];

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 0,
    }}>
      <div className="marquee">
        Next Open Mic: <b>March 12 @ 9PM EST</b> &bull; First 5 art submissions win stickers!
      </div>
      <img
        src="/epic-tech-ai-logo.png"
        alt="Epic Tech AI Logo"
        style={{
          width: 200,
          filter: "drop-shadow(0 0 20px #0ff9fa) drop-shadow(0 0 32px #f600ff)",
          marginBottom: 24,
          borderRadius: "18px",
          background: "#140018bb",
          padding: "1.5rem",
          marginTop: 24,
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
        marginBottom: 16,
        textShadow: "0 0 10px #0ff9fa99"
      }}>
        Live Stream, Open Mic, Creative Tech + AI Community
      </h2>
      <div className="socials-row">
        <a href={discordUrl} className="social-btn" target="_blank" rel="noopener" aria-label="Discord">
          <svg viewBox="0 0 245 240" fill="none"><circle cx="122.5" cy="120" r="120" fill="#5865F2"/><path fill="#fff" d="M192 173c-5-6-14-14-35-16a8 8 0 0 0-6 0l-7 7c-1 1-1 1-3 1-15-1-25-6-39-13a1 1 0 0 1-1-1l3-11c-1-1 0-2 0-2-21 2-30 10-35 16a119 119 0 0 0 169 0m-116-38c7 0 12-7 12-15 0-7-5-14-12-14s-12 7-12 14c0 8 5 15 12 15m60 0c7 0 13-7 13-15 0-7-6-14-13-14-8 0-13 7-13 14 0 8 5 15 13 15"/></svg>
        </a>
        <a href={twitterUrl} className="social-btn" target="_blank" rel="noopener" aria-label="Twitter">
          <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#1DA1F2"/><path fill="#fff" d="M23 12.2c-.5.2-1 .3-1.6.4.6-.3 1-.8 1.3-1.4-.6.4-1.2.6-1.9.8A3 3 0 0 0 12.6 15c0 .2 0 .3.1.5-2.4-.1-4.5-1.2-6-3-.2.3-.2.7-.2 1.1 0 1.1.6 2.1 1.5 2.6-.5 0-1-.2-1.4-.4v.1a3 3 0 0 0 2.3 2.9c-.2 0-.4.1-.7.1-.1 0-.2 0-.4-.1.2.8 1 1.4 2 1.4a6 6 0 0 1-3.7 1.3c-.2 0-.4 0-.5 0A8.6 8.6 0 0 0 14.5 23c5.6 0 8.8-4.6 8.8-8.7v-.4c.6-.3 1.1-.9 1.5-1.3Z"/></svg>
        </a>
        <a href={githubUrl} className="social-btn" target="_blank" rel="noopener" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#fff"/><path fill="#181717" d="M12 2C6.48 2 2 6.58 2 12.24c0 4.48 2.87 8.29 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.35-3.37-1.35-.45-1.16-1.1-1.47-1.1-1.47-.89-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.87 1.53 2.29 1.09 2.85.84.09-.65.34-1.09.62-1.34-2.22-.26-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.7-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.03a9.2 9.2 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.91-1.31 2.74-1.03 2.74-1.03.55 1.4.2 2.44.1 2.7.64.72 1.03 1.62 1.03 2.7 0 3.85-2.34 4.68-4.57 4.93.36.31.68.94.68 1.89 0 1.36-.01 2.45-.01 2.78 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"/></svg>
        </a>
        <a href={emailUrl} className="social-btn" aria-label="Email">
          <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#00f9ff"/><path d="M24.29 8.82H7.712c-.686 0-1.242.556-1.242 1.242V22.16c0 .686.556 1.242 1.241 1.242h16.577c.686 0 1.243-.556 1.243-1.242v-12.1a1.242 1.242 0 0 0-1.242-1.242Zm0 2.485-7.289 5.414-7.288-5.414Zm-16.577 1.47 6.997 5.198c.204.151.468.151.671 0l6.996-5.198v10.384H7.712V12.776Z" fill="#fff"/></svg>
        </a>
      </div>
      <div style={{
        display: "flex",
        gap: "1.3rem",
        marginBottom: "2.0rem",
        marginTop: 18,
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        <a href={openMicUrl} className="cta-btn" target="_blank" rel="noopener">Join Open Mic</a>
        <a href={submitArtUrl} className="cta-btn" target="_blank" rel="noopener"
           style={{background: "linear-gradient(90deg,#00f9ff 0%, #fb00ff 100%)"}}
        >Submit Art/Meme</a>
      </div>
      {/* == Main Embedded Stream == */}
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
          src="https://www.youtube.com/embed/4baEOAm80Is"
          title="YouTube video player"
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
      {/* == Past Streams/Highlights == */}
      <section className="past-streams">
        <h3>Past Streams &amp; Highlights</h3>
        <div className="past-streams-list">
          {pastStreams.map((stream, idx) => (
            <div key={idx} className="past-stream-card">
              <div style={{marginBottom:8}}>{stream.title}</div>
              <a href={stream.url} target="_blank" rel="noopener">Watch &rarr;</a>
            </div>
          ))}
        </div>
      </section>
      {/* == Footer and Social Sharing == */}
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
        <br />
        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Check out the Epic Tech AI Lounge: https://epic-tech-ai-lounge.vercel.app/')}`}
          target="_blank" rel="noopener"
          style={{
            color:"#0ff9fa", textDecoration:"underline", marginLeft:8, fontSize:"1rem"
          }}
        >
          Share this event on Twitter
        </a>
      </footer>
    </main>
  );
}
