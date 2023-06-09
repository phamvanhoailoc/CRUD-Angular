import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private getPostsURL = 'http://localhost:3000/get-listpost';  
  private getPostURL = 'http://localhost:3000/get-post';  
  private addPostsURL = 'http://localhost:3000/post-createpost';  
  private deletePostsURL = 'http://localhost:3000/delete-deletepost';  
  private updatePostsURL = 'http://localhost:3000/put-updatepost';  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };//dùng để chuyển đổi dữ liệu về kiểu json
  constructor(
    private http: HttpClient,
    private location: Location
  ) { }
  
  goBack(): void {
    this.location.back();
  };
  getPosts() {
    return this.http.get<Post[]>(this.getPostsURL,this.httpOptions)
  };
  getPost(id : number) {
    const url = `${this.getPostURL}/${id}`;
    return this.http.get<Post>(url)
  };
  addPosts(data : Post) {
    return this.http.post<Post>(this.addPostsURL,data)
  };
  deletePost(id : number) {
    const url = `${this.deletePostsURL}/${id}`;
    return this.http.delete<Post>(url)
  };
  UpdatePost(data : Post) {
    return this.http.put<Post>(this.updatePostsURL,data)
  };
 
}
