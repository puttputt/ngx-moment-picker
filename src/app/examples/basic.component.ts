
import * as moment from 'moment';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-basic',
    template: `

<div class="input-group">
    <input [value]="momentBasic?.toString()" (click)="click()" class="form-control" placeholder="Select a date">
    <div class="input-group-append">
        <span class="input-group-text"><i class="fa fa-calendar"></i></span>
    </div>
</div>
<angular2-moment-picker [moment]="momentBasic" (changed)="changed($event)" #angular2momentpicker></angular2-moment-picker>
    `
})
export class BasicExampleComponent implements OnInit {

    public momentBasic: moment.Moment;

    @ViewChild('angular2momentpicker', { static: false }) picker;

    constructor() { }

    ngOnInit(): void { }

    public click() {
        this.picker.show();

    }
    public changed(event: moment.Moment) {
        this.momentBasic = event;
    }


}
