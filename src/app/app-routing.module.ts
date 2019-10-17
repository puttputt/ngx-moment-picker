import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicExampleComponent } from './examples/basic/basic.component';

const routes: Routes = [
  {
    path: 'basic', component: BasicExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
