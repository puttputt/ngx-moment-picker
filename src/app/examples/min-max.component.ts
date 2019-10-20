
import * as moment from 'moment';
import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <app-angular2-moment-picker
        [minview]="'year'" [maxview]="'date'" [startview]="'month'" (changed)="changed($event)"
        ></app-angular2-moment-picker>
    `
})
export class MinMaxExampleComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }

    public changed(event: moment.Moment) {
        console.log(event);
    }
}
