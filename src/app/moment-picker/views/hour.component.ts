import * as moment from 'moment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GlobalService } from '../services/global';

@Component({
    selector: 'app-hour-component',
    templateUrl: './picker-template.component.html',
    styleUrls: ['./picker-template.component.scss']
})
export class HourComponent implements OnInit {
    @Input() locale: string;
    @Input() format: string;

    @Output() selectEmitter: EventEmitter<void> = new EventEmitter<void>();

    public perLine = 4;
    public minutesStep = 5;
    public rows = [];

    constructor(private globals: GlobalService) { }

    ngOnInit(): void {
        let i = 0;
        const minute = this.globals.moment.clone().startOf('hour').minute(0);

        const minutesFormat = this.globals.minutesFormat ||
        moment.localeData(this.globals.locale).longDateFormat('LT').replace(/[aA]/, '').trim();

        for (let m = 0; m < 60; m += this.minutesStep) {
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
                        minute.isSame(this.globals.moment, 'minute') ? 'highlighted' : '',
                        // !isSelectable ? 'disabled' : minute.isSame()
                    ]
                }
            );
            i++;
            minute.add(this.minutesStep, 'minutes');
        }

        console.log(this.rows);
    }

    public select(item): void {
        this.globals.moment.set('minute', item.minute);
        this.selectEmitter.emit();
    }

    public title(): string {
        return this.globals.moment.clone().startOf('hour').format('lll');
    }

}
