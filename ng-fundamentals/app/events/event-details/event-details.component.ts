import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent } from '../shared/index';

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
    `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    //event: any;

    constructor(private eventService: EventService,
                private route: ActivatedRoute,
                private router: Router
    ) {

    }

    ngOnInit(){
        //this.event = this.eventService.getEvent(1);

        let id = +this.route.snapshot.params['id'];
        this.event = this.eventService.getEvent(id);
    }

    saveEvent(formValues) {
        console.log(formValues);
        this.eventService.saveEvent(formValues);
        
        this.router.navigate(['/events']);
    }
}