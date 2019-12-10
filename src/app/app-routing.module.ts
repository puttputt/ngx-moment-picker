import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicExampleComponent } from './examples/basic.component';
import { MinMaxExampleComponent } from './examples/min-max.component';
import { ExampleComponent } from './examples/example.component';

const routes: Routes = [
    {
        path: '',
        component: ExampleComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
