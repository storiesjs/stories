import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() label: string = 'Label works';
  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  click(event: MouseEvent) {
    this.onClick.emit(event);
  }

}
