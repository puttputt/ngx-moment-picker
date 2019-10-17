import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GlobalService } from '../services/global';

@Component({
    selector: 'app-minute-component',
    templateUrl: './picker-template.component.html',
    styleUrls: ['./picker-template.component.scss']
})
export class MinuteComponent implements OnInit {
    public perLine: number = 6;
    public rows = [];

    @Output() selectEmitter: EventEmitter<void> = new EventEmitter<void>();

    constructor(private globals: GlobalService) { }

    ngOnInit(): void {
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
                        second.isSame(this.globals.moment, 'hour') ? 'highlighted' : '',
                        // !isSelectable ? 'disabled' : minute.isSame()
                    ]
                }
            );
            i++;
            second.add(this.globals.secondsStep, 'seconds');
        }

    }

    public select(item): void {
        this.globals.moment.set('seconds', item.second);
        console.log(this.globals.moment);
        this.selectEmitter.emit();
    }

    public title(): string {
        return this.globals.moment.clone().startOf('minute').format('lll');
    }
}
