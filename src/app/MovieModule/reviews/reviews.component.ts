import { Component, OnInit } from '@angular/core';
import { SharedService} from '../../../Provider/sharedservice.service';
import { ActivatedRoute,Router } from '@angular/router';
import * as Firebase from 'firebase';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  public signin:boolean;
public musicvideos=[];
  constructor(private sharedService:SharedService,private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	  //   firebase.database().ref('users/administrator').set({
  //   username:'adbcd',
  //   email:'adbcdstaff@gmail.com'    
  // });
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
  self.musicvideos=[];
  
  var recentPostsRef = firebase.database().ref('posts/Music/'+category).limitToLast(100);
 var fetchPosts = function(postsRef) {
 postsRef.on('child_added', function(data) {

 var obj=data.val();
 obj.id=data.key; 
 self.musicvideos.push(obj);
     
    });
    postsRef.on('child_changed', function(data) {	
  var object=data.val();
  object.id=data.key;
   
  var array= self.musicvideos.filter((obj,index)=>
  {
      if(obj.id==data.key)
        {
          self.musicvideos.splice(index,1,object);
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
}
