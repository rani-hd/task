import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  isEditable: boolean = false;
  /*
  [{
    textData:"",
    isEditable:false
  },{
    textData:"",
    isEditable:false
  },{
    textData:"",
    isEditable:false
  }]
  
  */
  textData:string =""
  constructor() {}

  ngOnInit(): void {}

  editCard() {
    this.isEditable = true;
  }

  saveCard() {
    this.isEditable = false;
  }
}
