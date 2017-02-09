import { Component, OnInit } from '@angular/core';
import {FetchdataService } from '../../Provider/fetchdata.service';
import { InfiniteScroll } from 'angular2-infinite-scroll';
@Component({
  selector: 'app-sciencecomponent',
  templateUrl: './sciencecomponent.component.html',
  styleUrls: ['./sciencecomponent.component.css']
})
export class SciencecomponentComponent implements OnInit {

  private mainnews=[];
  constructor(private fetchdata:FetchdataService ) { }

  ngOnInit() {
  	this.fetchNewsFromSource("https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e");
  }
  
  fetchNewsFromSource(url)
  {
  this.fetchdata._fetchNews(url).subscribe(news=>
   {
   this.mainnews=this.mainnews.concat(news.articles);
   	
    })
   }
}
