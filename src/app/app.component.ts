import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DOP';

  pageName: string;

  constructor(private location: Location) {}
  ngOnInit(): void {
    this.updateSelectedPage();
  }

  setCurrentPageName(name: string): void {
    this.pageName = name;
  }

  private updateSelectedPage() {
    const href = this.location.path(false);
    if (href.includes('issues')) {
      this.pageName = 'issues';
    } else if (href.includes('unprocessed')) {
      this.pageName = 'unprocessed';
    }
  }
}
