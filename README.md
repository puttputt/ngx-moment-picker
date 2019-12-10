# Ngx Moment Picker

This project is a port of popular angularJS picker, angular-moment-picker.

## Installation

```
npm install ngx-moment-picker
```

```
import { NgxMomentPickerModule } from 'ngx-moment-picker';

@NgModule({
    imports: [
        NgxMomentPickerModule,
    ],
    declarations: [],
    providers: [],
})
export class YourModule {}
```

## Usage

```html
<input [value]="moment?.toString()" (click)="picker.toggle()">

<ngx-moment-picker 
        [moment]="moment"
        [minview]="'year'"
        [maxview]="'date'"
        [startview]="'month'"
        [onlyupdateatend]="'true'"
        (changed)="changed($event)" #ngxmomentpicker></ngx-moment-picker>
```

```typescript
export class ExampleComponent {

    public moment: moment.Moment;

    @ViewChild('ngxmomentpicker', { static: false }) picker;

    constructor() { }

    public changed(event: moment.Moment) {
        this.moment = event;
    }
}
```

## Development

### Build
increment package.json version

Run `ng build moment-picker` to build the project.

## Publishing to NPM

`cd dist/moment-picker`

`npm publish`
