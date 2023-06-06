import { Component } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  constructor (private PostsService: PostsService) {};
  posts : Post[] = [];
  ngOnInit() : void{
    this.getPosts();
  }
  getPosts() : void{
    this.PostsService.getPosts()
      .subscribe(posts => {this.posts = posts});   
  };
  deletePost(id: any):void{
    this.posts = this.posts.filter(h => h.id !== id);
    this.PostsService.deletePosts(id).subscribe(
      response => {
        // Xử lý kết quả trả về từ API
        window.alert("Xóa thành công")
      }
    );
  }
}
