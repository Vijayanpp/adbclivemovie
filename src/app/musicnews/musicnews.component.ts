import { Component, OnInit } from '@angular/core';
import {FetchdataService } from '../../Provider/fetchdata.service';
import { InfiniteScroll } from 'angular2-infinite-scroll';

@Component({
  selector: 'app-musicnews',
  templateUrl: './musicnews.component.html',
  styleUrls: ['./musicnews.component.css']
})
export class MusicnewsComponent implements OnInit {

  private mainnews=[];
  constructor(private fetchdata:FetchdataService ) { }

  ngOnInit() {
  	this.fetchNewsFromSource("https://newsapi.org/v1/articles?source=mtv-news&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e");
  }
  
  fetchNewsFromSource(url)
  {
  this.fetchdata._fetchNews(url).subscribe(news=>
   {
   this.mainnews=this.mainnews.concat(news.articles);
   	
    })
   }}
