import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService} from '../../../Provider/sharedservice.service'
import * as Firebase from 'firebase';
declare var FB;
declare var window:any;

@Component({
  selector: 'app-reviewinnerpage',
  templateUrl: './reviewinnerpage.component.html',
  styleUrls: ['./reviewinnerpage.component.css']
})
export class ReviewinnerpageComponent implements OnInit {

   public moviereview
  public videourl;
  public starsid;
  public share:boolean=false;
  public rate:boolean=false;

  constructor(private router: ActivatedRoute, private sanitizer: DomSanitizer,private sharedService:SharedService,private routernav:Router) { 


  }

  ngOnInit() {
    this.sharedService.sharedvalue.category="Hollywood";
  	this.router.params.subscribe((params) => {
     
      const id = params['id'];
      console.log(id)
      var self=this;
      var adbcd_music=firebase.database().ref('posts/Review/dev/').child(id);
    adbcd_music.on("value", function(snapshot) {
    self.moviereview=snapshot.val();
    self.moviereview.id=snapshot.key;
    self.moviereview.views++;  
    
     }, function (errorObject) {
   console.log("The read failed: " + errorObject.code);
   });})

  }
 

  like(id)
{ 
    
   if(firebase.auth().currentUser!=null)
   {
    var uid = firebase.auth().currentUser.uid;
    var recentPostsRef = firebase.database().ref('posts/Review/dev/'+id);
    this.sharedService.LikethePost(recentPostsRef,uid);  
   }
   else
   {
     this.routernav.navigate(['login']);
   }
}
shareThisPost()
{
  this.share=true;
}
rateThisPost()
{

  this.rate=true;
}

addFavourite(movienews,id)
  {
   
    if(firebase.auth().currentUser!=null)
   {
    
     var newPostKey = firebase.database().ref().child('posts').push().key;
     var updates = {};
     var recentPostsRef = firebase.database().ref('posts/Review/dev/'+id);   
     var uid = firebase.auth().currentUser.uid;
     
     firebase.database().ref().update(updates);     
     updates['/Favourites/moviereview/' +uid+'/'+newPostKey]=movienews; 
     firebase.database().ref().update(updates);   
     this.sharedService.favourite(uid,recentPostsRef); 
   }
   else
   {
     this.routernav.navigate(['Signin']);
   }
  }


Rate(count,currentRating,newRating,id)
{
   if(firebase.auth().currentUser!=null)
   { 
  var uid = firebase.auth().currentUser.uid;
  var recentPostsRef = firebase.database().ref('posts/Review/dev/'+id);
   var recentPostsRef2 = firebase.database().ref('posts/Review/'+this.sharedService.sharedvalue.category+'/'+id);
  this.sharedService.RatethePost(recentPostsRef,count,currentRating,newRating,uid);
  }
   else
   {
     this.routernav.navigate(['Signin']);
   }
}
closeShare()
{
  this.share=false;
}
closeRate()
{
  this.rate=false;
}
shareOnFB()
  {
    console.log('sharex');
      FB.ui({
   app_id:'568461570013753',
    method: 'share',
    
    display: 'popup',
    href: 'http://www.adbcd.com',
  }, function(response){
    console.log(response.error_message)
  });
}

 ngAfterViewInit() {
    window.componentHandler.upgradeAllRegistered();
}


shareFb()
{
    FB.ui({
   app_id:'568461570013753',
    method: 'share',
    
    display: 'popup',
    href: 'http://www.adbcd.com',
  }, function(response){
    console.log(response.error_message)
  });

}
  
  shareGplus()
{
 
  var currentURL=window.location.href;  
  var windowOpenSettings = "height=550,width=525,left=100,top=100,menubar=0";
  return window.open("https://plus.google.com/share?url=" + currentURL, "", windowOpenSettings), !1
}


  shareTwitter(currentTitle)
{
  var currentURL=window.location.href;
  var windowOpenSettings = "height=550,width=525,left=100,top=100,menubar=0";
  return window.open("https://twitter.com/share?url=" + currentURL + "&text=" + currentTitle, "", windowOpenSettings), !1
}

 shareLinkedin(currentTitle)
{
  var currentURL=window.location.href;
  var windowOpenSettings = "height=550,width=525,left=100,top=100,menubar=0";
  return window.open("http://www.linkedin.com/shareArticle?mini=true&url=" + currentURL + "&title=" + currentTitle + "&source=", "", windowOpenSettings), !1
}

sharePin(currentTitle)
{
  var currentURL=window.location.href;
  var windowOpenSettings = "height=550,width=525,left=100,top=100,menubar=0";
  return window.open("https://twitter.com/share?url=" + currentURL + "&text=" + currentTitle, "", windowOpenSettings), !1
}

ngOnDestroy()
{
  this.moviereview=[];
}



}
