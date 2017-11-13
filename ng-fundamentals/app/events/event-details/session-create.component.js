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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var index_1 = require("../shared/index");
var SessionCreateComponent = (function () {
    function SessionCreateComponent() {
        this.saveNewSession = new core_1.EventEmitter();
        this.cancelAddSession = new core_1.EventEmitter();
    }
    SessionCreateComponent.prototype.ngOnInit = function () {
        this.name = new forms_1.FormControl('', forms_1.Validators.required);
        this.presenter = new forms_1.FormControl('', forms_1.Validators.required);
        this.duration = new forms_1.FormControl('', forms_1.Validators.required);
        this.level = new forms_1.FormControl('', forms_1.Validators.required);
        //this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords]);
        //this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo', 'bar'])]);
        this.abstract = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(400), index_1.restrictedWords(['foo', 'bar'])]);
        this.newSessionForm = new forms_1.FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    };
    //private restrictedWords(control: FormControl): { [key: string]: any } {
    //    return control.value.includes('foo') ? {'restrictedWords': 'foo'} : null;
    //}
    //private restrictedWords(words) {
    //    return (control: FormControl): { [key: string]: any } => {
    //        if (!words) return null;
    //        var invalidWords = words
    //            .map(w => control.value.includes(w) ? w : null)
    //            .filter(w => w != null);
    //        return invalidWords && invalidWords.length > 0
    //            ? { 'restrictedWords': invalidWords.join(', ') }
    //            : null;
    //    }
    //}
    SessionCreateComponent.prototype.saveSession = function (formValue) {
        console.log(formValue);
        var session = {
            id: undefined,
            name: formValue.name,
            presenter: formValue.presenter,
            duration: +formValue.duration,
            level: formValue.level,
            abstract: formValue.abstract,
            voters: []
        };
        console.log(session);
        this.saveNewSession.emit(session);
    };
    SessionCreateComponent.prototype.cancel = function () {
        this.cancelAddSession.emit();
    };
    return SessionCreateComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SessionCreateComponent.prototype, "saveNewSession", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SessionCreateComponent.prototype, "cancelAddSession", void 0);
SessionCreateComponent = __decorate([
    core_1.Component({
        selector: 'session-create',
        templateUrl: 'app/events/event-details/session-create.component.html',
        styles: ["\n        em { float: right; color: #E05C65; padding-left: 10px; }\n        .error input, .error select, .error textarea { background-color: #E3C3C5; }\n        .error ::-webkit-input-placeholder { color: #999; }\n    "]
    })
], SessionCreateComponent);
exports.SessionCreateComponent = SessionCreateComponent;
//# sourceMappingURL=session-create.component.js.map