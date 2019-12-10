import * as moment from 'moment';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgxMomentPickerService } from '../ngx-moment-picker.service';
import { BaseComponent } from './base.component';

@Component({
    selector: 'lib-date-component',
    templateUrl: './picker-template.component.html',
    styleUrls: ['./picker-template.component.scss']
})
export class DateComponent extends BaseComponent implements OnInit {
    public type: moment.unitOfTime.DurationConstructor = 'day';

    @Output() selectEmitter: EventEmitter<void> = new EventEmitter<void>();

    constructor(public globals: NgxMomentPickerService) {
        super(globals);
    }

    ngOnInit(): void {
        this.render();
    }

    public render() {
        const hour = this.globals.moment
            .clone()
            .startOf('day')
            .hour(this.globals.hoursStart);

        for (let h = 0; h <= 23; h++) {
            const index = Math.floor(h / this.perLine);
            const isSelectable = true;

            if (!this.rows[index]) {
                this.rows[index] = [];
            }

            this.rows[index].push({
                year: hour.year(),
                month: hour.month(),
                date: hour.date(),
                hour: hour.hour(),
                minute: hour.minute(),
                label: hour.format(this.globals.hoursFormat),
                selectable: isSelectable,
                class: [hour.isSame(this.globals.moment, 'hour') ? 'selected' : '']
            });
            hour.add(1, 'hours');
        }
    }

    public select(item): void {
        this.globals.moment
            .set('hour', item.hour)
            .startOf('minute')
            .set('minutes', 0)
            .set('seconds', 0);
        this.selectEmitter.emit();
    }

    public title(): string {
        return this.globals.moment.format('LL');
    }
}
