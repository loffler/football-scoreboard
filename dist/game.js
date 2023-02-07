"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    constructor(homeTeam, awayTeam) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homePoints = this.awayPoints = 0;
        this.status = 'ONGOING';
    }
    getHomeTeam() {
        return this.homeTeam;
    }
    getAwayTeam() {
        return this.awayTeam;
    }
    getHomePoints() {
        return this.homePoints;
    }
    getAwayPoints() {
        return this.awayPoints;
    }
    getStatus() {
        return this.status;
    }
    updateScore(homePoints, awayPoints) {
        if (this.getStatus() !== 'ONGOING') {
            throw new Error('Cannot update score of a finished game');
        }
        if (homePoints < 0 || homePoints % 1 !== 0 || awayPoints < 0 || awayPoints % 1 !== 0) {
            throw new Error('Invalid score value');
        }
        this.homePoints = homePoints;
        this.awayPoints = awayPoints;
    }
    finish() {
        if (this.getStatus() !== 'ONGOING') {
            throw new Error('Game already finished');
        }
        this.status = 'FINISHED';
    }
    toString() {
        return `${this.homeTeam} ${this.homePoints} - ${this.awayTeam} ${this.awayPoints}`;
    }
}
exports.Game = Game;
