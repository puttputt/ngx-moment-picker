import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global';

@Component({
    selector: 'app-decade-component',
    templateUrl: './picker-template.component.html',
    styleUrls: ['./picker-template.component.scss']
})
export class DecadeComponent implements OnInit {
    public perLine: number = 4;
    public rows = [];

    constructor(private globals: GlobalService) { }

    ngOnInit(): void {
        const year = this.globals.moment.clone();
        const firstYear = Math.floor(year.year() / 10) * 10 - 1;

        year.year(firstYear);

        for (let y = 0; y < 12; y++) {
            const index = Math.floor(y / this.perLine);
            const isSelectable = true;
            if (!this.rows[index]) { this.rows[index] = []; }

            this.rows[index].push(
                {
                    year: year.year(),
                    month: year.month(),
                    date: year.date(),
                    hour: year.hour(),
                    minute: year.minute(),
                    label: year.format(this.globals.yearsFormat),
                    selectable: isSelectable,
                    class: [
                        year.isSame(this.globals.moment, 'year') ? 'highlighted' : '',
                        // !isSelectable ? 'disabled' : minute.isSame()
                    ]
                }
            );
            year.add(1, 'year');

        }
    }

    public select(item): void {
        this.globals.moment.set('hour', item.hour);
        console.log(this.globals.moment);
    }

    public title(): string {
        const year = this.globals.moment.clone();
        return [year.format('YYYY'), year.subtract(9, 'years').format('YYYY')].reverse().join(' - ');
    }
}
