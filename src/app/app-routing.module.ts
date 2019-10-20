import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicExampleComponent } from './examples/basic.component';
import { MinMaxExampleComponent } from './examples/min-max.component';

const routes: Routes = [
  {
    path: 'basic', component: BasicExampleComponent
  },
  {
    path: 'minmax', component: MinMaxExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
