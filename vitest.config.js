"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// vitest.config.integration.ts
const config_1 = require("vitest/config");
exports.default = (0, config_1.defineConfig)({
    test: {
        include: ["problems/**/*.test.ts"],
        maxThreads: 1,
        minThreads: 1,
        threads: false,
    },
});
