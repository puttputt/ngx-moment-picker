import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentPickerComponent } from './moment-picker.component';
import { FormsModule } from '@angular/forms';
import { HourComponent } from './views/hour.component';
import { GlobalService } from './services/global';
import { DateComponent } from './views/date.component';
import { MonthComponent } from './views/month.component';
import { YearComponent } from './views/year.component';
import { DecadeComponent } from './views/decade.component';
import { MinuteComponent } from './views/minute.component';

@NgModule({
    declarations: [
        MomentPickerComponent,
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
        MomentPickerComponent,
        HourComponent,
        DateComponent,
        MonthComponent,
        YearComponent,
        DecadeComponent,
        MinuteComponent,
    ],
    providers: [
        GlobalService
    ],
})
export class MomentPickerModule {}
