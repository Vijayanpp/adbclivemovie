import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService} from '../../../Provider/sharedservice.service'
import * as Firebase from 'firebase';
declare var FB;
declare var window:any;

@Component({
  selector: 'app-trailerinnerpage',
  templateUrl: './trailerinnerpage.component.html',
  styleUrls: ['./trailerinnerpage.component.css']
})
export class TrailerinnerpageComponent implements OnInit {

  public movietrailer
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
      var adbcd_music=firebase.database().ref('posts/Trailer/dev/').child(id);
    adbcd_music.on("value", function(snapshot) {
    self.movietrailer=snapshot.val();
    self.movietrailer.id=snapshot.key;
    self.movietrailer.views++;  
    
     }, function (errorObject) {
   console.log("The read failed: " + errorObject.code);
   });})

  }
 

  like(id)
{ 
    
   if(firebase.auth().currentUser!=null)
   {
    var uid = firebase.auth().currentUser.uid;
    var recentPostsRef = firebase.database().ref('posts/Trailer/dev/'+id);
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
Rate(count,currentRating,newRating,id)
{
    
  var uid = firebase.auth().currentUser.uid;
  var recentPostsRef = firebase.database().ref('posts/Trailer/dev/'+id);
   var recentPostsRef2 = firebase.database().ref('posts/Trailer/'+this.sharedService.sharedvalue.category+'/'+id);
  this.sharedService.RatethePost(recentPostsRef,count,currentRating,newRating,uid); 
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


shareFb(url)
{
 
  var windowOpenSettings = "height=550,width=525,left=100,top=100,menubar=0";
  return window.open("https://www.facebook.com/sharer.php?u=" + url, "", windowOpenSettings), !1
}
  
  shareGplus(currentURL)
{
  
  var windowOpenSettings = "height=550,width=525,left=100,top=100,menubar=0";
  return window.open("https://plus.google.com/share?url=" + currentURL, "", windowOpenSettings), !1
}


  shareTwitter(currentURL,currentTitle)
{
  
  var windowOpenSettings = "height=550,width=525,left=100,top=100,menubar=0";
  return window.open("https://twitter.com/share?url=" + currentURL + "&text=" + currentTitle, "", windowOpenSettings), !1
}

 shareLinkedin(currentURL,currentTitle)
{
  
  var windowOpenSettings = "height=550,width=525,left=100,top=100,menubar=0";
return window.open("http://www.linkedin.com/shareArticle?mini=true&url=" + currentURL + "&title=" + currentTitle + "&source=", "", windowOpenSettings), !1
}

sharePin(currentURL,currentTitle)
{
  
  var windowOpenSettings = "height=550,width=525,left=100,top=100,menubar=0";
  return window.open("https://twitter.com/share?url=" + currentURL + "&text=" + currentTitle, "", windowOpenSettings), !1
}


}
