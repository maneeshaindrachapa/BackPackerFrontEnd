import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchrow',
  templateUrl: './searchrow.component.html',
  styleUrls: ['./searchrow.component.css']
})
export class SearchrowComponent implements OnInit {
  focus: any;
  constructor() { }

  ngOnInit() {
  }

  search(){
    /*here goes the search logic*/
  }

}
