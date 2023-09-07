"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedFixtures = exports.clearDb = void 0;
const client_1 = require("@prisma/client");
const parentalRatings = {
    pg: "PG",
    pg13: "PG-13",
    R: "R",
    G: "G",
};
const client = new client_1.PrismaClient();
const clearDb = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.starRating.deleteMany();
    yield client.user.deleteMany();
    yield client.movie.deleteMany();
});
exports.clearDb = clearDb;
const seedFixtures = () => __awaiter(void 0, void 0, void 0, function* () {
    const jon = yield client.user.create({
        data: {
            username: "JonnyBoy9000",
            age: 20,
        },
    });
    const rachel = yield client.user.create({
        data: {
            username: "rachelIsTheBest",
            age: 21,
        },
    });
    const andrey = yield client.user.create({
        data: {
            username: "andreyIsTheBest",
            age: 17,
        },
    });
    const peter = yield client.user.create({
        data: {
            username: "peterIsTheBest",
            age: 16,
        },
    });
    // export users for test readability
    const users = {
        jon,
        rachel,
        andrey,
        peter,
    };
    const forrestGump = yield client.movie.create({
        data: {
            title: "Forrest Gump",
            releaseYear: 1994,
            parentalRating: parentalRatings.pg13,
        },
    });
    const princessBride = yield client.movie.create({
        data: {
            title: "The Princess Bride",
            releaseYear: 1987,
            parentalRating: parentalRatings.pg,
        },
    });
    const interstellar = yield client.movie.create({
        data: {
            title: "Interstellar",
            releaseYear: 2014,
            parentalRating: parentalRatings.pg13,
        },
    });
    const hereditary = yield client.movie.create({
        data: {
            title: "Hereditary",
            releaseYear: 2018,
            parentalRating: parentalRatings.R,
        },
    });
    const theOrphan = yield client.movie.create({
        data: {
            title: "The Orphan",
            releaseYear: 2009,
            parentalRating: parentalRatings.R,
        },
    });
    const theTitanic = yield client.movie.create({
        data: {
            title: "The Titanic",
            releaseYear: 1997,
            parentalRating: parentalRatings.pg13,
        },
    });
    const allMovies = {
        forrestGump,
        princessBride,
        interstellar,
        hereditary,
        theOrphan,
        theTitanic,
    };
    const moviesEarlierThan90s = [theTitanic, princessBride, forrestGump];
    const moviesBetween2000And2010 = [theOrphan];
    const moviesAfter2010 = [hereditary, interstellar];
    const pgMovies = [princessBride];
    const pg13Movies = [forrestGump, interstellar, theTitanic];
    const rMovies = [hereditary, theOrphan];
    // Jon Ratings
    const jonRatesForrestGump = yield client.starRating.create({
        data: {
            score: 5,
            userId: jon.id,
            movieId: forrestGump.id,
        },
    });
    const jonRatesHereditary = yield client.starRating.create({
        data: {
            score: 5,
            userId: jon.id,
            movieId: hereditary.id,
        },
    });
    const jonRatesTheTitanic = yield client.starRating.create({
        data: {
            score: 3,
            userId: jon.id,
            movieId: theTitanic.id,
        },
    });
    const jonRatesTheOrphan = yield client.starRating.create({
        data: {
            score: 1,
            userId: jon.id,
            movieId: theOrphan.id,
        },
    });
    const jonsRatings = [
        jonRatesForrestGump,
        jonRatesHereditary,
        jonRatesTheOrphan,
        jonRatesTheTitanic,
    ];
    // Rachel Ratings
    const rachelRatesForrestGump = yield client.starRating.create({
        data: {
            score: 3,
            movieId: forrestGump.id,
            userId: rachel.id,
        },
    });
    const rachelRatesTheOrphan = yield client.starRating.create({
        data: {
            score: 4,
            movieId: theOrphan.id,
            userId: rachel.id,
        },
    });
    const rachelRatesThePrincessBride = yield client.starRating.create({
        data: {
            score: 5,
            movieId: princessBride.id,
            userId: rachel.id,
        },
    });
    const rachelsRatings = [
        rachelRatesForrestGump,
        rachelRatesTheOrphan,
        rachelRatesThePrincessBride,
    ];
    // Andrey Ratings
    const andreyRatesForrestGump = yield client.starRating.create({
        data: {
            score: 5,
            movieId: forrestGump.id,
            userId: andrey.id,
        },
    });
    const andreyRatesInterstellar = yield client.starRating.create({
        data: {
            score: 5,
            movieId: interstellar.id,
            userId: andrey.id,
        },
    });
    const andreysRatings = [andreyRatesForrestGump, andreyRatesInterstellar];
    // Peter Ratings
    const peterRatesTheOrphan = yield client.starRating.create({
        data: {
            score: 1,
            userId: peter.id,
            movieId: theOrphan.id,
        },
    });
    const peterRatesTheTitanic = yield client.starRating.create({
        data: {
            score: 1,
            userId: peter.id,
            movieId: theTitanic.id,
        },
    });
    const peterRatesForrestGump = yield client.starRating.create({
        data: {
            score: 2,
            userId: peter.id,
            movieId: forrestGump.id,
        },
    });
    const petersRatings = [
        peterRatesTheOrphan,
        peterRatesTheTitanic,
        peterRatesForrestGump,
    ];
    const allRatings = [
        ...jonsRatings,
        ...petersRatings,
        ...rachelsRatings,
        ...andreysRatings,
    ];
    return {
        users,
        allMovies,
        allRatings,
        jonsRatings,
        rachelsRatings,
        andreysRatings,
        petersRatings,
        moviesEarlierThan90s,
        moviesBetween2000And2010,
        moviesAfter2010,
        pgMovies,
        pg13Movies,
        rMovies,
    };
});
exports.seedFixtures = seedFixtures;
