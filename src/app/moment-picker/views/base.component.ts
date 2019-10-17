import * as moment from 'moment';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GlobalService } from '../services/global';

@Component({
})
export class BaseComponent {

    public perLine: number = 4;
    public type: moment.unitOfTime.DurationConstructor;
    public rows = [];
    public localMoment: moment.Moment;

    @Output() selectEmitter: EventEmitter<void> = new EventEmitter<void>();
    @Output() titleEmitter: EventEmitter<void> = new EventEmitter<void>();

    constructor(public globals: GlobalService) { }

    public leftArrow(): void {
        this.globals.moment.subtract(1, this.type);
        this.reset();
    }

    public rightArrow(): void {
        this.globals.moment.add(1, this.type);
        this.reset();
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

    public titleSelected(): void {
        console.log('a');
        this.titleEmitter.emit();
    }
}
