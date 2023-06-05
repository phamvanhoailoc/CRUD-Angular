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
  private getPostsURL = 'http://localhost:3000/listpost';  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };//dùng để chuyển đổi dữ liệu về kiểu json
 
  getPosts() :Observable<Post[]>{
    return this.http.get<Post[]>(this.getPostsURL,this.httpOptions)
    
  };
}
