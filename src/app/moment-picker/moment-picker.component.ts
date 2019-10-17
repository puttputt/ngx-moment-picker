import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import * as moment from 'moment';
import { GlobalService } from './services/global';

export enum ViewState {
    Decade = 0,
    Year,
    Month,
    Date,
    Hour,
    Minute
}
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

    public viewStates = ViewState;
    public currentView: ViewState = ViewState.Decade;

    constructor(private globals: GlobalService) { }

    ngOnInit(): void {
        if (!moment) {
            this.moment = moment();
        }

        this.globals.locale = this.locale;
        this.globals.format = this.format;
    }

    public decadeSelected(): void {
        this.currentView = ViewState.Year;
    }

    public yearSelected(): void {
        this.currentView = ViewState.Month;
    }

    public monthSelected(): void {
        this.currentView = ViewState.Date;
    }

    public dateSelected(): void {
        this.currentView = ViewState.Hour;
        console.log('bam');
    }

    public hourSelected(): void {
        this.currentView = ViewState.Minute;
        console.log('here');
    }
}
