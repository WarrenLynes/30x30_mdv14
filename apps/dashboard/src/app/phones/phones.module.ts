import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonesComponent } from './phones.component';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { MaterialModule } from '@mdv14/material';



@NgModule({
  declarations: [PhonesComponent, DetailComponent, ItemComponent, ListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {path: '', component: PhonesComponent},
      {path: ':id', component: ItemComponent}
    ])
  ]
})
export class PhonesModule { }
