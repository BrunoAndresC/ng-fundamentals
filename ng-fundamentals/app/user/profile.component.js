"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("./auth.service");
var router_1 = require("@angular/router");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        //let firstName = new FormControl(this.authService.currentUser.firstName, Validators.required);
        //let lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
        //this.profileForm = new FormGroup({
        //    firstName: firstName,
        //    lastName: lastName
        //});
        //this.firstName = new FormControl(this.authService.currentUser.firstName, Validators.required);
        this.firstName = new forms_1.FormControl(this.authService.currentUser.firstName, [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new forms_1.FormControl(this.authService.currentUser.lastName, forms_1.Validators.required);
        this.profileForm = new forms_1.FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    };
    ProfileComponent.prototype.cancel = function () {
        this.router.navigate(['events']);
    };
    ProfileComponent.prototype.saveProfile = function (formValues) {
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
            this.router.navigate(['events']);
        }
    };
    ProfileComponent.prototype.validateFirstName = function () {
        //profileForm.controls.firstName.invalid && profileForm.controls.firstName.touched;
        return this.firstName.valid || this.firstName.untouched;
    };
    ProfileComponent.prototype.validateLastName = function () {
        //profileForm.controls.lastName.invalid && profileForm.controls.lastName.touched;
        return this.lastName.valid || this.lastName.untouched;
    };
    ProfileComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/user/profile.component.html',
            styles: ["\n        em { float: right; color: #E05C65; padding-left: 10px; }\n        .error input { background-color: #E3C3C5; }\n        .error ::-webkit-input-placeholder { color: #999; }\n    "]
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
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map