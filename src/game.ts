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

  setHomePoints(homePoints: number) {
    this.homePoints = homePoints
  }

  setAwayPoints(awayPoints: number) {
    this.awayPoints = awayPoints
  }

  setStatus(status: GameStatus) {
    this.status = status
  }

  toString(): string {
    return `${this.homeTeam} ${this.homePoints} - ${this.awayTeam} ${this.awayPoints}`
  }
}