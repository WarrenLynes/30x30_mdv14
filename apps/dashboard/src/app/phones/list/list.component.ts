import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Phone } from '@mdv14/core-data';

@Component({
  selector: 'mdv14-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() phones: Phone[];
  @Input() selectedPhone: Phone;
  @Output() selectPhone = new EventEmitter<Phone>();
  @Output() deletePhone = new EventEmitter<Phone>();

  constructor() { }

}
