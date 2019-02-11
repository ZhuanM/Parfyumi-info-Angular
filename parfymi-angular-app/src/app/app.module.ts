import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {PaginatorModule} from 'primeng/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { FragListComponent } from './frag-list/frag-list.component';
import { FragranceComponent } from './fragrance/fragrance.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FragranceModalComponent } from './fragrance-modal/fragrance-modal.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FaqComponent,
    FragListComponent,
    FragranceComponent,
    NotFoundComponent,
    FragranceModalComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    PaginatorModule
  ],
  entryComponents: [FragranceModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
