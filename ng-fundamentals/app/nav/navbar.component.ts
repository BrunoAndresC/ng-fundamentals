import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events/shared/index';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html'
})
export class NavBarComponent {
    searchTerm: string = "";
    foundSessions: ISession[];

    constructor(private authService: AuthService,
                private eventService: EventService) {

    }

    // We use directive instead.
    //onSearch() {
    //    $('#id').model();
    //}

    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(
            sessions => {
                this.foundSessions = sessions;
                console.log(this.foundSessions);
            }
        );
    }
}