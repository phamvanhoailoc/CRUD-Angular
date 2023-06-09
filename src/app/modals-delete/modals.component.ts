import { Component, Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ModalsService } from '../service/modals.service';


@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent {
  title? : string;
  constructor(
    public modalRef: MdbModalRef<ModalsComponent>,
    private modalsService : ModalsService) {}
  
  ngOnInit() {
    this.getTitle();
  }
  getTitle():void{
    this.modalsService.open$.subscribe(title => this.title = title);
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
