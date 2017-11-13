import { Component, Input } from '@angular/core';
import { ISession } from '../shared/index';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html',
    styles: ['collapsible-well h6 {margin-top:-5px; margin-bottom:10px }']
})
export class SessionListComponent {
    @Input() sessions: ISession[];
    @Input() eventId: number;

    constructor(private authService: AuthService,
                private voterService: VoterService) {

    }

    toggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId, session, this.authService.currentUser.userName).subscribe();
        }
        else {
            this.voterService.addVoter(this.eventId, session, this.authService.currentUser.userName).subscribe();
        }
    }

    userHasVoted(session: ISession) {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
    }
}