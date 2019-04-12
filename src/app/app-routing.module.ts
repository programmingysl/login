import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginformComponent} from './views/loginform/loginform.component';

const routes: Routes = [

  {path: '', component: LoginformComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
