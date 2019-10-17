import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global';

@Component({
    selector: 'app-day-component',
    templateUrl: './picker-template.component.html',
    styleUrls: ['./picker-template.component.scss']
})
export class DayComponent implements OnInit {
    public perLine: number = 4;
    public rows = [];
    constructor(private globals: GlobalService) { }

    ngOnInit(): void {
        const hour = this.globals.moment.clone().startOf('day').hour(this.globals.hoursStart);

        for (let h = 0; h <= 23; h++) {

            const index = Math.floor(h / this.perLine);
            const isSelectable = true;

            if (!this.rows[index]) { this.rows[index] = []; }

            this.rows[index].push(
                {
                    year: hour.year(),
                    month: hour.month(),
                    date: hour.date(),
                    hour: hour.hour(),
                    minute: hour.minute(),
                    label: hour.format(this.globals.hoursFormat),
                    selectable: isSelectable,
                    class: [
                        hour.isSame(this.globals.moment, 'hour') ? 'highlighted' : '',
                        // !isSelectable ? 'disabled' : minute.isSame()
                    ]
                }
            );
            hour.add(1, 'hours');
        }
        console.log(this.rows);
    }

    public select(item): void {
        this.globals.moment.set('hour', item.hour);
        console.log(this.globals.moment);
    }

    public title(): string {
        return this.globals.moment.format('LL');
    }
}
