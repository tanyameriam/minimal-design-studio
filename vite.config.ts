import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/**
 * The case study source files carry unfinished content on purpose: `[NEED: ...]`
 * spans marking facts still owed, and `todo` blocks written as notes to self.
 * src/data/drafts.ts already keeps both from rendering, but a runtime filter
 * leaves the text sitting in the shipped bundle where devtools can read it.
 *
 * This cuts the text out of the source during a production build, so it never
 * enters the bundle at all. Structure is still the runtime filter's job: a
 * marker that was a whole value becomes an empty string here, and drafts.ts
 * drops the row that held it.
 *
 * Dev builds are untouched, so the markers stay visible while writing.
 */
const stripDraftContent = (): Plugin => {
  const NEED_SPAN = /\s*\[NEED:[^\]]*\]/g;
  // Blanks the body of a todo block, leaving the block for drafts.ts to drop.
  const TODO_BODY =
    /(kind:\s*(['"])todo\2\s*,\s*body:\s*)('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`)/g;

  // drafts.ts is skipped deliberately: it contains the marker pattern as a
  // regex literal, and rewriting that would break the very filter this relies on.
  const CONTENT = /src[\\/]data[\\/](projects\.ts|caseStudies[\\/](?!drafts|index|types)[\w]+\.ts)$/;

  return {
    name: "strip-draft-content",
    apply: "build",
    enforce: "pre",
    transform(code, id) {
      const file = id.split("?")[0];
      if (!CONTENT.test(file)) return null;

      const stripped = code.replace(NEED_SPAN, "").replace(TODO_BODY, "$1''");
      if (stripped === code) return null;

      if (stripped.includes("NEED:")) {
        this.error(`Draft marker survived stripping in ${file}`);
      }
      return { code: stripped, map: null };
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), stripDraftContent(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
