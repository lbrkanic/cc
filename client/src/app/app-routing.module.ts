import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DhAuthGuard } from './auth-guard';
import { EncoderPageComponent } from './encoder-page/encoder-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [{
  path: 'encoder',
  component: EncoderPageComponent,
  canActivate: [DhAuthGuard],
}, {
  path: 'login',
  component: LoginPageComponent
}, {
  path: '',
  redirectTo: 'encoder',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
