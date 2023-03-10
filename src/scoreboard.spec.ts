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
    expect(scoreboard.getSummary()).toEqual('1. FC Barcelona 0 - Real Madrid 0')
  });

  it('should not start new game if one team is already playing', () => {
    const game = scoreboard.startGame('FC Barcelona', 'Real Madrid')
    expect(() => scoreboard.startGame('FC Barcelona', 'Ajax Amsterdam')).toThrowError()
  });

  it('should update score of a game', () => {
    const game = scoreboard.startGame('FC Barcelona', 'Real Madrid')
    game.updateScore(2, 1)
    expect(game.getHomePoints()).toEqual(2)
    expect(game.getAwayPoints()).toEqual(1)
    expect(scoreboard.getSummary()).toEqual('1. FC Barcelona 2 - Real Madrid 1')
  });

  it('should not update score with negative values', () => {
    const game = scoreboard.startGame('FC Barcelona', 'Real Madrid')
    expect(() => game.updateScore(-1, 1)).toThrowError()
    expect(() => game.updateScore(1.5, 1)).toThrowError()
  })

  it('should finish game', () => {
    const game = scoreboard.startGame('FC Barcelona', 'Real Madrid')
    scoreboard.startGame('FC Liverpool', 'Ajax Amsterdam')
    game.finish()
    expect(game.getStatus()).toEqual('FINISHED')
    expect(scoreboard.getSummary()).toEqual('1. FC Liverpool 0 - Ajax Amsterdam 0')
  });

  it('should not update score of a finished game', () => {
    const game = scoreboard.startGame('FC Barcelona', 'Real Madrid')
    game.finish()
    expect(() => game.updateScore(1, 1)).toThrowError()
  })

  it('should get summary of ongoing games', () => {
    let game = scoreboard.startGame('Mexico', 'Canada')
    game.updateScore( 0, 5)
    game = scoreboard.startGame('Spain', 'Brazil')
    game.updateScore( 10, 2)
    game = scoreboard.startGame('Germany', 'France')
    game.updateScore( 2, 2)
    game = scoreboard.startGame('Uruguay', 'Italy')
    game.updateScore( 6, 6)
    game = scoreboard.startGame('Argentina', 'Australia')
    game.updateScore( 3, 1)

    expect(scoreboard.getSummary()).toEqual([
      '1. Uruguay 6 - Italy 6',
      '2. Spain 10 - Brazil 2',
      '3. Mexico 0 - Canada 5',
      '4. Argentina 3 - Australia 1',
      '5. Germany 2 - France 2',
    ].join('\n'))
  })
})