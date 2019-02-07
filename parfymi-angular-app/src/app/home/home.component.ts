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

  toggleAnimation(): void {
    this.heroExp.nativeElement.classList.toggle('hero-expanded');

    // I make it this way with carouselExp because I don't have access to the carousel class and i can't put "#" like with the hero class
    let carouselExp = document.getElementsByClassName("carousel");
    carouselExp[0].classList.toggle('carousel-expanded');
  }
}