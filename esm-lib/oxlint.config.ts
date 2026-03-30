import loguxOxlintConfig from "@logux/oxc-configs/lint";
import { defineConfig } from "oxlint";

export default defineConfig({
  ...loguxOxlintConfig,
  ignorePatterns: ["*/errors.ts"],
});
