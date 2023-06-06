import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { PostsService } from '../service/posts.service';
import { Router } from '@angular/router';
import { Post } from '../model/post';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
constructor(
  private location: Location, 
  private PostsService: PostsService,
  private formBuilder: FormBuilder,
  private router: Router){}
  // posts : Post[] = [];
  addpostForm = this.formBuilder.group({
    title :  "",
    body :  ""
  });
addpost(){
  const titleValue = this.addpostForm.get('title')?.value ?? '';
  const bodyValue = this.addpostForm.get('body')?.value ?? '';
  const data : Post= {
    title: titleValue,
    body: bodyValue
  };
if(!data.title || !data.body){
  window.alert("vui lòng nhập đầy đủ!")
}else{
  this.PostsService.addPosts(data).subscribe( 
    response => {
      // Xử lý kết quả trả về từ API
      console.log('Đăng nhập thành công!', response);
      this.router.navigate(['/listpost']); // Chuyển hướng đến trang chủ
    },
    error => {
      console.log('thêm dữ liệu thất bại!', error);
      window.alert("thêm dữ liệu thất bại!")
    }
    );
}
}

goBack(): void {
  this.location.back();
};
}
