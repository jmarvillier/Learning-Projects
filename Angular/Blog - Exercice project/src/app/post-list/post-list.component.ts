import { Component, OnInit, Input } from '@angular/core';
import { Posts } from '../data/MOCK_POSTS';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
  posts = Posts;
  
  constructor() {
    
  }

  ngOnInit() {
  }
}
