import { Component, OnInit,Input } from '@angular/core';
import { SharedService} from '../../../Provider/sharedservice.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'adbcd-moviecard',
  templateUrl: './adbcd-moviecard.component.html',
  styleUrls: ['./adbcd-moviecard.component.css']
})
export class AdbcdMoviecardComponent implements OnInit {
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
    var recentPostsRef = firebase.database().ref('posts/Music/'+this.sharedService.sharedvalue.category+'/'+id);
    this.sharedService.LikethePost(recentPostsRef,uid);  
   }
   else
   {
     this.router.navigate(['Signin']);
   }
}
}
