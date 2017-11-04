import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent } from '../shared/index';

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
        em { float: right; color: #E05C65; padding-left: 10px; }
        .error input { background-color: #E3C3C5; }
        .error ::-webkit-input-placeholder { color: #999; }
    `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    //event: any;
    isDirty: boolean = true;

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

    updateEvent(formValues) {
        console.log(formValues);
        this.eventService.updateEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }

    cancelClick() {
        this.router.navigate(['/events']);
    }
}