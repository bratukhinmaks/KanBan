import {Component, OnInit} from '@angular/core';
import {Board} from '../board.model';
import {Subscription} from 'rxjs';
import {BoardService} from '../board.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {
  boards: Board[];
  sub: Subscription;

  constructor(public boardSer: BoardService) {
  }

  ngOnInit() {
    this.sub = this.boardSer.getUserBoards()
      .subscribe(board => this.boards = board);
  }

  drop(ev: CdkDragDrop<string[]>) {
    moveItemInArray(this.boards, ev.previousIndex, ev.currentIndex);
    this.boardSer.sortBoards(this.boards);
  }


}
