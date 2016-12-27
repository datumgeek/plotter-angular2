import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [ require('bootstrap/dist/css/bootstrap.css'),
    `
      .heading {
          background-color: cadetblue;
          margin: 0;
          padding: 0;
      }

      .body {
          background-color: orange;
      }
    `
  ]
})
export class AppComponent {
  title = 'app works!';
}
