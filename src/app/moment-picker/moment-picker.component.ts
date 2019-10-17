import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import * as moment from 'moment';
import { GlobalService } from './services/global';

@Component({
    selector: 'app-angular2-moment-picker',
    templateUrl: './moment-picker.component.html'
})
export class MomentPickerComponent implements OnInit {

    @Input() public locale: string = 'en-us';
    @Input() public format: string = 'LLL';
    @Input() public minView: string;
    @Input() public maxView: string;
    @Input() public maxDate: string;

    @Input() public inline: boolean;

    @Input() public moment: moment.Moment;

    @Output() public momentSelected: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();

    constructor(private globals: GlobalService) { }

    ngOnInit(): void {
        if (!moment) {
            this.moment = moment();
        }

        this.globals.locale = this.locale;
        this.globals.format = this.format;
    }
}
