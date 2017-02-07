import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'adbcd-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.css']
})
export class NewscardComponent implements OnInit {
	@Input()
	news;

  constructor() { }

  ngOnInit() {
  }

}
