import { Component, OnInit } from '@angular/core';
import { PhonesFacade } from '@mdv14/core-state';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mdv14-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  phone$ = this.facade.selectedPhone$;

  constructor(
    private route: ActivatedRoute,
    private facade: PhonesFacade
  ) { }

  ngOnInit() {
    this.facade.loadPhones();
    this.route.params.subscribe((param) => this.facade.selectPhone(param['id']));
    this.phone$ = this.facade.selectedPhone$;
  }

}
