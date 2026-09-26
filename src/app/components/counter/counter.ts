import { Component } from '@angular/core';
import { signal } from '@angular/core';
@Component({
  imports: [],
  selector: 'app-counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter {

  counter = signal(0);

  increment() {
    this.counter.update(value => value + 1);
  }

  decrement() {
    this.counter.update(value => value - 1);
  }

  reset() {
    this.counter.set(0);
  }
}
