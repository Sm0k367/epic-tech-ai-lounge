export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Epic Tech AI Lounge After Dark</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "linear-gradient(135deg, #161622 60%, #08F7FE 100%)",
          color: "#39FF14",
          minHeight: "100vh",
          fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
