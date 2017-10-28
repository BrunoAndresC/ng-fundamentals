import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `    
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div>Time: {{event?.time}}</div>
            <div [ngSwitch]="event?.time">
                <span *ngSwitchCase="'8:00 am'">Early Start</span>
                <span *ngSwitchCase="'10:00 am'">Late Start</span>
                <span *ngSwitchDefault>Normal Start</span>
            </div>
            <div>Price: \${{event?.price}}</div>
            <div [hidden]="!event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span>&nbsp;</span>
                <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">
                Online URL: {{event?.onlineUrl}}
            </div>
        </div>    
        `,
    styles: [`
        .thumbnail { min-height: 210px; }
    `]
//    template: `    
//        <div class="well hoverwell thumbnail">
//            <h2>{{event.name}}</h2>
//            <div>Date: {{event.date}}</div>
//            <div>Time: {{event.time}}</div>
//            <div>Price: \${{event.price}}</div>
//            <div>
//                <span>Location: {{event.location.address}}</span>
//                <span>&nbsp;</span>
//                <span>{{event.location.city}}, {{event.location.country}}</span>
//            </div>
//            <button class="btn btnprimary" (click)="handleClickMe()">Click</button>
//        </div>    
//`
})
export class EventThumbnailComponent {
    @Input() event: any;
    //@Output() eventClick = new EventEmitter();
    //someProperty: any = "some value";

    //handleClickMe() {
    //    //console.log('Clicked');
    //    //this.eventClick.emit('test');
    //    this.eventClick.emit(this.event.name);
    //}

    //logFoo() {
    //    console.log('foo');
    //}
}