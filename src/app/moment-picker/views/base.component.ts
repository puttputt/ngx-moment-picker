import * as moment from 'moment';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
})
export class BaseComponent implements OnInit {

    public perLine: number = 4;
    public type: string = 'decade';
    public unit: moment.Moment;
    public rows = [];

    @Output() selectEmitter: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    ngOnInit(): void { }

    public leftArrow(): void {
        this.unit.subtract(1, 'decade');
    }

    public rightArrow(): void {
        this.unit.add(1, this.type);
    }

    public reset(): void {
        this.rows = [];
        this.render();
    }

    public render(): void {
        return;
    }

    public title(): string {
        return '';
    }
}
