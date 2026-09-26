import { Component } from '@angular/core';
import { HomeComponent } from './home-component/home-component';
import { Header } from './components/header/header';

@Component({
  imports: [HomeComponent, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  template: `
    <app-header />
    <app-home-component />
  `,
})
export class App {
}
