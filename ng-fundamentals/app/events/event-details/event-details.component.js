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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var event_service_1 = require("../shared/event.service");
var router_1 = require("@angular/router");
var EventDetailsComponent = /** @class */ (function () {
    function EventDetailsComponent(eventService, route, router) {
        this.eventService = eventService;
        this.route = route;
        this.router = router;
        //event: any;
        this.isDirty = true;
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        //this.event = this.eventService.getEvent(1);
        var id = +this.route.snapshot.params['id'];
        this.event = this.eventService.getEvent(id);
    };
    EventDetailsComponent.prototype.updateEvent = function (formValues) {
        console.log(formValues);
        this.eventService.updateEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    };
    EventDetailsComponent.prototype.cancelClick = function () {
        this.router.navigate(['/events']);
    };
    EventDetailsComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/events/event-details/event-details.component.html',
            styles: ["\n        .container { padding-left: 20px; padding-right: 20px; }\n        .event-image { height: 100px; }\n        em { float: right; color: #E05C65; padding-left: 10px; }\n        .error input { background-color: #E3C3C5; }\n        .error ::-webkit-input-placeholder { color: #999; }\n    "]
        }),
        __metadata("design:paramtypes", [event_service_1.EventService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], EventDetailsComponent);
    return EventDetailsComponent;
}());
exports.EventDetailsComponent = EventDetailsComponent;
//# sourceMappingURL=event-details.component.js.map