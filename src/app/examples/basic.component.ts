
import * as moment from 'moment';
import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <app-angular2-moment-picker (changed)="changed($event)"></app-angular2-moment-picker>
    `
})
export class BasicExampleComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    public changed(event: moment.Moment) {
        console.log(event);
    }
}
