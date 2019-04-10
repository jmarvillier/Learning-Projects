import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {

  posts: Post[] = [
    { title: 'Create a new angular project', content: 'To create a new angular project, launch the following command: ng new MyProjectName', loveIts: 0, created_at: new Date("2019-04-09:10:10") },
    { title: 'Create a new component', content: 'To create a new angular component, launch the following command: ng generate component MyComponentName', loveIts: 2, created_at: new Date("2019-04-08:11:11") },
    { title: 'Create a service', content: 'To create a new service, launch the following command: ng generate service MyServiceName', loveIts: -2, created_at: new Date("2019-04-07:12:12") }
  ];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
    this.posts.sort((p1, p2) => {
      if (p1.created_at > p2.created_at) {
        return -1;
      } else if (p1.created_at < p2.created_at) {
        return 1;
      }
    });
    this.postsSubject.next(this.posts);
  }

  createPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  removePost(post: Post) {
    const postToRemove = this.posts.findIndex(
      (postSearch) => {
        if (postSearch == post) {
          return true;
        }
      }
    );
    this.posts.splice(postToRemove, 1);
    this.emitPosts();
  }

  updatePostLoveIts(post: Post) {
    const postToUpdate = this.posts.findIndex(
      (postSearch) => {
        if (postSearch == post) {
          return true;
        }
      }
    );
    this.posts[postToUpdate].loveIts = post.loveIts;
    this.emitPosts();
  }
}
