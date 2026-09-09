import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Gallery } from './gallery/gallery';

@Component({
  imports: [RouterOutlet, Gallery],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('it-sprint4-images-gallery');
}
