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
import { SharedService} from '../Provider/sharedservice.service'
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
import { LoginComponent } from './login/login.component';
import { MusicvideosComponent } from './MovieModule/musicvideos/musicvideos.component';
import { AdbcdMoviecardComponent } from './MovieModule/adbcd-moviecard/adbcd-moviecard.component';
import { ReviewsComponent } from './MovieModule/reviews/reviews.component';
import { TrailersComponent } from './MovieModule/trailers/trailers.component';
import { MovienewsComponent } from './MovieModule/movienews/movienews.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';



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
    PopularmoviesComponent,
    LoginComponent,
    MusicvideosComponent,
    AdbcdMoviecardComponent,
    ReviewsComponent,
    TrailersComponent,
    MovienewsComponent,
    AboutComponent,
    ContactComponent,
    PrivacypolicyComponent,
    TermsandconditionsComponent    
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
  providers: [FetchdataService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
