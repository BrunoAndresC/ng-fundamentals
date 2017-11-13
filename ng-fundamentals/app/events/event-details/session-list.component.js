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
var auth_service_1 = require("../../user/auth.service");
var voter_service_1 = require("./voter.service");
var SessionListComponent = (function () {
    function SessionListComponent(authService, voterService) {
        this.authService = authService;
        this.voterService = voterService;
    }
    SessionListComponent.prototype.toggleVote = function (session) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId, session, this.authService.currentUser.userName).subscribe();
        }
        else {
            this.voterService.addVoter(this.eventId, session, this.authService.currentUser.userName).subscribe();
        }
    };
    SessionListComponent.prototype.userHasVoted = function (session) {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
    };
    return SessionListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SessionListComponent.prototype, "sessions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SessionListComponent.prototype, "eventId", void 0);
SessionListComponent = __decorate([
    core_1.Component({
        selector: 'session-list',
        templateUrl: 'app/events/event-details/session-list.component.html',
        styles: ['collapsible-well h6 {margin-top:-5px; margin-bottom:10px }']
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        voter_service_1.VoterService])
], SessionListComponent);
exports.SessionListComponent = SessionListComponent;
//# sourceMappingURL=session-list.component.js.map