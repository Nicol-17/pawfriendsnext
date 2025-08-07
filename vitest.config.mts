import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
const exclude = [
  "src/i18n",
  "src/lib/i18n.ts",
  "src/middleware.ts",
  "src/*.d.ts",
  "src/**/*.types.ts",
  "src/**/*.constants.ts",
  "src/**/index.ts",
];
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    coverage: {
      enabled: true,
      include: ["src/**/*.*"],
      exclude,
      provider: "v8", 
      thresholds: {
        statements: 20,
        branches: 20,
        functions: 20,
        lines: 20,
      },
      reporter: ["text", "html", "lcov"],
    },
    css: {
      modules: {
        classNameStrategy: "stable",
      },
    },
  },
});
