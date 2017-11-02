﻿import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/user/profile.component.html'
    //template: `
    //    <h1>Edit your profile</h1>
    //    <hr>
    //    <div class="col-md-6">
    //        <h3>[Edit Profile will go here]</h3>
    //        <br/>
    //        <br/>
    //        <button type="submit" class="btn btn-primary">Save</button>
    //        <button type="button" class="btn btn-default">Cancel</button>
    //    </div>       
    //`
})
export class ProfileComponent implements OnInit {

    profileForm: FormGroup;

    constructor(private authService: AuthService,
                private router: Router) {

    }

    ngOnInit() {
        let firstName = new FormControl(this.authService.currentUser.firstName);
        let lastName = new FormControl(this.authService.currentUser.lastName);
        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        });
    }

    cancel() {
        this.router.navigate(['events']);
    }

    saveProfile(formValues) {
        this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
        this.router.navigate(['events']);
    }
}