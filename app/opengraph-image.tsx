import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

export const alt = "Hotel Fazenda Parque dos Sonhos — A Terra da Aventura";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** OG image composta em build: oval da marca centralizado em fundo verde-mata
 *  (#0B1F12 = pds-green-darkest), com nome e tagline embaixo. Cores e ratio
 *  alinhados com o PageHero, então previews sociais se conectam visualmente
 *  com a experiência do site. */
export default async function OpenGraphImage() {
  const iconBuffer = readFileSync(
    fileURLToPath(new URL("./icon.png", import.meta.url))
  );
  const iconDataUri = `data:image/png;base64,${iconBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse at center, #143A1F 0%, #0B1F12 80%)",
          padding: 60,
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={iconDataUri}
          width={240}
          height={240}
          alt=""
          style={{ marginBottom: 48 }}
        />
        <div
          style={{
            fontSize: 72,
            color: "#F6EFDF",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            maxWidth: 1000,
          }}
        >
          Hotel Fazenda Parque dos Sonhos
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#F2C36A",
            marginTop: 28,
            fontStyle: "italic",
            letterSpacing: "0.02em",
          }}
        >
          A Terra da Aventura · Socorro–SP
        </div>
      </div>
    ),
    { ...size }
  );
}
