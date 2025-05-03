import { Component } from '@angular/core';
import { ThreePlayersBoardComponent } from "./three-players-board/three-players-board.component";

@Component({
  selector: 'app-root',
  imports: [ThreePlayersBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '5x5-3Player-TicTacToe';
}
