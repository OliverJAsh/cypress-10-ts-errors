import webpackPreprocessor from "@cypress/webpack-preprocessor";
import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on("file:preprocessor", webpackPreprocessor({}));
        },
    },
});
