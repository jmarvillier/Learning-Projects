import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';
import { Posts } from '../data/MOCK_POSTS';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  constructor() {}
  
  @Input() post:Post;

  ngOnInit() {
  }

  onLoveItClick(){
      this.post.loveIts +=1;
      console.log(this.post);
  }

  onDontLoveItClick(){
    this.post.loveIts -=1;
    console.log(this.post);
  }
}
