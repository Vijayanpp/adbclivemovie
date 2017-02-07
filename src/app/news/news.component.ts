import { Component, OnInit } from '@angular/core';
import {FetchdataService } from '../../Provider/fetchdata.service';
import { InfiniteScroll } from 'angular2-infinite-scroll';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
	private mainnews;
  constructor(private fetchdata:FetchdataService ) { }

  ngOnInit() {
  	this.fetchNewsFromSource("https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e");
  }
  
  fetchNewsFromSource(url)
  {
  this.fetchdata._fetchNews(url).subscribe(news=>
   {
   	this.mainnews=news.articles;
    })
   }

 onScrollDown () {
    console.log('scrolled!!');

    // add another 20 items
   
  }



}
