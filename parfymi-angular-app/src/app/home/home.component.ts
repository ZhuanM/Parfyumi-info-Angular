import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  slideIndex: number = 1;

  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }

  currentDiv(n) {
    this.showDivs(this.slideIndex = n);
  }

  showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " w3-white";
  }


  @ViewChild('hero')
  private her: ElementRef;

  @ViewChild('w3content')
  private w3exp: ElementRef;

  toggleAnimation(): void {
    this.her.nativeElement.classList.toggle('hero-expanded');

    this.w3exp.nativeElement.classList.toggle('w3-content-expanded');
  }

  ngAfterViewInit() {
    this.showDivs(this.slideIndex);
  }
}