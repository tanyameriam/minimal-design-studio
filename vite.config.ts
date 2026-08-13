import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/**
 * The case study source files carry unfinished content on purpose: `[NEED: ...]`
 * markers naming facts still owed, and `todo` blocks written as notes to self.
 * src/data/drafts.ts already keeps both from rendering, but a runtime filter
 * leaves the text sitting in the shipped bundle where devtools can read it.
 *
 * This cuts the text out of the source during a production build, so it never
 * enters the bundle at all. A marker must be the entire string value: the
 * literal becomes an empty string here, and drafts.ts drops the row that held
 * it. A marker embedded mid-sentence would strip to a broken fragment, so the
 * build fails instead and the sentence gets split at the source.
 *
 * Dev builds are untouched, so the markers stay visible while writing.
 */
const stripDraftContent = (): Plugin => {
  // Matches only string literals that are nothing but one marker.
  const NEED_LITERAL = /(['"`])\s*\[NEED:[^\]]*\]\s*\1/g;
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

      const stripped = code.replace(NEED_LITERAL, "$1$1").replace(TODO_BODY, "$1''");

      // Checked before the no-op early return: an embedded marker matches
      // nothing above, and silently shipping it is exactly the failure mode.
      if (stripped.includes("NEED:")) {
        this.error(
          `Embedded [NEED:] marker in ${file}: markers must be the entire string value. ` +
            `Split the sentence, or move the reminder into a { kind: 'todo' } block.`
        );
      }
      if (stripped === code) return null;
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
