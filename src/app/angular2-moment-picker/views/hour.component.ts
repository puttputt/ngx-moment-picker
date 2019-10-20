import * as moment from 'moment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Angular2MomentPickerService } from '../angular2-moment-picker.service';
import { BaseComponent } from './base.component';

@Component({
    selector: 'app-hour-component',
    templateUrl: './picker-template.component.html',
    styleUrls: ['./picker-template.component.scss']
})
export class HourComponent extends BaseComponent implements OnInit {

    public type: moment.unitOfTime.DurationConstructor = 'hour';

    constructor(public globals: Angular2MomentPickerService) {
        super(globals);
    }

    ngOnInit(): void {
        this.render();
    }

    public render() {
        let i = 0;
        const minute = this.globals.moment.clone().startOf('hour').minute(0);

        const minutesFormat = this.globals.minutesFormat ||
            moment.localeData(this.globals.locale).longDateFormat('LT').replace(/[aA]/, '').trim();

        for (let m = 0; m < 60; m += this.globals.minutesStep) {
            const index = Math.floor(i / this.perLine);
            const isSelectable = true;

            if (!this.rows[index]) { this.rows[index] = []; }

            this.rows[index].push(
                {
                    year: minute.year(),
                    month: minute.month(),
                    date: minute.date(),
                    hourr: minute.hour(),
                    minute: minute.minute(),
                    label: minute.format(minutesFormat),
                    selectable: isSelectable,
                    class: [
                        minute.isSame(this.globals.moment, 'minute') ? 'selected' : '',
                    ]
                }
            );
            i++;
            minute.add(this.globals.minutesStep, 'minutes');
        }
    }

    public select(item): void {
        this.globals.moment.set('minute', item.minute);
        this.selectEmitter.emit();
    }

    public title(): string {
        return this.globals.moment.clone().startOf('hour').format('lll');
    }

}
