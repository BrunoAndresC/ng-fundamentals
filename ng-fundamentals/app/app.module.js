"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var events_app_component_1 = require("./events-app.component");
var events_list_component_1 = require("./events/events-list.component");
var event_thumbnail_component_1 = require("./events/event-thumbnail.component");
var navbar_component_1 = require("./nav/navbar.component");
var event_details_component_1 = require("./events/event-details/event-details.component");
var event_create_component_1 = require("./events/event-create.component");
var _404_component_1 = require("./errors/404.component");
var session_create_component_1 = require("./events/event-details/session-create.component");
var session_list_component_1 = require("./events/event-details/session-list.component");
var event_route_activator_service_1 = require("./events/event-details/event-route-activator.service");
var event_service_1 = require("./events/shared/event.service");
//import { ToastrService } from './common/toastr.service';
//import { TOASTR_TOKEN } from './common/toastr.service';
var toastr_service_1 = require("./common/toastr.service");
var auth_service_1 = require("./user/auth.service");
var collapsible_well_component_1 = require("./common/collapsible-well.component");
var routes_1 = require("./routes");
//declare let toastr: any;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
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
                collapsible_well_component_1.CollapsibleWellComponent
            ],
            providers: [
                event_service_1.EventService,
                {
                    provide: toastr_service_1.TOASTR_TOKEN,
                    useValue: toastr
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
                auth_service_1.AuthService
            ],
            bootstrap: [events_app_component_1.EventsAppComponent]
        })
    ], AppModule);
    return AppModule;
}());
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