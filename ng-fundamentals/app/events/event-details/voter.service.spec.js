"use strict";
var voter_service_1 = require("./voter.service");
var Rx_1 = require("rxjs/Rx");
describe('VoterService', function () {
    var voterService, mockHttp;
    beforeEach(function () {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new voter_service_1.VoterService(mockHttp);
    });
    describe('deleteVoter', function () {
        it('shold remove the voter from the list of voters', function () {
            var session = { id: 6, voters: ["joe", "john"] };
            mockHttp.delete.and.returnValue(Rx_1.Observable.of(false));
            voterService.deleteVoter(3, session, "joe");
            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe("john");
        });
    });
});
//# sourceMappingURL=voter.service.spec.js.map