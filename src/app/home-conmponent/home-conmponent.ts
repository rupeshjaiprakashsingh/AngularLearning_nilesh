import { Component } from '@angular/core';
import { Greeting } from '../component/greeting/greeting';

@Component({
  imports: [Greeting],
  selector: 'app-home-conmponent',
  styleUrl: './home-conmponent.css',
  templateUrl: './home-conmponent.html',
})
export class HomeConmponent {}
