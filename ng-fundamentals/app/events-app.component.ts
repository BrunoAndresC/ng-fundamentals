import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
    selector: 'events-app',
    template: `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    `
    //template: `
    //    <nav-bar></nav-bar>
    //    <events-list></events-list>
    //`
    //template: '<events-list></events-list>'
})
export class EventsAppComponent implements OnInit {

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.authService.checkAuthenticationStatus().subscribe();
    }
}