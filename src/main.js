define(["require", "exports", "@angular/platform-browser-dynamic", "@angular/core", "./environments/environment", "./app/app.module", "./polyfills.ts"], function (require, exports, platform_browser_dynamic_1, core_1, environment_1, app_module_1) {
    "use strict";
    if (environment_1.environment.production) {
        core_1.enableProdMode();
    }
    // define the exported modules from this application
    var exportedModules = {
        "@angular/common": require('@angular/common'),
        //"@angular/compiler": require('@angular/compiler'),
        "@angular/core": require('@angular/core'),
        "@angular/forms": require('@angular/forms'),
        "@angular/platform-browser": require('@angular/platform-browser'),
        "@angular/platform-browser-dynamic": require('@angular/platform-browser-dynamic'),
        "@angular/http": require('@angular/http'),
        "@angular/router": require('@angular/router'),
        "plotter-shell-angular2": require('./plotter-shell-angular2'),
        "rxjs/Rx": require('rxjs/Rx'),
        "rxjs/Observable": require('rxjs/Observable')
    };
    // externally "define" (in the requirejs / dojo sense) the modules that are exported
    window.plotter.start = function () {
        var _loop_1 = function (key) {
            window.plotter.define(key, [], function () {
                var fn = exportedModules[key];
                return fn;
            });
        };
        for (var key in exportedModules) {
            _loop_1(key);
        }
    };
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
});
//# sourceMappingURL=main.js.map