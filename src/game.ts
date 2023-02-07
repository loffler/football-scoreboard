export type GameStatus = 'ONGOING' | 'FINISHED'

export class Game {
  private homePoints: number
  private awayPoints: number
  private status: GameStatus

  constructor(private homeTeam: string, private awayTeam: string) {
    this.homePoints = this.awayPoints = 0
    this.status = 'ONGOING'
  }

  getHomeTeam(): string {
    return this.homeTeam
  }

  getAwayTeam(): string {
    return this.awayTeam
  }

  getHomePoints(): number {
    return this.homePoints
  }

  getAwayPoints(): number {
    return this.awayPoints
  }

  getStatus(): GameStatus {
    return this.status
  }

  updateScore(homePoints: number, awayPoints: number) {
    if (this.getStatus() !== 'ONGOING') {
      throw new Error('Cannot update score of a finished game')
    }
    if (homePoints < 0 || homePoints % 1 !== 0 || awayPoints < 0 || awayPoints % 1 !== 0) {
      throw new Error('Invalid score value')
    }
    this.homePoints = homePoints
    this.awayPoints = awayPoints
  }

  finish(): void {
    if (this.getStatus() !== 'ONGOING') {
      throw new Error('Game already finished')
    }
    this.status = 'FINISHED'
  }

  toString(): string {
    return `${this.homeTeam} ${this.homePoints} - ${this.awayTeam} ${this.awayPoints}`
  }
}