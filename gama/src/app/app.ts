import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Gama } from './components/gama/gama';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Gama],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('gama');
}
