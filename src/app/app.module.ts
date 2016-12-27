import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { APP_BASE_HREF, Location } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShellModule } from '../plotter-shell-angular2';
import { ShellProvidersModule } from '../plotter-shell-angular2';
import { SessionService } from './session.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ShellModule,
    ShellProvidersModule,
    BrowserModule
  ],
  providers: [
    SessionService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
