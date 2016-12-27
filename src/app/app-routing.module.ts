import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellModule } from '../plotter-shell-angular2';

const routes: Routes = [
  { path: '', loadChildren: () => ShellModule }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), ShellModule],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
