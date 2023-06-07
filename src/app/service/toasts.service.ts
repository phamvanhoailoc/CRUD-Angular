import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast } from '../model/toast';
@Injectable({
  providedIn: 'root'
})
export class ToastsService {

  constructor() { }
  private openSubject = new BehaviorSubject<any>("");
  open$ = this.openSubject.asObservable();

  setOpen(data: Toast): void {
    this.openSubject.next(data);
  }

}
