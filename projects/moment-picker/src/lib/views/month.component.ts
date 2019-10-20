import * as moment from 'moment';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Angular2MomentPickerService } from '../angular2-moment-picker.service';
import { BaseComponent } from './base.component';

@Component({
    selector: 'lib-month-component',
    templateUrl: './picker-template.component.html',
    styleUrls: ['./picker-template.component.scss']
})
export class MonthComponent extends BaseComponent implements OnInit {
    public perLine: number = moment.weekdays().length;
    public type: moment.unitOfTime.DurationConstructor = 'month';

    @Output() selectEmitter: EventEmitter<void> = new EventEmitter<void>();

    constructor(public globals: Angular2MomentPickerService) {
        super(globals);
    }

    ngOnInit(): void {
        this.render();
    }

    public render() {
        const month = this.globals.moment.month();
        const isSelectable = true;

        const day = this.globals.moment.clone().startOf('month').startOf('week').hour(12);
        const firstWeek = day.week();
        const lastWeek = firstWeek + 5;

        for (let week = firstWeek; week <= lastWeek; week++) {

            this.rows[week] = Array.apply(null, Array(this.perLine)).map(() => {

                const date = {
                    year: day.year(),
                    month: day.month(),
                    date: day.date(),
                    hour: day.hour(),
                    minute: day.minute(),
                    label: day.format(this.globals.daysFormat),
                    selectable: isSelectable,
                    class: [
                        day.isSame(this.globals.moment, 'day') ? 'selected' : '',
                        !isSelectable || day.month() !== month ? 'disabled' : ''
                    ]
                };
                day.add(1, 'days');

                return date;
            });
        }
    }


    public select(item: any): void {
        this.globals.moment.set('date', item.date);
        this.selectEmitter.emit();
    }

    public title(): string {
        return this.globals.moment.format('MMMM YYYY');
    }
}
