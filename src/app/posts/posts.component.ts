import { Component, Output } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { Post } from '../model/post';
import { ToastsService } from '../service/toasts.service';
import { Toast } from '../model/toast';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  constructor (private PostsService: PostsService, private toastService: ToastsService) {};
  posts : Post[] = [];

  ngOnInit() : void{
    this.getPosts();
  }
  getPosts() : void{
    this.PostsService.getPosts()
      .subscribe(posts => {this.posts = posts});   
  };
  deletePost(id: any):void{
    const typeValue = true;
    const messageValue = "Xóa thành công"
    const dataToast : Toast= {
      type: typeValue,
      message: messageValue
    };
    this.posts = this.posts.filter(h => h.id !== id);
    this.PostsService.deletePost(id).subscribe(
      response => {
        // Xử lý kết quả trả về từ API
         this.toastService.setOpen(dataToast);
      }
    );
  }
}
