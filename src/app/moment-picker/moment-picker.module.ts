import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentPickerComponent } from './moment-picker.component';
import { FormsModule } from '@angular/forms';
import { HourComponent } from './views/hour.component';
import { GlobalService } from './services/global';
import { DayComponent } from './views/day.component';
import { MonthComponent } from './views/month.component';
import { YearComponent } from './views/year.component';
import { DecadeComponent } from './views/decade.component';
import { MinuteComponent } from './views/minute.component';

@NgModule({
    declarations: [
        MomentPickerComponent,
        HourComponent,
        DayComponent,
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
        DayComponent,
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
