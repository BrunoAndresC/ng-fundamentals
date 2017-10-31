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
var event_service_1 = require("./shared/event.service");
var toastr_service_1 = require("../common/toastr.service");
var EventsListComponent = /** @class */ (function () {
    function EventsListComponent(eventService, toastrService) {
        this.eventService = eventService;
        this.toastrService = toastrService;
        //this.events = this.eventService.getEvents(); 
    }
    EventsListComponent.prototype.ngOnInit = function () {
        this.events = this.eventService.getEvents();
    };
    EventsListComponent.prototype.handleThumbnailClick = function (eventName) {
        //toastr.success(eventName);
        this.toastrService.success(eventName);
    };
    EventsListComponent = __decorate([
        core_1.Component({
            //    selector: 'events-list',
            template: "\n    <div>\n        <h1>Angular events</h1>\n        <hr/>\n        <div class=\"row\">\n            <div *ngFor=\"let event of events\" class=\"col-md-5\">\n                <event-thumbnail (click)=\"handleThumbnailClick(event.name)\" [event]=\"event\">\n                </event-thumbnail>\n            </div>\n        </div>\n    </div>\n"
            //    template: `
            //    <div>
            //        <h1>Angular events</h1>
            //        <hr/>
            //        <div class="row">
            //            <div *ngFor="let event of events" class="col-md-5">
            //                <event-thumbnail [event]="event">
            //                </event-thumbnail>
            //            </div>
            //        </div>
            //    </div>
            //`
            //    template: `
            //    <div>
            //        <h1>Angular events</h1>
            //        <hr/>
            //        <event-thumbnail             
            //            [event]="event1">
            //        </event-thumbnail>        
            //    </div>
            //`
            //    template: `
            //    <div>
            //        <h1>Angular events</h1>
            //        <hr/>
            //        <event-thumbnail 
            //            #thumbnail
            //            [event]="event1">
            //        </event-thumbnail>
            //        <h3>{{thumbnail.someProperty}}</h3>
            //        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me</button>
            //    </div>
            //`
            //    template: `
            //    <div>
            //        <h1>Angular events</h1>
            //        <hr/>
            //        <event-thumbnail 
            //            (eventClick)="handleEventClicked($event)" 
            //            [event]="event1">
            //        </event-thumbnail>
            //    </div>
            //`
            //    templateUrl: 'app/events/events-list.component.html'
            //    template: `
            //    <div>
            //        <h1>Angular events</h1>
            //        <hr/>
            //        <div class="well hoverwell thumbnail">
            //            <h2>{{event.name}}</h2>
            //            <div>Date: {{event.date}}</div>
            //            <div>Time: {{event.time}}</div>
            //            <div>Price: \${{event.price}}</div>
            //            <div>
            //                <span>Location: {{event.location.address}}</span>
            //                <span>&nbsp;</span>
            //                <span>{{event.location.city}}, {{event.location.country}}</span>
            //            </div>
            //        </div>
            //    </div>
            //` 
        }),
        __metadata("design:paramtypes", [event_service_1.EventService, toastr_service_1.ToastrService])
    ], EventsListComponent);
    return EventsListComponent;
}());
exports.EventsListComponent = EventsListComponent;
//# sourceMappingURL=events-list.component.js.map