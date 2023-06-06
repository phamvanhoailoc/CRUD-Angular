import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/listpost', pathMatch: 'full' },
  { path: 'listpost', component: PostsComponent },
  { path: 'createpost', component: CreatePostComponent },
  { path: 'editpost/:id', component: EditPostComponent },
  { path: 'viewpost/:id', component: ViewPostComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
