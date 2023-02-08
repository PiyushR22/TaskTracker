import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() color: string = 'green';
  @Output() btnClick = new EventEmitter();
  constructor() {}
  ngOnInit(): void {
    this.color = 'green'
    this.text = 'Add'
  }
  onclick() {
    this.btnClick.emit();
  }
}
