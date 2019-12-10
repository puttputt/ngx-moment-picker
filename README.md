# Angular2 Moment Picker

This project is a port of angular-moment-picker for AngularJS

## Installation

```
npm install ngx-moment-picker
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

    //optional
    @ViewChild('ngxmomentpicker', { static: false }) picker;

    constructor() { }

    public changed(event: moment.Moment) {
        this.moment = event;
    }
}
```

## Development

### Build
`increment package.json version`
Run `ng build moment-picker` to build the project.

## Publishing to NPM
`cd dist/moment-picker`
`npm publish`
