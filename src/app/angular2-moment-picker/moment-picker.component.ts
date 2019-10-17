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

    @Output() public changed: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();

    public viewStates = ViewState;
    public currentView: ViewState = ViewState.Decade;

    public open: boolean = false;

    constructor(private globals: GlobalService) { }

    ngOnInit(): void {
        if (!moment) {
            this.moment = moment();
        }

        this.globals.locale = this.locale;
        this.globals.format = this.format;

        if (this.moment) {
            this.globals.moment = this.moment;
        }
    }

    public closePopover(): void {

    }

    public decadeSelected(): void {
        this.toYear();
    }

    public yearSelected(): void {
        this.toMonth();
    }

    public monthSelected(): void {
        this.toDate();
    }

    public dateSelected(): void {
        this.toHour();
    }

    public hourSelected(): void {
        this.toMinute();
    }

    public minuteSelected(): void {
        this.open = false;
    }

    public titleSelected(): void {
        switch (this.currentView) {
            case ViewState.Decade:
                return;
            case ViewState.Year:
                this.toDecade();
                return;
            case ViewState.Month:
                this.toYear();
                return;
            case ViewState.Date:
                this.toMonth();
                return;
            case ViewState.Hour:
                this.toDate();
                return;
            case ViewState.Minute:
                this.toHour();
                return;
            default:
                return;
        }
    }

    private toDecade(): void {
        this.currentView = ViewState.Decade;
        this.viewChanged();
    }

    private toYear(): void {
        this.currentView = ViewState.Year;
        this.viewChanged();
    }

    private toMonth(): void {
        this.currentView = ViewState.Month;
        this.viewChanged();
    }

    private toDate(): void {
        this.currentView = ViewState.Date;
        this.viewChanged();
    }

    private toHour(): void {
        this.currentView = ViewState.Hour;
        this.viewChanged();
    }

    private toMinute(): void {
        this.currentView = ViewState.Minute;
        this.viewChanged();
    }

    private viewChanged(): void {
        this.moment = this.globals.moment;
        this.changed.emit(this.moment);
    }
}
