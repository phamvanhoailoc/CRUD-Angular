import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
constructor(private location: Location){}
goBack(): void {
  this.location.back();
};
}
