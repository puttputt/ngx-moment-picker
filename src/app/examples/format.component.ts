import * as moment from 'moment';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-format',
    template: `
        <div class="input-group">
            <input
                [value]="moment?.format('YYYY MM DD')"
                (click)="picker.toggle()"
                class="form-control"
                placeholder="Select a date"
            />
            <div class="input-group-append">
                <span class="input-group-text"><i class="fa fa-calendar"></i></span>
            </div>
        </div>
        <angular2-moment-picker [moment]="moment" (changed)="changed($event)" #format>
        </angular2-moment-picker>
    `
})
export class FormatExampleComponent implements OnInit {
    public moment: moment.Moment;

    @ViewChild('format', { static: false }) picker;

    constructor() {}

    ngOnInit(): void {}

    public changed(event: moment.Moment) {
        this.moment = event;
    }
}
