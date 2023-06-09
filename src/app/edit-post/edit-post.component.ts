import { Component } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { Post } from '../model/post';
import { ActivatedRoute } from '@angular/router';
import { ToastsService } from '../service/toasts.service';
import { Toast } from '../model/toast';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalUpdateComponent } from '../modal-update/modal-update.component';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ModalsService } from '../service/modals.service';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  post? : Post 
  onchage = false;
  modalRef: MdbModalRef<ModalUpdateComponent> | null = null;
  constructor(
    private PostsService: PostsService,
    private route: ActivatedRoute,
    private toastService: ToastsService,
    private modalService: MdbModalService,
    private modalsService : ModalsService
    ){}
  ngOnInit(): void {
    this.getPost();
  }
 
  goBack(): void {
    if(this.onchage === true ){
      this.openModal();
    }else{
      this.PostsService.goBack();
    }
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
    if(this.onchage && this.post){
      this.PostsService.UpdatePost(this.post).subscribe(
        response=>{
          this.PostsService.goBack();
            
            this.toastService.setOpen(data);
        },
        error=>{
          console.log('cập nhật dữ liệu thất bại!', error);
          window.alert("cập nhật dữ liệu thất bại!")
        }
      )
    }else{
      this.PostsService.goBack();
    }
  }
 
  onInputtitleChange():void{
   this.onchage = true
  }
  onInputbodyChange():void{
    this.onchage = true
   }
  
  openModal() {
    this.modalRef = this.modalService.open(ModalUpdateComponent);
    this.modalRef.onClose.subscribe((message: any) => {   
    if(message === true){
      this.updatePost()
    }else if(message === false){
      this.PostsService.goBack();
    }
    });
  }
}
