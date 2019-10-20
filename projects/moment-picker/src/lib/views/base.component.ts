import * as moment from 'moment';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Angular2MomentPickerService } from '../angular2-moment-picker.service';

@Component({
    templateUrl: './picker-template.component.html',
})
export class BaseComponent {

    public perLine: number = 4;
    public type: moment.unitOfTime.DurationConstructor;
    public rows = [];
    public localMoment: moment.Moment;

    @Output() selectEmitter: EventEmitter<void> = new EventEmitter<void>();
    @Output() titleEmitter: EventEmitter<void> = new EventEmitter<void>();

    constructor(public globals: Angular2MomentPickerService) { }

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
        this.titleEmitter.emit();
    }

    public select(item): void {
        return;
    }
}
