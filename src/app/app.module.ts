import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlideshowModule } from 'ng-simple-slideshow';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CarouselComponent } from './components/firstPage/carousel/carousel.component';
import { NavbarComponent } from './components/firstPage/navbar/navbar.component';
import { AboutUsComponent } from './components/firstPage/about-us/about-us.component';
import { SearchrowComponent } from './components/firstPage/searchrow/searchrow.component';
import { FooterComponent } from './components/firstPage/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    AboutUsComponent,
    SearchrowComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SlideshowModule,
    FormsModule,
    NgbModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
