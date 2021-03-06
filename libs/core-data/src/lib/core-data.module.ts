import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { PhonesService } from './phones/phones.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [ AuthService, PhonesService ],
})
export class CoreDataModule {}
