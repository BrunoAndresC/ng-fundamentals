import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { SessionListComponent } from './session-list.component';
import { UpvoteComponent } from './upvote.component';
import { CollapsibleWellComponent } from '../../common/collapsible-well.component';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';
import { By } from '@angular/platform-browser';

describe('SessionListComponent', () => {
    let component: SessionListComponent;
    let fixture: ComponentFixture<SessionListComponent>;
    let debugElem: DebugElement;
    let element: HTMLElement;

    beforeEach(async(() => {
        let mockAuthService = {
            isAuthenticated: () => true,
            currentUser: { userName: 'Joe' }
        };
        let mockVoterService = {
            userHasVoted: () => true
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                UpvoteComponent,
                CollapsibleWellComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: []
        }).compileComponents();
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugElem = fixture.debugElement;
        element = fixture.nativeElement;
    })

    describe('initial display', () => {

        it('should have the correct session title', () => {
            component.sessions = [
                { id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['john', 'bob'] }
            ];
            component.eventId = 4;

            //expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
            expect(debugElem.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
        })
    })
})