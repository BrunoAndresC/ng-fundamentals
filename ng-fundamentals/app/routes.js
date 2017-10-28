"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events_list_component_1 = require("./events/events-list.component");
var event_details_component_1 = require("./events/event-details/event-details.component");
var event_create_component_1 = require("./events/event-create.component");
exports.appRoutes = [
    { path: 'events/new', component: event_create_component_1.EventCreateComponent },
    { path: 'events', component: events_list_component_1.EventsListComponent },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map