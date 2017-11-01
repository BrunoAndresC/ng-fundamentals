import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventCreateComponent } from './events/event-create.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { UserModule } from './user/user.module';

//export function exportUserModule() {
//    return UserModule;
//}

export const appRoutes: Routes = [    
    { path: 'events/new', component: EventCreateComponent, canDeactivate: ['canDeactivateEventCreate'] },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: () => UserModule }                                // Anonymous function syntax
    //{ path: 'user', loadChildren: exportUserModule }                              // Not Anonymous function syntax     
    //{ path: 'user', loadChildren: () => System.import('./user/user.module') }     // Angular 2.0.x syntax    
    //{ path: 'user', loadChildren: 'app/user/user.module#UserModule' }             // Angular 4.0.x syntax
]