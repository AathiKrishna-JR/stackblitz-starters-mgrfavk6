import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports : [HeaderComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
