import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  constructor(private location: Location){}
  goBack(): void {
    this.location.back();
  };
}
