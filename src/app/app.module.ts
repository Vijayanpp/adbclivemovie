import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/*Routing*/
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';

import {TmdbModule} from './TMDB';

/*Services*/

import {FetchdataService } from '../Provider/fetchdata.service'
import { MasonryModule } from 'angular2-masonry';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
/*Component*/
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewscardComponent } from './newscard/newscard.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
import { SportscomponentComponent } from './sportscomponent/sportscomponent.component';
import { BusinesscomponentComponent } from './businesscomponent/businesscomponent.component';
import { SciencecomponentComponent } from './sciencecomponent/sciencecomponent.component';
import { TechnologynewsComponent } from './technologynews/technologynews.component';
import { MusicnewsComponent } from './musicnews/musicnews.component';
import { PopularmoviesComponent } from './TMDB/popularmovies/popularmovies.component';



@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewscardComponent,
    EntertainmentnewsComponent,
    SportscomponentComponent,
    BusinesscomponentComponent,
    SciencecomponentComponent,
    TechnologynewsComponent,
    MusicnewsComponent,
    PopularmoviesComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MasonryModule,
    RouterModule.forRoot(appRoutes),
    InfiniteScrollModule,
    TmdbModule
  ],
  providers: [FetchdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
