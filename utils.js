"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.averageBy = exports.loggitWTag = exports.loggit = void 0;
const remeda_1 = require("remeda");
const loggit = (x) => {
    console.log(x);
    return x;
};
exports.loggit = loggit;
const loggitWTag = (tag) => (x) => {
    console.log(`${tag}:`);
    console.log(x);
    return x;
};
exports.loggitWTag = loggitWTag;
const _averageBy = (arr, fn) => arr.reduce((acc, x) => acc + fn(x), 0) / arr.length;
function averageBy(...args) {
    console.log("fuck");
    console.log({ args });
    // eslint-disable-next-line prefer-rest-params
    return (0, remeda_1.purry)(_averageBy, args);
}
exports.averageBy = averageBy;
