import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet], // ✅ Keep only necessary modules
  template: `
    <p style="text-align: center; color: green;">✅ AppComponent template loaded</p>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor() {
    console.log('✅ AppComponent loaded');
  }
}
