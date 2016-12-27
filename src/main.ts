import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
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
(<any>window).plotter.start = () => {
  for (let key in exportedModules) {
    (<any>window).plotter.define(key, [], () => {
      let fn = exportedModules[key];
      return fn;
    });
  }
}

platformBrowserDynamic().bootstrapModule(AppModule);
