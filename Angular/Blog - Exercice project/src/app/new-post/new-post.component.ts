import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPostsService } from '../services/blog-posts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit{

  postForm: FormGroup;

  constructor(private blogPostsService: BlogPostsService, private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onSubmit(){
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const newPost = new Post(title,content);

    this.blogPostsService.createPost(newPost);
    this.router.navigate(['/posts']);
  }
}
