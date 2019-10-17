import * as moment from 'moment';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global';

@Component({
    selector: 'app-month-component',
    templateUrl: './picker-template.component.html',
    styleUrls: ['./picker-template.component.scss']
})
export class MonthComponent implements OnInit {
    public perLine: number = moment.weekdays().length;
    public rows = [];

    constructor(private globals: GlobalService) { }

    ngOnInit(): void {
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
                        day.isSame(this.globals.moment, 'hour') ? 'highlighted' : '',
                        !isSelectable || day.month() !== month ? 'disabled' : ''
                    ]
                };
                day.add(1, 'days');

                return date;
            });
        }
    }

    public select(item: any): void {
        this.globals.moment.set('day', item.day);

    }

    public title(): string {
        return this.globals.moment.format('MMMM YYYY');
    }
}
