"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var user_routes_1 = require("./user.routes");
var profile_component_1 = require("./profile.component");
core_1.NgModule({
    imports: [
        common_1.CommonModule,
        router_1.RouterModule.forChild(user_routes_1.userRoutes)
    ],
    declarations: [
        profile_component_1.ProfileComponent
    ],
    providers: []
});
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    return UserModule;
}());
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map