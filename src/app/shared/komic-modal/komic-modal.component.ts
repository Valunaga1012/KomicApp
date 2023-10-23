import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IMG_DEFAULT } from 'src/app/core/constants/img-default';
@Component({
  selector: 'komic-modal',
  templateUrl: './komic-modal.component.html',
  styleUrls: ['./komic-modal.component.scss'],
})
export class KomicModalComponent {
  modalRef!: BsModalRef;
  @Output() closeModal = new EventEmitter<void>();
  public imgDefault: string = IMG_DEFAULT;

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onCloseModal() {
    this.closeModal.emit();
  }
}
