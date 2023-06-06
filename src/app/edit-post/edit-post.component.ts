import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { PostsService } from '../service/posts.service';
import { Post } from '../model/post';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  post? : Post 


  constructor(
    private location: Location,
    private PostsService: PostsService,
    private route: ActivatedRoute
    ){}
  ngOnInit(): void {
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
