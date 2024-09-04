import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../../usuario.model';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html'
})
export class EditUserModalComponent {
  @Input() currentUser: Usuario = { usuID: 0, nombre: '', apellido: '' };

  constructor(public activeModal: NgbActiveModal) {}

  update(): void {
    this.activeModal.close('update');
  }

  close(): void {
    this.activeModal.dismiss('cancel');
  }
}
