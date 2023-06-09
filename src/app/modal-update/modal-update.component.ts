import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent {
  constructor(
    public modalRef: MdbModalRef<ModalUpdateComponent>,
    ) {}


  closeX(): void {  
    this.modalRef.close()
  }
  close(): void {
    const closeMessage = false
    this.modalRef.close(closeMessage)
  }
  delete(): void {
    const deleteMessage = true;
    this.modalRef.close(deleteMessage)
  }
}
