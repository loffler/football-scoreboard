"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scoreboard = void 0;
const game_1 = require("./game");
class Scoreboard {
    constructor() {
        this.games = [];
    }
    startGame(homeTeam, awayTeam) {
        const game = new game_1.Game(homeTeam, awayTeam);
        if (this.games.some((game) => [game.getHomeTeam(), game.getAwayTeam()].includes(homeTeam) ||
            [game.getHomeTeam(), game.getAwayTeam()].includes(awayTeam)))
            throw new Error('One of the teams is already playing.');
        this.games.push(game);
        return game;
    }
    getSummary() {
        return this.games
            .filter((game) => game.getStatus() === 'ONGOING')
            .sort((game1, game2) => {
            const score1 = game1.getHomePoints() + game1.getAwayPoints();
            const score2 = game2.getHomePoints() + game2.getAwayPoints();
            return score2 - score1 || this.games.indexOf(game2) - this.games.indexOf(game1);
        })
            .map((game, index) => `${index + 1}. ${game.toString()}`)
            .join('\n');
    }
}
exports.Scoreboard = Scoreboard;
