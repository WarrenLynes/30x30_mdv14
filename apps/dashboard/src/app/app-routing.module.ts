import { NgModule } from '@angular/core';
import { LoginComponent, NotFoundComponent, UiModule } from '@mdv14/ui';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    UiModule,
    RouterModule.forRoot([
      { path: '404', component: NotFoundComponent },
      { path: 'login', component: LoginComponent },
      { path: '', canActivate: [AuthGuard], loadChildren: () => import('./phones/phones.module').then(m => m.PhonesModule)},
      { path: '**', redirectTo: '404', pathMatch: 'full' }
    ], { initialNavigation: 'enabled' })
  ]
})
export class AppRoutingModule {}
