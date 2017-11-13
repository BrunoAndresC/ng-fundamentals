﻿import { VoterService } from './voter.service';
import { ISession } from '../shared/index';
import { Observable } from 'rxjs/Rx';

describe('VoterService', () => {
    let voterService: VoterService,
    mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {

        it('shold remove the voter from the list of voters', () => {
            var session = { id: 6, voters: ["joe", "john"] };
            mockHttp.delete.and.returnValue(Observable.of(false));

            voterService.deleteVoter(3, <ISession>session, "joe");

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe("john");
        })
    })
})