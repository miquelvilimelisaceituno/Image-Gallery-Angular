import { Component } from '@angular/core';
import { Image } from '../interfaces/image-interface';
import { ImageItem } from '../image-item/image-item';

@Component({
  imports: [ImageItem],
  selector: 'app-gallery',
  styleUrl: './gallery.css',
  templateUrl: './gallery.html',
  
})
export class Gallery {
  images: Image[] = [
  { id: '1', src: 'https://picsum.photos/id/237/400/300', alt: 'Perro negro tumbado' },
  { id: '2', src: 'https://picsum.photos/id/238/400/300', alt: 'Ciudad en blanco y negro' },
  { id: '3', src: 'https://picsum.photos/id/239/400/300', alt: 'Diente de león' },
  { id: '4', src: 'https://picsum.photos/id/240/400/300', alt: 'Escaleras que van al mar' },
];
}
