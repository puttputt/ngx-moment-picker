import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicExampleComponent } from './examples/basic.component';
import { Angular2MomentPickerModule } from '../../projects/moment-picker/src/lib/angular2-moment-picker.module';
import { MinMaxExampleComponent } from './examples/min-max.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicExampleComponent,
    MinMaxExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angular2MomentPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
