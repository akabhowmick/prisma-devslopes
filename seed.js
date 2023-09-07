"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seed_helpers_1 = require("./seed-helpers");
Promise.resolve().then(seed_helpers_1.clearDb).then(seed_helpers_1.seedFixtures).catch(console.error);
