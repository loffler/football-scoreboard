import {Game} from './game';

export class Scoreboard {
  private games: Game[] = []

  startGame(homeTeam: string, awayTeam: string): Game {
    return new Game()
  }

  updateScore(game: Game, homePoints: number, awayPoints: number): Game {
    return new Game()
  }

  finishGame(game: Game): void {

  }

  getSummary(): string[] {
    return []
  }
}