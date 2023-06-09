import { Component, Output } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { Post } from '../model/post';
import { ToastsService } from '../service/toasts.service';
import { Toast } from '../model/toast';
import { ModalsComponent } from '../modals-delete/modals.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalsService } from '../service/modals.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts : Post[] = [];
  modalRef: MdbModalRef<ModalsComponent> | null = null;
  constructor (
    private PostsService: PostsService, 
    private toastService: ToastsService,
    private modalService: MdbModalService,
    private modalsService : ModalsService
    ) {}
  
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
  openModal(post: Post) {
    this.modalsService.setOpen(post.title);
    this.modalRef = this.modalService.open(ModalsComponent);
    this.modalRef.onClose.subscribe((message: any) => {
      if(message === true){
        this.deletePost(post.id)
      }
    });
  }
}
