export type GameStatus = 'ONGOING' | 'FINISHED';
export declare class Game {
    private homeTeam;
    private awayTeam;
    private homePoints;
    private awayPoints;
    private status;
    constructor(homeTeam: string, awayTeam: string);
    getHomeTeam(): string;
    getAwayTeam(): string;
    getHomePoints(): number;
    getAwayPoints(): number;
    getStatus(): GameStatus;
    updateScore(homePoints: number, awayPoints: number): void;
    finish(): void;
    toString(): string;
}
//# sourceMappingURL=game.d.ts.map