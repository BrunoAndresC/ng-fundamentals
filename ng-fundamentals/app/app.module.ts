import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventCreateComponent } from './events/event-create.component';
import { Error404Component } from './errors/404.component';

import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { AuthService } from './user/auth.service';

import { appRoutes } from './routes';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        EventCreateComponent,
        Error404Component
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        {
            provide: 'canDeactivateEventCreate',
            useValue: checkDirtyState
        },
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component: EventCreateComponent) {
    //return false;

    if (component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cancel ?');
    }
    else {
        return true;
    }
}