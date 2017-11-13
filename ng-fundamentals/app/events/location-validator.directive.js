"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LocationValidatorDirective = LocationValidatorDirective_1 = (function () {
    function LocationValidatorDirective() {
    }
    LocationValidatorDirective.prototype.validate = function (formGroup) {
        var addressControl = formGroup.controls['address'];
        var cityControl = formGroup.controls['city'];
        var countryControl = formGroup.controls['country'];
        var onlineUrlControl = formGroup.root.controls['onlineUrl'];
        if ((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value)
            || (onlineUrlControl && onlineUrlControl.value)) {
            return null; // Validation passed.
        }
        else {
            return { validateLocation: false }; // Validation not passed.
        }
    };
    return LocationValidatorDirective;
}());
LocationValidatorDirective = LocationValidatorDirective_1 = __decorate([
    core_1.Directive({
        selector: '[validateLocation]',
        providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: LocationValidatorDirective_1, multi: true }]
    })
], LocationValidatorDirective);
exports.LocationValidatorDirective = LocationValidatorDirective;
var LocationValidatorDirective_1;
//# sourceMappingURL=location-validator.directive.js.map