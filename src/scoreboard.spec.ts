import {Scoreboard} from './scoreboard';

describe('Scoreboard', () => {
  let scoreboard: Scoreboard

  beforeEach(() => {
    scoreboard = new Scoreboard()
  })

  it('should start new game', () => {
    const game = scoreboard.startGame('FC Barcelona', 'Real Madrid')
    expect(game.getHomePoints()).toEqual(0)
    expect(game.getAwayPoints()).toEqual(0)
    expect(scoreboard.getSummary()).toHaveLength(1)
  });

  it('should update score of a game', () => {
    const game = scoreboard.startGame('FC Barcelona', 'Real Madrid')
    scoreboard.updateScore(game, 2, 1)
    expect(game.getHomePoints()).toEqual(2)
    expect(game.getAwayPoints()).toEqual(1)
    expect(scoreboard.getSummary()).toEqual(['1. FC Barcelona 2 - Real Madrid 1'])
  });

  it('should finish game', () => {
    const game = scoreboard.startGame('FC Barcelona', 'Real Madrid')
    scoreboard.startGame('FC Liverpool', 'Ajax Amsterdam')
    scoreboard.finishGame(game)
    expect(game.getStatus()).toEqual('FINISHED')
    expect(scoreboard.getSummary()).toHaveLength(1)
    expect(scoreboard.getSummary()).toEqual(['1. FC Liverpool 0 - Ajax Amsterdam 0'])
  });

  it('should get summary of ongoing games', () => {
    let game = scoreboard.startGame('Mexico', 'Canada')
    scoreboard.updateScore(game, 0, 5)
    game = scoreboard.startGame('Spain', 'Brazil')
    scoreboard.updateScore(game, 10, 2)
    game = scoreboard.startGame('Germany', 'France')
    scoreboard.updateScore(game, 2, 2)
    game = scoreboard.startGame('Uruguay', 'Italy')
    scoreboard.updateScore(game, 6, 6)
    game = scoreboard.startGame('Argentina', 'Australia')
    scoreboard.updateScore(game, 3, 1)

    expect(scoreboard.getSummary()).toEqual([
      '1. Uruguay 6 - Italy 6',
      '2. Spain 10 - Brazil 2',
      '3. Mexico 0 - Canada 5',
      '4. Argentina 3 - Australia 1',
      '5. Germany 2 - France 2',
    ])
  })
})