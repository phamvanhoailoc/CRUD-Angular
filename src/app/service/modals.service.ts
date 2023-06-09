import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  constructor() { }
  private openSubject = new BehaviorSubject<any>("");
  open$ = this.openSubject.asObservable();

  setOpen(data: any): void {
    this.openSubject.next(data);
  }
}
