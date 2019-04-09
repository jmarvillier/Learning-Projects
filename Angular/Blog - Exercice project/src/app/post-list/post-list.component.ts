import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BlogPostsService } from '../services/blog-posts.service';
import { Post } from '../models/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit, OnDestroy {
 
  posts: Post[];
  postsSubscription: Subscription;
 
  constructor(private blogPostsService:BlogPostsService){}

  ngOnInit() {
    this.postsSubscription = this.blogPostsService.postsSubject.subscribe(
        (posts:Post[])=>{
          this.posts = posts;          
        }
    );
    this.blogPostsService.emitPosts();
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }
}
