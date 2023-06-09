import { Component } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { Subscription } from 'rxjs';
import { ToastsService } from '../service/toasts.service';
import { Toast } from '../model/toast';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})

export class ToastComponent {
  showT = false;
  message = "";
  openSubscription : any;
  constructor( 
    private toastService: ToastsService,
    ){}
  ngOnInit() {
    this.getMessage();
  }
  getMessage(): void{
    this.openSubscription = this.toastService.open$.subscribe((value: Toast) => {
      if (value.type === true) {
        this.oPen();
        this.message = value.message;
      }
    });
  }
  oPen():void{
    this.showT = true;
    setTimeout(() => {
      this.showT = false;
    }, 3000);
  }
  cLose():void{
    this.showT = false;
  }
}
