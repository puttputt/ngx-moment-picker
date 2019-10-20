import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import * as moment from 'moment';
import { Angular2MomentPickerService } from './angular2-moment-picker.service';

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
    templateUrl: './angular2-moment-picker.component.html'
})
export class Angular2MomentPickerComponent implements OnInit {

    @Input() public locale: string = 'en-us';
    @Input() public format: string = 'LLL';
    @Input() public minview: string;
    @Input() public maxview: string;
    @Input() public maxdate: string;
    @Input() public startview: string;

    @Input() public inline: boolean;

    @Input() public moment: moment.Moment;

    @Output() public changed: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();

    public viewStates = ViewState;
    public currentView: ViewState = ViewState.Decade;
    public viewStack: ViewState[];

    public open: boolean = false;

    constructor(private globals: Angular2MomentPickerService) { }

    ngOnInit(): void {
        if (!moment) {
            this.moment = moment();
        }

        this.globals.locale = this.locale;
        this.globals.format = this.format;

        if (this.moment) {
            this.globals.moment = this.moment;
        }

        this.viewStack = this.buildViewStack();
    }

    public show(): void {
        if (this.startview) {
            this.setCurrentView(this.viewStateFromString(this.startview));
        } else if (this.minview) {
            this.setCurrentView(this.viewStateFromString(this.minview));
        }

        this.open = !this.open;
    }

    public next(): void {
        const currentViewIndex = this.viewStack.indexOf(this.currentView);

        if (currentViewIndex === this.viewStack.length) {
            this.hide();
        } else {
            this.currentView = this.viewStack[currentViewIndex + 1];
        }
    }

    public previous(): void {
        const currentViewIndex = this.viewStack.indexOf(this.currentView);

        if (currentViewIndex === 0) {
            return;
        } else {
            this.currentView = this.viewStack[currentViewIndex - 1];
        }
    }


    private buildViewStack(): ViewState[] {
        const stack: ViewState[] = [];

        const min = this.minview ? this.viewStateFromString(this.minview) : ViewState.Decade;
        const max = this.maxview ? this.viewStateFromString(this.maxview) : ViewState.Minute;

        for (let i = min; i <= max; i++) {
            stack.push(i);
        }

        return stack;
    }

    private hide(): void {
        this.open = false;
    }

    private setCurrentView(view: ViewState): void {
        this.currentView = view;
    }

    private viewStateFromString(view: string): ViewState {
        switch (view) {
            case 'decade':
                return ViewState.Decade;
            case 'year':
                return ViewState.Year;
            case 'month':
                return ViewState.Month;
            case 'date':
                return ViewState.Date;
            case 'hour':
                return ViewState.Hour;
            case 'minute':
                return ViewState.Minute;
            default:
                return ViewState.Decade;
        }
    }

    private stringFromViewState(view: ViewState): string {
        switch (view) {
            case ViewState.Decade:
                return 'decade';
            case ViewState.Year:
                return 'year';
            case ViewState.Month:
                return 'month';
            case ViewState.Date:
                return 'date';
            case ViewState.Hour:
                return 'hour';
            case ViewState.Minute:
                return 'minute';
            default:
                return 'decade';
        }
    }

    private viewChanged(): void {
        this.moment = this.globals.moment;
        this.changed.emit(this.moment);
    }
}
