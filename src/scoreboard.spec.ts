import {Scoreboard} from './scoreboard';

describe('Scoreboard', () => {
  let scoreboard = new Scoreboard();

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
    expect(scoreboard.getSummary()).toHaveLength(1)
    expect(scoreboard.getSummary()).toEqual(['1. FC Liverpool 0 - Ajax Amsterdam 0'])
  });

  it('should get summary of ongoing games', () => {
    let game = scoreboard.startGame('FC Barcelona', 'Real Madrid')
    scoreboard.updateScore(game, 1, 1)
    game = scoreboard.startGame('FC Liverpool', 'Ajax Amsterdam')
    scoreboard.updateScore(game, 5, 2)
    game = scoreboard.startGame('Atletico Madrid', 'FC Porto')
    scoreboard.updateScore(game, 2, 5)
    game = scoreboard.startGame('Bayern', 'Chelsea')
    scoreboard.updateScore(game, 4, 4)

    expect(scoreboard.getSummary()).toEqual([
      '1. Bayern 4 - Chelsea 4',
      '2. FC Liverpool 5 - Ajax Amsterdam 2',
      '3. Atletico Madrid 2 - FC Porto 5',
      '4. FC Barcelona 1 - Real Madrid 1',
    ])
  })
})