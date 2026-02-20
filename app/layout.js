// /app/layout.js

import './globals.css';

export const metadata = {
  title: "Epic Tech AI Lounge After Dark",
  description: "Central hub for streaming, open mic, AI and creative tech community",
  icons: {
    icon: "/epic-tech-ai-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#190a2d" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/epic-tech-ai-logo.png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Optional: Preconnect to YouTube for slightly faster loads */}
        <link rel="preconnect" href="https://www.youtube.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Optional: Orbitron font for extra neon/cyberpunk flavor */}
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
