import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/user/profile.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
        .error input { background-color: #E3C3C5; }
        .error ::-webkit-input-placeholder { color: #999; }
    `]
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
    firstName: FormControl;
    lastName: FormControl;

    constructor(private authService: AuthService,
                private router: Router) {

    }

    ngOnInit() {
        //let firstName = new FormControl(this.authService.currentUser.firstName, Validators.required);
        //let lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
        //this.profileForm = new FormGroup({
        //    firstName: firstName,
        //    lastName: lastName
        //});

        //this.firstName = new FormControl(this.authService.currentUser.firstName, Validators.required);
        this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }

    cancel() {
        this.router.navigate(['events']);
    }

    saveProfile(formValues) {
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
            this.router.navigate(['events']);
        }
    }

    validateFirstName() {
        //profileForm.controls.firstName.invalid && profileForm.controls.firstName.touched;
        return this.firstName.valid || this.firstName.untouched;
    }

    validateLastName() {
        //profileForm.controls.lastName.invalid && profileForm.controls.lastName.touched;
        return this.lastName.valid || this.lastName.untouched;
    }
}