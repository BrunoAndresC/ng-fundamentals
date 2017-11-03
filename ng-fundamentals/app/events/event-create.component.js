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
var router_1 = require("@angular/router");
var index_1 = require("./shared/index");
var EventCreateComponent = /** @class */ (function () {
    function EventCreateComponent(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.isDirty = true;
    }
    EventCreateComponent.prototype.cancelClick = function () {
        this.router.navigate(['/events']);
    };
    EventCreateComponent.prototype.saveEvent = function (formValues) {
        console.log(formValues);
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    };
    EventCreateComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/events/event-create.component.html',
            styles: ["\n        em { float: right; color: #E05C65; padding-left: 10px; }\n        .error input { background-color: #E3C3C5; }\n        .error ::-webkit-input-placeholder { color: #999; }\n    "]
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
        }),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.EventService])
    ], EventCreateComponent);
    return EventCreateComponent;
}());
exports.EventCreateComponent = EventCreateComponent;
//# sourceMappingURL=event-create.component.js.map