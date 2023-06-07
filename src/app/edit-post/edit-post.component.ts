import { Component } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { Post } from '../model/post';
import { ActivatedRoute } from '@angular/router';
import { ToastsService } from '../service/toasts.service';
import { Toast } from '../model/toast';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  post? : Post 

  constructor(
    private PostsService: PostsService,
    private route: ActivatedRoute,
    private toastService: ToastsService
    ){}
  ngOnInit(): void {
    this.getPost();
  }
 
  goBack(): void {
    this.PostsService.goBack();
  };
  getPost():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.PostsService.getPost(id).subscribe(post => {this.post = post})
  }
  updatePost(): void {
    const typeValue = true;
    const messageValue = "Cập nhật thành công"
    const data : Toast= {
      type: typeValue,
      message: messageValue
    };
    if(this.post){
      this.PostsService.UpdatePost(this.post).subscribe(
        response=>{
            this.goBack()
            
            this.toastService.setOpen(data);
        },
        error=>{
          console.log('cập nhật dữ liệu thất bại!', error);
          window.alert("cập nhật dữ liệu thất bại!")
        }
      )
    }
  }


}
