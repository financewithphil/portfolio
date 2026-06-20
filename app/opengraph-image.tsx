import { ImageResponse } from "next/og";

export const alt = "Phillip Karaya — AI Solutions Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0d12",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#6f8bff",
            fontSize: 26,
            letterSpacing: 2,
          }}
        >
          AI SOLUTIONS ENGINEER · FORWARD-DEPLOYED
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            I build AI systems that ship to production.
          </div>
          <div style={{ display: "flex", marginTop: 22, width: 230, height: 8, background: "#e11d2a" }} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#9aa3ad",
            fontSize: 30,
          }}
        >
          <span style={{ color: "#ffffff", fontWeight: 700 }}>Phillip Karaya</span>
          <span>phillipkaraya-portfolio.vercel.app</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
