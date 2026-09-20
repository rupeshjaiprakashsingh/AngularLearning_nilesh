import { Component } from '@angular/core';
import { HomeConmponent } from './home-conmponent/home-conmponent';
import { Header } from './components/header/header';

@Component({
  imports: [HomeConmponent, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  template: `
    <app-header />
    <app-home-conmponent />
  `,
})
export class App {
}
