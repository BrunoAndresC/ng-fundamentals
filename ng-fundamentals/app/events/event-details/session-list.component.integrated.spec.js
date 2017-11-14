"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var session_list_component_1 = require("./session-list.component");
var upvote_component_1 = require("./upvote.component");
var collapsible_well_component_1 = require("../../common/collapsible-well.component");
var auth_service_1 = require("../../user/auth.service");
var voter_service_1 = require("./voter.service");
describe('SessionListComponent', function () {
    var component;
    var fixture;
    var debugElem;
    var element;
    beforeEach(testing_1.async(function () {
        var mockAuthService = {
            isAuthenticated: function () { return true; },
            currentUser: { userName: 'Joe' }
        };
        var mockVoterService = {
            userHasVoted: function () { return true; }
        };
        testing_1.TestBed.configureTestingModule({
            imports: [],
            declarations: [
                session_list_component_1.SessionListComponent,
                upvote_component_1.UpvoteComponent,
                collapsible_well_component_1.CollapsibleWellComponent
            ],
            providers: [
                { provide: auth_service_1.AuthService, useValue: mockAuthService },
                { provide: voter_service_1.VoterService, useValue: mockVoterService }
            ],
            schemas: []
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(session_list_component_1.SessionListComponent);
        component = fixture.componentInstance;
        debugElem = fixture.debugElement;
        element = fixture.nativeElement;
    });
    describe('initial display', function () {
        it('should have the correct session title', function () {
            component.sessions = [
                { id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['john', 'bob'] }
            ];
            component.eventId = 4;
            expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
        });
    });
});
//# sourceMappingURL=session-list.component.integrated.spec.js.map