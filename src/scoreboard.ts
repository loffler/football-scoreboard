import {Game} from './game';

export class Scoreboard {
  private games: Game[] = []

  startGame(homeTeam: string, awayTeam: string): Game {
    const game = new Game(homeTeam, awayTeam)
    this.games.push(game)
    return game
  }

  updateScore(game: Game, homePoints: number, awayPoints: number): Game {
    game.setHomePoints(homePoints)
    game.setAwayPoints(awayPoints)
    return game
  }

  finishGame(game: Game): void {
    game.setStatus('FINISHED')
  }

  getSummary(): string[] {
    return this.games.map((game, index) => `${index+1}. ${game.toString()}`)
  }
}