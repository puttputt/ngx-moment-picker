import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular2MomentPickerComponent } from './angular2-moment-picker.component';
import { FormsModule } from '@angular/forms';
import { HourComponent } from './views/hour.component';
import { DateComponent } from './views/date.component';
import { MonthComponent } from './views/month.component';
import { YearComponent } from './views/year.component';
import { DecadeComponent } from './views/decade.component';
import { MinuteComponent } from './views/minute.component';
import { BaseComponent } from './views/base.component';

@NgModule({
    declarations: [
        Angular2MomentPickerComponent,
        BaseComponent,
        HourComponent,
        DateComponent,
        MonthComponent,
        YearComponent,
        DecadeComponent,
        MinuteComponent
    ],
    imports: [CommonModule, FormsModule],
    exports: [Angular2MomentPickerComponent],
    providers: []
})
export class Angular2MomentPickerModule {}
