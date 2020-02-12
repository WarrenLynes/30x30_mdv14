import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@mdv14/material';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [MaterialModule, CommonModule],
  declarations: [ LoginComponent, NotFoundComponent ],
  exports: [ LoginComponent,  NotFoundComponent ]
})
export class UiModule {}
