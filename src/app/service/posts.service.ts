import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }
  private getPostsURL = 'http://localhost:3000/get-listpost';  
  private getPostURL = 'http://localhost:3000/get-post';  
  private addPostsURL = 'http://localhost:3000/post-createpost';  
  private deletePostsURL = 'http://localhost:3000/delete-deletepost';  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };//dùng để chuyển đổi dữ liệu về kiểu json
 
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
  deletePosts(id : number) {
    const url = `${this.deletePostsURL}/${id}`;
    return this.http.delete<Post>(url)
  };
 
}
