import * as moment from 'moment';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global';

@Component({
    selector: 'app-year-component',
    templateUrl: './picker-template.component.html',
    styleUrls: ['./picker-template.component.scss']
})
export class YearComponent implements OnInit {
    public perLine: number = 4;
    public rows = [];

    constructor(private globals: GlobalService) { }

    ngOnInit(): void {
        const month = this.globals.moment.clone().startOf('year');
        const months = moment.monthsShort();
        const isSelectable = true;

        months.forEach((label, i) => {
            const index = Math.floor(i / this.perLine);
            if (!this.rows[index]) { this.rows[index] = []; }

            this.rows[index].push(
                {
                    year: month.year(),
                    month: month.month(),
                    date: month.date(),
                    hour: month.hour(),
                    minute: month.minute(),
                    label: month.format(this.globals.monthsFormat),
                    selectable: isSelectable,
                    class: [
                        month.isSame(this.globals.moment, 'month') ? 'highlighted' : '',
                        // !isSelectable ? 'disabled' : minute.isSame()
                    ]
                }
            );
            month.add(1, 'months');

        });



    }

    public select(item): void {
        this.globals.moment.set('month', item.month);
        console.log(this.globals.moment);
    }

    public title(): string {
        return this.globals.moment.format('YYYY');
    }
}
