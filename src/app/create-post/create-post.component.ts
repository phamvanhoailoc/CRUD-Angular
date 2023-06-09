import { Component } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { Router } from '@angular/router';
import { Post } from '../model/post';
import { FormBuilder } from '@angular/forms';
import { ToastsService } from '../service/toasts.service';
import { Toast } from '../model/toast';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
constructor(
  private PostsService: PostsService,
  private formBuilder: FormBuilder,
  private toastService: ToastsService,
  private router: Router){}
  // posts : Post[] = [];
  addpostForm = this.formBuilder.group({
    title :  "",
    body :  ""
  });
  addpost(){
    const data : Post= {
      title: this.addpostForm.get('title')?.value?.trim() ?? '',
      body: this.addpostForm.get('body')?.value?.trim() ?? ''
    };
    const typeValue = true;
    const messageValue = "Tạo mới thành công"
    const dataToast : Toast= {
      type: typeValue,
      message: messageValue
    };
    if(!data.title || !data.body){
      window.alert("vui lòng nhập đầy đủ!")
    }else{
      this.PostsService.addPosts(data).subscribe( 
        response => {
          // Xử lý kết quả trả về từ API
          console.log('Đăng nhập thành công!', response);
          this.PostsService.goBack();
          this.toastService.setOpen(dataToast);
        },
        error => {
          console.log('thêm dữ liệu thất bại!', error);
          window.alert("thêm dữ liệu thất bại!")
        }
      );
  }
  }

  goBack(): void {
    this.PostsService.goBack();
  };
}
