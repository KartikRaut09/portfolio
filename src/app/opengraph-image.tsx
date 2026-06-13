import { ImageResponse } from "next/og";
import { getProfileData } from "@/lib/content";

export const runtime = "edge";
export const alt = "Kartik Raut - AI/ML Engineer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const profile = getProfileData();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#111111",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, rgba(17,17,17,0) 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-200px",
            left: "-200px",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(17,17,17,0) 70%)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 24px",
            background: "rgba(249, 115, 22, 0.1)",
            border: "1px solid rgba(249, 115, 22, 0.3)",
            borderRadius: "100px",
            color: "#f97316",
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: "40px",
          }}
        >
          &lt;System.Init /&gt;
        </div>

        <h1
          style={{
            fontSize: 84,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            margin: "0 0 24px 0",
            letterSpacing: "-0.02em",
          }}
        >
          {profile.name}
        </h1>

        <p
          style={{
            fontSize: 42,
            color: "#9ca3af",
            margin: "0 0 40px 0",
            lineHeight: 1.4,
            fontWeight: 500,
          }}
        >
          {profile.headline}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "auto",
          }}
        >
          <div style={{ display: "flex", color: "#f97316", fontSize: 28 }}>
            LOADED_MODULES:
          </div>
          {["RAG", "Agentic Systems", "LLMs", "MLOps"].map((mod) => (
            <div
              key={mod}
              style={{
                display: "flex",
                color: "#9ca3af",
                fontSize: 24,
                padding: "4px 16px",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "4px",
                background: "rgba(255,255,255,0.05)",
                marginLeft: "12px",
              }}
            >
              {mod}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
