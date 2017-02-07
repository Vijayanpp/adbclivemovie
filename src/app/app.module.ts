import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/*Routing*/
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';

/*Services*/

import {FetchdataService } from '../Provider/fetchdata.service'
import { MasonryModule } from 'angular2-masonry';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
/*Component*/
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewscardComponent } from './newscard/newscard.component';



@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewscardComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MasonryModule,
    RouterModule.forRoot(appRoutes),
    InfiniteScrollModule
  ],
  providers: [FetchdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
