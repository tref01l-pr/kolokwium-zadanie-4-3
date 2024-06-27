import './style.css'
import {setupTicTacToe} from './tic-tac-toe.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Tic-Tac-Toe</h1>
    <div id="form-container" >
        <form id="player-form">
          <label for="player1">Player 1 Name:</label>
          <input type="text" id="player1" required>
          <br>
          <label for="player2">Player 2 Name:</label>
          <input type="text" id="player2" required>
          <br>
          <button class="start-button" type="submit">Start Game</button>
        </form>
    </div>
    <div id="game" style="display: none;">
        <div class="cell" data-index="0"></div>
        <div class="cell" data-index="1"></div>
        <div class="cell" data-index="2"></div>
        <div class="cell" data-index="3"></div>
        <div class="cell" data-index="4"></div>
        <div class="cell" data-index="5"></div>
        <div class="cell" data-index="6"></div>
        <div class="cell" data-index="7"></div>
        <div class="cell" data-index="8"></div>
    </div>
  
  <button class="reset-button" id="reset" style="display: none;">Reset</button>
  <p id="message"></p>
    
    
  </div>
`

setupTicTacToe(
    document.getElementById('form-container'),
    document.getElementById('game'),
    document.querySelectorAll('.cell'),
    document.getElementById('message'),
    document.getElementById('reset'));



