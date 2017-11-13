"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var events_app_component_1 = require("./events-app.component");
var events_list_component_1 = require("./events/events-list.component");
var event_thumbnail_component_1 = require("./events/event-thumbnail.component");
var navbar_component_1 = require("./nav/navbar.component");
var event_details_component_1 = require("./events/event-details/event-details.component");
var event_create_component_1 = require("./events/event-create.component");
var _404_component_1 = require("./errors/404.component");
var session_create_component_1 = require("./events/event-details/session-create.component");
var session_list_component_1 = require("./events/event-details/session-list.component");
var upvote_component_1 = require("./events/event-details/upvote.component");
var event_route_activator_service_1 = require("./events/event-details/event-route-activator.service");
var event_service_1 = require("./events/shared/event.service");
//import { ToastrService } from './common/toastr.service';
//import { TOASTR_TOKEN } from './common/toastr.service';
//import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
var index_1 = require("./common/index");
var auth_service_1 = require("./user/auth.service");
//import { CollapsibleWellComponent } from './common/collapsible-well.component';
var voter_service_1 = require("./events/event-details/voter.service");
var location_validator_directive_1 = require("./events/location-validator.directive");
var event_resolver_service_1 = require("./events/event-resolver.service");
var routes_1 = require("./routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes)
        ],
        declarations: [
            events_app_component_1.EventsAppComponent,
            events_list_component_1.EventsListComponent,
            event_thumbnail_component_1.EventThumbnailComponent,
            navbar_component_1.NavBarComponent,
            event_details_component_1.EventDetailsComponent,
            event_create_component_1.EventCreateComponent,
            _404_component_1.Error404Component,
            session_create_component_1.SessionCreateComponent,
            session_list_component_1.SessionListComponent,
            index_1.CollapsibleWellComponent,
            index_1.SimpleModalComponent,
            index_1.ModalTriggerDirective,
            upvote_component_1.UpvoteComponent,
            location_validator_directive_1.LocationValidatorDirective
        ],
        providers: [
            event_service_1.EventService,
            {
                provide: index_1.TOASTR_TOKEN,
                useValue: toastr
            },
            {
                provide: index_1.JQ_TOKEN,
                useValue: jQuery
            },
            //ToastrService,
            event_route_activator_service_1.EventRouteActivator,
            //{
            //    provide: EventRouteActivator,
            //    useClass: EventRouteActivator
            //},
            {
                provide: 'canDeactivateEventCreate',
                useValue: checkDirtyState
            },
            auth_service_1.AuthService,
            voter_service_1.VoterService,
            event_resolver_service_1.EventResolver
        ],
        bootstrap: [events_app_component_1.EventsAppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
function checkDirtyState(component) {
    //return false;
    if (component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cancel ?');
    }
    else {
        return true;
    }
}
//# sourceMappingURL=app.module.js.map