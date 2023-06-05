import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent {
  constructor(private location: Location){}
  goBack(): void {
    this.location.back();
  };
}
