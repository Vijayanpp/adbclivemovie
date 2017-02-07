import { Component, OnInit } from '@angular/core';
import {FetchdataService } from '../../Provider/fetchdata.service';
import { InfiniteScroll } from 'angular2-infinite-scroll';
@Component({
  selector: 'app-businesscomponent',
  templateUrl: './businesscomponent.component.html',
  styleUrls: ['./businesscomponent.component.css']
})
export class BusinesscomponentComponent implements OnInit {

  private mainnews=[];
  constructor(private fetchdata:FetchdataService ) { }

  ngOnInit() {
  	this.fetchNewsFromSource("https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e");
  }
  
  fetchNewsFromSource(url)
  {
  this.fetchdata._fetchNews(url).subscribe(news=>
   {
   this.mainnews=this.mainnews.concat(news.articles);
   	
    })
   }

 onScrollDown () {
    console.log('scrolled!!+dfkdf');
   this.fetchNewsFromSource("https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e"); 
    // add another 20 items
   
  }


}
