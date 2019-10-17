import * as moment from 'moment';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
    public moment: moment.Moment = moment();

    public locale: string;
    public format: string;

    public yearsFormat: string = 'YYYY';
    public monthsFormat: string = 'MMM';
    public daysFormat: string = 'D';

    public hoursFormat: string = 'HH:[00]';
    public hoursStart: number = 0;

    public minutesFormat: string;
    public minutesStep: number = 5;
    public minutesStart: number = 0;
    public minutesEnd: number = 59;

    public secondsFormat: string = 'ss';
    public secondsStep: number = 1;
    public secondsStart: number = 0;
    public secondsEnd: number = 59;
}
