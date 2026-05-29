import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "standalone",
  // Trava o root do file-tracing neste diretório. Sem isso, o Next sobe a
  // árvore procurando lockfiles e pode parar em C:\Users\lukas\, fazendo o
  // standalone empacotar a pasta errada e quebrar o Dockerfile.
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
