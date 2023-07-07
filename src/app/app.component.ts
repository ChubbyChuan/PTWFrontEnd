import { Component } from '@angular/core';
import { COMPANIES } from './ModelandConstants/constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PTWfrontend';

  constructor(private router: Router) {}

  getTitle(): string {
    const currentRoute = this.router.url;
    switch (currentRoute) {
      case '/create':
        return 'Permit';
      case '/approval':
        return 'Approval';
      // Add more cases for other routes if needed
      default:
        return '';
    }
  }
}
