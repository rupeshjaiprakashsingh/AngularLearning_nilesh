import { Component } from '@angular/core';
import { Greeting } from '../component/greeting/greeting';
import { Counter } from '../components/counter/counter';

@Component({
  imports: [Greeting, Counter],
  selector: 'app-home-component',
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent {
  KeyUpHandler(event: KeyboardEvent) {
    const inputElemnt = event.target as HTMLInputElement;
    console.log('user typed:', inputElemnt.value);
  }
}
