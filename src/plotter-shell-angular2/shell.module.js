var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/common", "@angular/core", "@angular/forms", "@angular/http", "@angular/router", "./shell/shell.component", "./hostChooser/hostChooser.component", "./sessionChooser/sessionChooser.component", "./newSession/newSession.component", "./compose/compose.component", "./shellToolbar/shellToolbar.component", "./leftRightSplitter/leftRightSplitter.component", "./upDownSplitter/upDownSplitter.component", "./layouts/tabLayout/tabLayout.component", "./layouts/pageLayout/pageLayout.component"], function (require, exports, common_1, core_1, forms_1, http_1, router_1, shell_component_1, hostChooser_component_1, sessionChooser_component_1, newSession_component_1, compose_component_1, shellToolbar_component_1, leftRightSplitter_component_1, upDownSplitter_component_1, tabLayout_component_1, pageLayout_component_1) {
    "use strict";
    var routes = [
        { path: '', component: hostChooser_component_1.HostChooserComponent },
        { path: 'sessions', component: sessionChooser_component_1.SessionChooserComponent },
        { path: 'new-session', component: newSession_component_1.NewSessionComponent },
        { path: 'shell', component: shell_component_1.ShellComponent }
    ];
    var ShellModule = (function () {
        function ShellModule() {
        }
        return ShellModule;
    }());
    ShellModule = __decorate([
        core_1.NgModule({
            declarations: [
                shell_component_1.ShellComponent,
                compose_component_1.ComposeComponent,
                hostChooser_component_1.HostChooserComponent,
                sessionChooser_component_1.SessionChooserComponent,
                newSession_component_1.NewSessionComponent,
                shellToolbar_component_1.ShellToolbarComponent,
                leftRightSplitter_component_1.LeftRightSplitterComponent,
                upDownSplitter_component_1.UpDownSplitterComponent,
                tabLayout_component_1.TabLayoutComponent,
                pageLayout_component_1.PageLayoutComponent
            ],
            imports: [
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [],
            exports: [
                shell_component_1.ShellComponent,
                compose_component_1.ComposeComponent,
                hostChooser_component_1.HostChooserComponent,
                sessionChooser_component_1.SessionChooserComponent,
                newSession_component_1.NewSessionComponent,
                shellToolbar_component_1.ShellToolbarComponent,
                leftRightSplitter_component_1.LeftRightSplitterComponent,
                upDownSplitter_component_1.UpDownSplitterComponent,
                tabLayout_component_1.TabLayoutComponent,
                pageLayout_component_1.PageLayoutComponent
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ShellModule);
    exports.ShellModule = ShellModule;
});
//# sourceMappingURL=shell.module.js.map