import { Component, OnInit } from '@angular/core';
import { SharedService} from '../../../Provider/sharedservice.service';
import { ActivatedRoute,Router } from '@angular/router';
import * as Firebase from 'firebase';
declare var window:any;

@Component({
  selector: 'app-movienews',
  templateUrl: './movienews.component.html',
  styleUrls: ['./movienews.component.css']
})
export class MovienewsComponent implements OnInit {

 public signin:boolean;
public movienews=[];
  constructor(private sharedService:SharedService,private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	 
   this.StartDatabaseQueries(this.sharedService.sharedvalue.category);
  	
  }
  ngDoCheck()
  {
  	this.signin=this.sharedService.sharedvalue.signin;
  	console.log(this.signin);
  }

 
checkAuthState()
  {
     var self=this;
    firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
 
    self.StartDatabaseQueries(this.sharedService.sharedvalue.category);

  } else {   
   

  }
});
  }

 


  StartDatabaseQueries(category) {
  // [START my_top_posts_query]
  // var myUserId = firebase.auth().currentUser.uid;
  var self=this;
  this.sharedService.sharedvalue.category=category;
  self.movienews=[];
  
  var recentPostsRef = firebase.database().ref('posts/News/dev').limitToLast(100);
 var fetchPosts = function(postsRef) {
 postsRef.on('child_added', function(data) {

 var obj=data.val();
 obj.id=data.key; 
 self.movienews.push(obj);
     
    });
    postsRef.on('child_changed', function(data) {	
  var object=data.val();
  object.id=data.key;
   
  var array= self.movienews.filter((obj,index)=>
  {
      if(obj.id==data.key)
        {
          
          if(obj.starCount!=object.starCount)
          {
          self.movienews[index].starCount=object.starCount;
          self.movienews[index].stars=object.stars;
          }
          if(obj.rating!=object.rating)
          {
          self.movienews[index].rating=object.rating;          
          }


        }
  })

		
    });
    postsRef.on('child_removed', function(data) {
    	
    });
  };

  // Fetching and displaying all posts of each sections.
  // fetchPosts(topUserPostsRef);
  fetchPosts(recentPostsRef);
  // fetchPosts(userPostsRef);

  // Keep track of all Firebase refs we are listening to.
  // this.listeningFirebaseRefs.push(topUserPostsRef);
  // this.listeningFirebaseRefs.push(recentPostsRef);
  // this.listeningFirebaseRefs.push(userPostsRef);
}

setCurrentCategory(category:string)
{
  this.sharedService.sharedvalue.category=category;
  console.log(category);
}
adbcd(category:string)
{
this.StartDatabaseQueries(category);

}

ngAfterViewInit() {
    window.componentHandler.upgradeAllRegistered();
}

}
