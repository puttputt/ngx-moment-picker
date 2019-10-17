import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicExampleComponent } from './examples/basic/basic.component';
import { Angular2MomentPickerModule } from './angular2-moment-picker/moment-picker.module';

@NgModule({
  declarations: [
    AppComponent,
    BasicExampleComponent,
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
