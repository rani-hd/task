import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  isEditable: boolean = false;
  isAddblog: boolean = false;
  content: string = '';
  blogdata: string = '';
  cardData:any = []
  constructor() {}

  ngOnInit(): void {
    //API Call
    const storedData = localStorage.getItem('data');
    if(storedData){
      this.cardData = JSON.parse(storedData);
    }
  }

  editCard(content_id:number) {
    const arr = []
    for(let data of this.cardData){
      if(data.content_id === content_id){
        data.isEditable = true;
      }
      arr.push(data)
    }
    this.cardData = arr
  }

  saveCard(content_id:number) {
    const arr = []
    for(let data of this.cardData){
      if(data.content_id === content_id){
        data.isEditable = false;
      }
      arr.push(data)
    }
    this.cardData = arr
    //API Call
    localStorage.setItem('data',JSON.stringify(this.cardData))

  }

  addBlog() {
    this.isAddblog = true;
  }

  saveBlog(){
    let length = this.cardData.length;
    
    this.cardData.push({
      content:this.blogdata,
      isEditable:false,
      content_id:(length+1)
    })
    //API Call
    localStorage.setItem('data',JSON.stringify(this.cardData))
    this.isAddblog = false;
    this.blogdata=""
  }
}
