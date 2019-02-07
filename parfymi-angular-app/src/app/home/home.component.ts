import { Component, ViewChild, ElementRef,  } from '@angular/core';

import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('hero')
  private heroExp: ElementRef;

  @ViewChild(CarouselComponent)
  private carouselExp: ElementRef;

  toggleAnimation(): void {
    this.heroExp.nativeElement.classList.toggle('hero-expanded');

    let x = document.getElementsByClassName("carousel");
    x[0].classList.toggle('carousel-expanded');
  }
}