import { Component, OnInit} from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/index';

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
        em { float: right; color: #E05C65; padding-left: 10px; }
        .error input { background-color: #E3C3C5; }
        .error ::-webkit-input-placeholder { color: #999; }
        a { cursor: pointer }
    `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    //event: any;
    isDirty: boolean = true;
    addMode: boolean;

    constructor(private eventService: EventService,
                private route: ActivatedRoute,
                private router: Router
    ) {

    }

    ngOnInit() {
        this.route.data.forEach((data) => {
            this.event = data['event'];
            this.addMode = false;
        })

        // THIS CODE HAS AN ISSUE WITH THE NAVIGATION AND IT IS FIXED ABOVE.
        //this.route.params.forEach((params: Params) => {
        //    this.event = this.route.snapshot.data['event']                
        //    this.addMode = false;            
        //})

        //this.route.params.forEach((params: Params) => {
        //    this.eventService.getEvent(+params['id']).subscribe((event: IEvent) => {
        //        this.event = event;
        //        this.addMode = false;
        //    })
        //})

        //this.route.params.forEach((params: Params) => {
        //    this.event = this.eventService.getEvent(+params['id']);
        //    // Reset the state of the differents properties.
        //    this.addMode = false;
        //});

        //let id = +this.route.snapshot.params['id'];
        //this.event = this.eventService.getEvent(id);

        //this.event = this.eventService.getEvent(1);
    }

    updateEvent(formValues) {
        console.log(formValues);
        this.eventService.updateEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(session => session.id));

        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}