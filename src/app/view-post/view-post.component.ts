import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { PostsService } from '../service/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/post';
@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent {
  post? : Post
  constructor(
    private location: Location,
    private PostsService: PostsService,
    private route: ActivatedRoute
    ){}
  ngOnInit() {
    this.getPost();
  }
  goBack(): void {
    this.location.back();
  };
  getPost():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.PostsService.getPost(id).subscribe(post => {this.post = post})
  }
}
