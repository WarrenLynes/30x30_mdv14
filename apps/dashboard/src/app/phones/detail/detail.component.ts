import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Phone } from '@mdv14/core-data';

@Component({
  selector: 'mdv14-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnChanges {
  form: FormGroup;

  @Input() selectedPhone: Phone;
  @Output() savePhone = new EventEmitter<Phone>();
  @Output() cancel = new EventEmitter();

  constructor() {this.buildForm()}

  ngOnChanges(changes: SimpleChanges) : void{
    if( changes.selectedPhone &&  changes.selectedPhone) {
      this.buildForm();
    }
  }

  buildForm() {
    if(this.selectedPhone && this.selectedPhone.id) {
      this.form = new FormGroup({
        id: new FormControl(this.selectedPhone.id),
        title: new FormControl(this.selectedPhone.title),
        details: new FormControl(this.selectedPhone.details)
      });
    } else {
      this.form = new FormGroup({
        title: new FormControl(''),
        details: new FormControl('')
      });
    }
  }

  save() {
    this.savePhone.emit({...this.selectedPhone, ...this.form.value});
  }

}
