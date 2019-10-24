import { Component, EventEmitter, OnInit, Input, Output, HostListener, ElementRef } from '@angular/core';
import * as moment_ from 'moment';
import { Angular2MomentPickerService } from './angular2-moment-picker.service';

export enum ViewState {
    Decade = 0,
    Year,
    Month,
    Date,
    Hour,
    Minute
}

const moment = moment_;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'angular2-moment-picker',
    templateUrl: './angular2-moment-picker.component.html',
    providers: [Angular2MomentPickerService]
})
export class Angular2MomentPickerComponent implements OnInit {

    @Input() public locale?: string = 'en-us';
    @Input() public format?: string = 'LLL';
    @Input() public minview: string;
    @Input() public maxview: string;
    @Input() public maxdate?: string;
    @Input() public startview?: string;
    @Input() public onlyupdateatend: boolean = false;
    @Input() public moment: moment_.Moment;

    @Output() public changed: EventEmitter<moment_.Moment> = new EventEmitter<moment_.Moment>();

    public viewStates = ViewState;
    public currentView: ViewState = ViewState.Decade;
    public viewStack: ViewState[];

    public open: boolean = false;

    private isFocusInsideComponent: boolean = false;
    private isComponentClicked: boolean = false;

    constructor(
        public globals: Angular2MomentPickerService
    ) { }

    ngOnInit(): void {
        if (!this.moment) {
            this.moment = moment();
        }

        this.globals.locale = this.locale;
        this.globals.format = this.format;

        if (this.moment) {
            this.globals.moment = this.moment;
        }
        this.viewStack = this.buildViewStack();
    }

    @HostListener('click') click() {
        this.isFocusInsideComponent = true;
        this.isComponentClicked = true;
    }

    @HostListener('document:click', ['$event']) onOutsideClick(event) {
        if (!this.isFocusInsideComponent && this.isComponentClicked) {
            this.hide();
            this.isComponentClicked = false;
        }
        this.isFocusInsideComponent = false;
    }

    public show(): void {
        this.isFocusInsideComponent = true;
        this.isComponentClicked = true;

        if (this.startview) {
            this.setCurrentView(this.viewStateFromString(this.startview));
        } else if (this.minview) {
            this.setCurrentView(this.viewStateFromString(this.minview));
        } else {
            this.setCurrentView(ViewState.Decade);
        }

        this.open = !this.open;
    }

    public next(): void {
        const currentViewIndex = this.viewStack.indexOf(this.currentView);

        if (currentViewIndex === this.viewStack.length) {
            this.hide();
        } else {
            this.setCurrentView(this.viewStack[currentViewIndex + 1]);
        }
    }

    public previous(): void {
        const currentViewIndex = this.viewStack.indexOf(this.currentView);

        if (currentViewIndex === 0) {
            return;
        } else {
            this.setCurrentView(this.viewStack[currentViewIndex - 1]);
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
        this.viewChanged();
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

    private viewChanged(): void {
        this.moment = this.globals.moment.clone();

        if (!this.onlyupdateatend) {
            this.changed.emit(this.moment);
        } else if (this.onlyupdateatend && !this.currentView) {
            this.changed.emit(this.moment);
        }
    }
}
