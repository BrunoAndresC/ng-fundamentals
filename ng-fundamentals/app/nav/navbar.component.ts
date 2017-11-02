import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html'
})
export class NavBarComponent {

    constructor(private authService: AuthService) {

    }

}