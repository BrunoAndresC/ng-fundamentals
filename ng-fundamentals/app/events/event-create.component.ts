import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/index';

@Component({
    templateUrl: 'app/events/event-create.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
        .error input { background-color: #E3C3C5; }
        .error ::-webkit-input-placeholder { color: #999; }
    `]
    //template: `
    //    <h1>New Event</h1>
    //    <hr>
    //    <div class="col-md-6">
    //        <h3>[Create Event will go here]</h3>
    //        <br/>
    //        <br/>
    //        <button type="submit" class="btn btn-primary">Save</button>
    //        <button type="button" class="btn btn-default" (click)="cancelClick()">Cancel</button>
    //    </div>
    //`
})
export class EventCreateComponent {
    isDirty: boolean = true;
    constructor(private router: Router,
                private eventService: EventService) {

    }

    cancel() {
        this.router.navigate(['/events']);
    }

    saveEvent(formValues) {
        console.log(formValues);
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }
}