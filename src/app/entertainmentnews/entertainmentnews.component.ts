import { Component, OnInit } from '@angular/core';
import {FetchdataService } from '../../Provider/fetchdata.service';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import {AdbcdConfig} from '../../Global/variables';
declare var window:any;

@Component({
  selector: 'app-entertainmentnews',
  templateUrl: './entertainmentnews.component.html',
  styleUrls: ['./entertainmentnews.component.css']
})
export class EntertainmentnewsComponent implements OnInit {

 private mainnews=[];
 private subscription
  constructor(private fetchdata:FetchdataService ) { }

  ngOnInit() {

  	this.fetchNewsFromSource("entertainment-weekly");
  }
  
  fetchNewsFromSource(source)
  {
  /*Generated the URL*/
  let url=AdbcdConfig.API_URL+source+"&sortBy=top&apiKey="+AdbcdConfig.API_KEY;
  this.subscription=this.fetchdata._fetchNews(url).subscribe(news=>
   {

   this.mainnews=[];
   this.mainnews=this.mainnews.concat(news.articles);   	
    })
   }

   ngAfterViewInit() {
    window.componentHandler.upgradeAllRegistered();
}
ngOnDestroy()
{
  this.mainnews=[];
  this.subscription.unsbscribe();
}

}
