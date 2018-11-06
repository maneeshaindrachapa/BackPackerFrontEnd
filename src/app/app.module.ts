import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlideshowModule } from 'ng-simple-slideshow';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import {AgmJsMarkerClustererModule} from '@agm/js-marker-clusterer';

import { AppComponent } from './app.component';
import { CarouselComponent } from './components/firstPage/carousel/carousel.component';
import { NavbarComponent } from './components/firstPage/navbar/navbar.component';
import { AboutUsComponent } from './components/firstPage/about-us/about-us.component';
import { SearchrowComponent } from './components/firstPage/searchrow/searchrow.component';
import { FooterComponent } from './components/firstPage/footer/footer.component';
import { FirstPageFullComponent } from './components/firstPage/first-page-full/first-page-full.component';
import { SecondPageFullComponent } from './components/secondPage/second-page-full/second-page-full.component';
import { TravelDetailsComponent } from './components/secondPage/travel-details/travel-details.component';

const appRoutes: Routes = [
  {path: '' , component: FirstPageFullComponent}, { path: 'details', component: SecondPageFullComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    AboutUsComponent,
    SearchrowComponent,
    FooterComponent,
    FirstPageFullComponent,
    SecondPageFullComponent,
    TravelDetailsComponent
  ],
  imports: [
    BrowserModule,
    SlideshowModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC0RZ_xD_RuW80wjaZt6XFx94Fq1-D5lws'
    }),
    AgmJsMarkerClustererModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
