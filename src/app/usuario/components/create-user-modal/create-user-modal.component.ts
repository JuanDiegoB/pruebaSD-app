import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../../usuario.model';

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.component.html'
})
export class CreateUserModalComponent {
  @Input() newUser: Usuario = { usuID: 0, nombre: '', apellido: '' };

  constructor(public activeModal: NgbActiveModal) {}

  save(): void {
    this.activeModal.close('save');
  }

  close(): void {
    this.activeModal.dismiss('cancel');
  }
}
