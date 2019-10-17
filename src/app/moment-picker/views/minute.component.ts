import * as moment from 'moment';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GlobalService } from '../services/global';
import { BaseComponent } from './base.component';

@Component({
    selector: 'app-minute-component',
    templateUrl: './picker-template.component.html',
    styleUrls: ['./picker-template.component.scss']
})
export class MinuteComponent extends BaseComponent implements OnInit {
    public perLine: number = 6;

    public type: moment.unitOfTime.DurationConstructor = 'minute';

    constructor(public globals: GlobalService) {
        super(globals);
    }

    ngOnInit(): void {
        this.render();
    }

    public render(): void {
        let i = 0;
        const second = this.globals.moment.clone().startOf('minute').second(this.globals.secondsStart);

        for (let s = 0; s <= this.globals.secondsEnd - this.globals.secondsStart; s += this.globals.secondsStep) {
            const index = Math.floor(i / this.perLine);
            const isSelectable = true;

            if (!this.rows[index]) { this.rows[index] = []; }

            this.rows[index].push(
                {
                    year: second.year(),
                    month: second.month(),
                    date: second.date(),
                    hour: second.hour(),
                    minute: second.minute(),
                    second: second.second(),
                    label: second.format(this.globals.secondsFormat),
                    selectable: isSelectable,
                    class: [
                        second.isSame(this.globals.moment, 'second') ? 'selected' : '',
                    ]
                }
            );
            i++;
            second.add(this.globals.secondsStep, 'seconds');
        }
    }

    public select(item): void {
        this.globals.moment.set('seconds', item.second);
        this.selectEmitter.emit();
    }

    public title(): string {
        return this.globals.moment.clone().startOf('minute').format('lll');
    }
}
