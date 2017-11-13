"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var event_service_1 = require("../shared/event.service");
var router_1 = require("@angular/router");
var EventDetailsComponent = (function () {
    function EventDetailsComponent(eventService, route, router) {
        this.eventService = eventService;
        this.route = route;
        this.router = router;
        //event: any;
        this.isDirty = true;
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.forEach(function (data) {
            _this.event = data['event'];
            _this.addMode = false;
        });
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
    };
    EventDetailsComponent.prototype.updateEvent = function (formValues) {
        console.log(formValues);
        this.eventService.updateEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    };
    EventDetailsComponent.prototype.cancel = function () {
        this.router.navigate(['/events']);
    };
    EventDetailsComponent.prototype.addSession = function () {
        this.addMode = true;
    };
    EventDetailsComponent.prototype.saveNewSession = function (session) {
        var nextId = Math.max.apply(null, this.event.sessions.map(function (session) { return session.id; }));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    };
    EventDetailsComponent.prototype.cancelAddSession = function () {
        this.addMode = false;
    };
    return EventDetailsComponent;
}());
EventDetailsComponent = __decorate([
    core_1.Component({
        templateUrl: '/app/events/event-details/event-details.component.html',
        styles: ["\n        .container { padding-left: 20px; padding-right: 20px; }\n        .event-image { height: 100px; }\n        em { float: right; color: #E05C65; padding-left: 10px; }\n        .error input { background-color: #E3C3C5; }\n        .error ::-webkit-input-placeholder { color: #999; }\n        a { cursor: pointer }\n    "]
    }),
    __metadata("design:paramtypes", [event_service_1.EventService,
        router_1.ActivatedRoute,
        router_1.Router])
], EventDetailsComponent);
exports.EventDetailsComponent = EventDetailsComponent;
//# sourceMappingURL=event-details.component.js.map