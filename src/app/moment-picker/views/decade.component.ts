import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GlobalService } from '../services/global';
import { BaseComponent } from './base.component';

@Component({
    selector: 'app-decade-component',
    templateUrl: './picker-template.component.html',
    styleUrls: ['./picker-template.component.scss']
})
export class DecadeComponent extends BaseComponent implements OnInit {

    constructor(private globals: GlobalService) {
        super();
    }

    ngOnInit(): void {
        this.unit = this.globals.moment.clone();
        this.render();
    }

    public render(): void {
        const year = this.unit.clone();
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

    public leftArrow(): void {
        this.unit.subtract(10, 'years');
        this.reset();
    }

    public rightArrow(): void {
        this.unit.add(10, 'years');
        this.reset();
    }

    public select(item): void {
        this.globals.moment.set('year', item.year);
        this.selectEmitter.emit();
    }

    public title(): string {
        const year = this.unit.clone();
        return [year.format('YYYY'), year.subtract(9, 'years').format('YYYY')].reverse().join(' - ');
    }
}
