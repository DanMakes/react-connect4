# Connect 4 Game implemented in ReactJS (Webpack and Babel)

Connect Four is a two-person strategy game with the goal of bringing the first four of his own pieces in a line.

__Webpack__ - A module bundler (we use it also as task runner, so we didn't implement grunt or gulp - webpack by itself is sufficient for our purposes)  
__Babel__ - A Javascript compiler  
__ES6__ - A relatively new Javascript standard  
__Yarn__ - A package manager  
__React__ - As expected  

### Pre-requirements
- brew & node & yarn
- brew update
- brew install yarn

### To get started
1. git clone https://gitlab.com/cgrafeneder/connect4.git
2. `cd` into your project directory
3. run `yarn install`
4. run `yarn start`
5. now the game is available on `localhost:4444`

### External Sources
- __Redux__ (`react-redux`): A state management tool to handle the different game states (e.g. starting and stopping game, initialize default settings, save user defined settings like number or rows or cols or player names, update board after move, ...)
- __Countdown__ (`react-countdown-now`): A external react plugin to set and handle countdown timer.

### Responsive Design
The application adapts to all screen sizes but due to the possibility of changing the number of cols and rows the board does not fit at all screen sizes. Nevertheless the design adapts to the board size no matter how much rows or cols it has.

### Repository
https://gitlab.com/cgrafeneder/connect4.git

**created by Christina Grafeneder (S1710629009) and Christa Höglinger (S1710629010)**
