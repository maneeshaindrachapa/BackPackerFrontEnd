import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
 

  imageSources=["../../../../assets/img/1.jpg",
  "../../../../assets/img/2.jpg",
  "../../../../assets/img/3.jpg",
  "../../../../assets/img/4.jpg",
  "../../../../assets/img/5.jpg"];
  
  constructor() { }

  ngOnInit() {
  }
  
}
