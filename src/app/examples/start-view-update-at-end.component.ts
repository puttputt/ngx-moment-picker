import * as moment from 'moment';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-start-view-update-at-end',
    template: `
        <div class="input-group">
            <input
                [value]="moment?.toString()"
                (click)="picker.toggle()"
                class="form-control"
                placeholder="Select a date"
            />
            <div class="input-group-append">
                <span class="input-group-text"><i class="fa fa-calendar"></i></span>
            </div>
        </div>
        <angular2-moment-picker
            [startview]="'decade'"
            [onlyupdateatend]="'true'"
            [moment]="moment"
            (changed)="changed($event)"
            #minMax
        >
        </angular2-moment-picker>
    `
})
export class StartViewAndUpdateAtEndExampleComponent implements OnInit {
    public moment: moment.Moment;

    @ViewChild('minMax', { static: false }) picker;

    constructor() {}

    ngOnInit(): void {}

    public changed(event: moment.Moment) {
        this.moment = event;
    }
}
