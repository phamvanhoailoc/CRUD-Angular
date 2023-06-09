import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './toast-edit/toast.component';
import { ModalsComponent } from './modals-delete/modals.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { ModalUpdateComponent } from './modal-update/modal-update.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CreatePostComponent,
    EditPostComponent,
    ViewPostComponent,
    ToastComponent,
    ModalsComponent,
    ModalUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MdbModalModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
