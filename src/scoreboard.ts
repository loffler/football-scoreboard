import {Game} from './game';

export class Scoreboard {
  private games: Game[] = []

  startGame(homeTeam: string, awayTeam: string): Game {
    const game = new Game(homeTeam, awayTeam)
    this.games.push(game)
    return game
  }

  updateScore(game: Game, homePoints: number, awayPoints: number): Game {
    if (game.getStatus() !== 'ONGOING') {
      throw new Error('Cannot update score of a finished game')
    }
    game.setHomePoints(homePoints)
    game.setAwayPoints(awayPoints)
    return game
  }

  finishGame(game: Game): void {
    game.setStatus('FINISHED')
  }

  getSummary(): string[] {
    return this.games
      .filter((game) => game.getStatus() === 'ONGOING')
      .sort((game1, game2) => {
        const score1 = game1.getHomePoints() + game1.getAwayPoints()
        const score2 = game2.getHomePoints() + game2.getAwayPoints()
        return score2 - score1 || this.games.indexOf(game2) - this.games.indexOf(game1)
      })
      .map((game, index) => `${index+1}. ${game.toString()}`)
  }
}