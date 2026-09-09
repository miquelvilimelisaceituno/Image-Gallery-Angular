import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Image } from '../interfaces/image-interface';

@Component({
  imports: [],
  selector: 'app-image-item',
  styleUrl: './image-item.css',
  templateUrl: './image-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageItem {
  image = input.required<Image>();
  isFeatured = input(false);
}
