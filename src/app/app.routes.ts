import { Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
import { SportscomponentComponent } from './sportscomponent/sportscomponent.component';
import { BusinesscomponentComponent } from './businesscomponent/businesscomponent.component';
import { SciencecomponentComponent } from './sciencecomponent/sciencecomponent.component';
import { TechnologynewsComponent } from './technologynews/technologynews.component';
import { MusicnewsComponent } from './musicnews/musicnews.component';

/*TMDB*/

import { MoviesComponent } from './TMDB/movies/movies.component';
import { MovieComponent } from './TMDB/movie/movie.component';
import { GenresComponent } from './TMDB/genres/genres.component';
import { UpcomingComponent } from './TMDB/upcoming/upcoming.component';
import { PopularSeriesComponent } from './TMDB/popular-series/popular-series.component';
import { SerieComponent } from './TMDB/serie/serie.component';
import { ActorComponent } from './TMDB/actor/actor.component';
import { PopularmoviesComponent } from './TMDB/popularmovies/popularmovies.component';
import { LoginComponent } from './login/login.component';

// import { HomepageComponent } from './homepage/homepage.component';
// import { LoginComponent } from './login/login.component';
// import { AddpostsampleComponent } from './addpostsample/addpostsample.component';
// import { InnerpageComponent } from './innerpage/innerpage.component';
// import { NowrunningComponent } from './nowrunning/nowrunning.component';
// import { ReviewsComponent } from './reviews/reviews.component';
// import { TrailersComponent } from './trailers/trailers.component';
// import { MusicvideosComponent } from './musicvideos/musicvideos.component';
// import { OffersComponent } from './offers/offers.component';
// import { AboutusComponent } from './aboutus/aboutus.component';
// import { ContactusComponent } from './contactus/contactus.component';
// import { MusicvideoinnerComponent } from './musicvideoinner/musicvideoinner.component';
// import { NewspageComponent } from './newspage/newspage.component';

export const appRoutes: Routes = [
        {path:'',component:NewsComponent},
        {path:'general',component:NewsComponent},
        {path:'Entertainment',component:EntertainmentnewsComponent},
        {path:'Sports',component:SportscomponentComponent},
        {path:'Business',component:BusinesscomponentComponent},
        {path:'Science',component:SciencecomponentComponent},
        {path:'Technology',component:TechnologynewsComponent},
        {path:'Music',component:MusicnewsComponent},
        {path:'Toprated',component:MoviesComponent},
        {path:'Popular',component:PopularmoviesComponent},
        {path:'Signin',component:LoginComponent},
        {path: 'Movie/:id', component: MovieComponent}

     // {path:'',component:HomepageComponent},
     // {path:'login',component:LoginComponent},
     // {path:'addmoviedata',component:AddpostsampleComponent},
     // {path:'detail/:id',component:InnerpageComponent},
     // {path:'musicvideos/detail/:id',component:MusicvideoinnerComponent},
     // {path:'runningintheater',component:NowrunningComponent},
     // {path:'reviews',component:ReviewsComponent },
     // {path:'trailers',component:TrailersComponent },
     // {path:'musicvideos',component:MusicvideosComponent },
     // {path:'offers',component:OffersComponent},
     // {path:'aboutus',component:AboutusComponent},
     // {path:'contactus',component:ContactusComponent},
     //  {path:'contactus',component:LoginComponent},
     //  {path:'news',component:NewspageComponent}
    
];