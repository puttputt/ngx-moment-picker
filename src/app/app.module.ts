import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicExampleComponent } from './examples/basic.component';
import { Angular2MomentPickerModule } from '../../projects/moment-picker/src/lib/angular2-moment-picker.module';
import { MinMaxExampleComponent } from './examples/min-max.component';
import { ExampleComponent } from './examples/example.component';
import { StartViewAndUpdateAtEndExampleComponent } from './examples/start-view-update-at-end.component';
import { FormatExampleComponent } from './examples/format.component';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';

@NgModule({
    declarations: [
        AppComponent,
        ExampleComponent,
        BasicExampleComponent,
        MinMaxExampleComponent,
        StartViewAndUpdateAtEndExampleComponent,
        FormatExampleComponent
    ],
    imports: [BrowserModule, AppRoutingModule, Angular2MomentPickerModule, NgxGistModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
