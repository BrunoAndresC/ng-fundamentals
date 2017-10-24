import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Angular events</h1>
        <hr/>
        <event-thumbnail             
            [event]="event1">
        </event-thumbnail>        
    </div>
`
//    template: `
//    <div>
//        <h1>Angular events</h1>
//        <hr/>
//        <event-thumbnail 
//            #thumbnail
//            [event]="event1">
//        </event-thumbnail>
//        <h3>{{thumbnail.someProperty}}</h3>
//        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me</button>
//    </div>
//`
//    template: `
//    <div>
//        <h1>Angular events</h1>
//        <hr/>
//        <event-thumbnail 
//            (eventClick)="handleEventClicked($event)" 
//            [event]="event1">
//        </event-thumbnail>
//    </div>
//`
//    templateUrl: 'app/events/events-list.component.html'
//    template: `
//    <div>
//        <h1>Angular events</h1>
//        <hr/>
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
//        </div>
//    </div>
//` 
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '11:00 am',
        price: '699.99',
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: 'Bacon 1010 St',
            city: 'London',
            country: 'England'
        }
    }

    //handleEventClicked(data) {
    //    console.log('Received:', data);
    //}
}