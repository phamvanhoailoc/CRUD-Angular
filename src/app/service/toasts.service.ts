import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast } from '../model/toast';
@Injectable({
  providedIn: 'root'
})
export class ToastsService {
  private openSubject = new BehaviorSubject<any>("");
  open$ = this.openSubject.asObservable();
  constructor() { }
  setOpen(data: Toast): void {
    this.openSubject.next(data);
  }

}
