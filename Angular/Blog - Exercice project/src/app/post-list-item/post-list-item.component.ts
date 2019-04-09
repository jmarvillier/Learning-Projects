import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';
import { BlogPostsService } from '../services/blog-posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  constructor(private blogPostsService:BlogPostsService) {}
  
  @Input() post:Post;

  ngOnInit() {
  }

  onLoveItClick(){
      this.post.loveIts +=1;
      this.blogPostsService.updatePostLoveIts(this.post);      
      console.log(this.post);
  }

  onDontLoveItClick(){
    this.post.loveIts -=1;
    this.blogPostsService.updatePostLoveIts(this.post);
    console.log(this.post);
  }

  onDelete(){
    this.blogPostsService.removePost(this.post);
  }
}
