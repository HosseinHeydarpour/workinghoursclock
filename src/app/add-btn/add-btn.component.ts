import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrl: './add-btn.component.scss',
})
export class AddBtnComponent implements OnInit {
  // @Output() btnClicked = new EventEmitter<number>();

  btnClicked = new Subject<number>();

  rowCount: number = 0;

  ngOnInit(): void {}

  onAddBtnClicked() {
    this.rowCount++;
    this.btnClicked.next(this.rowCount);
  }
}
