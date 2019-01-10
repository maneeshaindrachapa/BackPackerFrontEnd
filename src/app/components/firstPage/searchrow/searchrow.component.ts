import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Router } from "@angular/router";

@Component({
  selector: 'app-searchrow',
  templateUrl: './searchrow.component.html',
  styleUrls: ['./searchrow.component.css'],
  animations: [
    trigger('animateFilterItems', [
      state('small', style({ height: '0px', display: 'hidden !important', opacity: '0' })),
      state('large', style({ height: '100%', display: 'inline-block !important', opacity: '1' })),
      transition('small<=>large', animate('1s cubic-bezier(0.25,0.1,0.25,1)')
      )])
  ]
})
export class SearchrowComponent implements OnInit {
  focus: any;
  filterItems = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
    /*here goes the search logic*/
  }
  toggleFilter() {
    this.filterItems = !this.filterItems;
  }
  secondPage() {
    this.router.navigate(["details"]);
  }

}
