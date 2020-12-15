import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DOP';

  pageName: string;

  setCurrentPageName(name: string): void {
    this.pageName = name;
  }
}
