import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-three-players-board',
  imports: [CommonModule],
  templateUrl: './three-players-board.component.html',
  styleUrl: './three-players-board.component.css'
})
export class ThreePlayersBoardComponent {
  gameboard: string[][] = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ];
  starterPlayer: number = 1;
  threePlayers: string[] = ['X', 'O', 'R'];
  gameWinner: number | null = null;
  gameWinnerTxt: string | null = null;
  isDraw: boolean = false;

  makeMove(row: number, col: number) {
    if (this.gameboard[row][col] === '' && !this.gameWinner) {
      this.gameboard[row][col] = this.threePlayers[this.starterPlayer - 1];
      if(this.checkWinCondition(row,col)){
        this.gameWinner = this.starterPlayer;
        if(this.gameWinner == 1) this.gameWinnerTxt = "X";
        else if(this.gameWinner == 2) this.gameWinnerTxt = "O";
        else if(this.gameWinner == 3) this.gameWinnerTxt = "R";
        
      } else if (this.checkDrawCondition()){
        this.isDraw = true;
      } else {
        this.starterPlayer = (this.starterPlayer % 3) + 1;
      }
    }
  }

  checkWinCondition(row: number, col: number): boolean {
     const playerSymbol = this.threePlayers[this.starterPlayer - 1];
    // Check row
    let count = 0;
    for (let i = 0; i < 5; i++) {
        if (this.gameboard[row][i] === playerSymbol) {
            count++;
            if (count === 4) return true;
        } else {
            count = 0;
        }
    }

    // Check column
    count = 0;
    for (let i = 0; i < 5; i++) {
        if (this.gameboard[i][col] === playerSymbol) {
            count++;
            if (count === 4) return true;
        } else {
            count = 0;
        }
    }

    // Check diagonal (top-left to bottom-right)
    count = 0;
    for (let i = -4; i <= 4; i++) {
        if (row + i >= 0 && row + i < 5 && col + i >= 0 && col + i < 5 && this.gameboard[row + i][col + i] === playerSymbol) {
            count++;
            if (count === 4) return true;
        } else {
            count = 0;
        }
    }

    // Check diagonal (top-right to bottom-left)
    count = 0;
    for (let i = -4; i <= 4; i++) {
        if (row + i >= 0 && row + i < 5 && col - i >= 0 && col - i < 5 && this.gameboard[row + i][col - i] === playerSymbol) {
            count++;
            if (count === 4) return true;
        } else {
            count = 0;
        }
    }
    return false
  }

  checkDrawCondition(): boolean {
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (this.gameboard[row][col] === '') {
                return false; 
            }
        }
    }
    return true;
  }


  resetGame() {
    this.gameboard = [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
      ];
    this.starterPlayer = 1;
    this.gameWinner = null;
    this.isDraw = false;
  }
}
