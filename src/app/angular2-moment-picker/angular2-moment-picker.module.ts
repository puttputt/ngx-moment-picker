import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular2MomentPickerComponent } from './angular2-moment-picker.component';
import { FormsModule } from '@angular/forms';
import { HourComponent } from './views/hour.component';
import { Angular2MomentPickerService } from './angular2-moment-picker.service';
import { DateComponent } from './views/date.component';
import { MonthComponent } from './views/month.component';
import { YearComponent } from './views/year.component';
import { DecadeComponent } from './views/decade.component';
import { MinuteComponent } from './views/minute.component';

@NgModule({
    declarations: [
        Angular2MomentPickerComponent,
        HourComponent,
        DateComponent,
        MonthComponent,
        YearComponent,
        DecadeComponent,
        MinuteComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        Angular2MomentPickerComponent
    ],
    providers: [
        Angular2MomentPickerService
    ],
})
export class Angular2MomentPickerModule {}
