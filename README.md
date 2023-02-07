# Football scoreboard - coding exercise

This is a very simple library for managing results of football games. It allows to:
- create new game (e.g. Mexico - Canada)
- update score of ongoing game
- finish game
- print summary of ongoing games sorted by total score and start order, e.g.:
```
      1. Uruguay 6 - Italy 6
      2. Spain 10 - Brazil 2
      3. Mexico 0 - Canada 5
      4. Argentina 3 - Australia 1
      5. Germany 2 - France 2
```
## Installation
```
yarn add https://github.com/loffler/football-scoreboard
```

## Example
```typescript
import {Scoreboard} from 'football-scoreboard';

const scoreboard = new Scoreboard()

const game1 = scoreboard.startGame('Mexico','Canada')
game1.updateScore(1, 2)

const game2 = scoreboard.startGame('Spain','Italy')
game2.updateScore(10, 2)

game1.finish()
console.log(scoreboard.getSummary())
// Output:
// 1. Spain 10 - Italy 2
```