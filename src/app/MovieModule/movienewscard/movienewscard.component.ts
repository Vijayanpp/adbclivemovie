import { Component, OnInit,Input } from '@angular/core';
import { SharedService} from '../../../Provider/sharedservice.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'adbcd-movienewscard',
  templateUrl: './movienewscard.component.html',
  styleUrls: ['./movienewscard.component.css']
})
export class MovienewscardComponent implements OnInit {

  

  @Input()
 movie:Object;

  constructor(private sharedService:SharedService,private router:Router) { }

  ngOnInit() {
  }
like(id)
{ 
    
   if(firebase.auth().currentUser!=null)
   {
    var uid = firebase.auth().currentUser.uid;
    var recentPostsRef = firebase.database().ref('posts/News/'+this.sharedService.sharedvalue.category+'/'+id);
    var recentPostsRef2= firebase.database().ref('posts/News/dev'+'/'+id);
    this.sharedService.LikethePost(recentPostsRef,uid);
    this.sharedService.LikethePost(recentPostsRef2,uid);
   }
   else
   {
     this.router.navigate(['Signin']);
   }
}

  
}
