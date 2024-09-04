import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from '../../usuario.service';
import { Usuario } from '../../usuario.model';
import { CreateUserModalComponent } from '../create-user-modal/create-user-modal.component';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html'
})
export class UsuarioListComponent {
  usuarios: Usuario[] = [];
  filteredUsuarios: Usuario[] = [];
  newUser: Usuario = { usuID: 0, nombre: '', apellido: '' };
  currentUser: Usuario = { usuID: 0, nombre: '', apellido: '' };
  searchNombre: string = '';
  searchApellido: string = '';

  constructor(private usuarioService: UsuarioService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadUsuarios();
  }

  loadUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data.filter(usuario =>
        usuario.nombre.toLowerCase().includes(this.searchNombre.toLowerCase()) &&
        usuario.apellido.toLowerCase().includes(this.searchApellido.toLowerCase())
      );;
    });
  }

  applyFilters(): Usuario[] {
    return this.usuarios.filter(usuario =>
      usuario.nombre.toLowerCase().includes(this.searchNombre.toLowerCase()) &&
      usuario.apellido.toLowerCase().includes(this.searchApellido.toLowerCase())
    );
  }

  searchUsers(): void {
    this.loadUsuarios();
  }

  openCreateModal(): void {
    this.newUser = { usuID: 0, nombre: '', apellido: '' };
    const modalRef = this.modalService.open(CreateUserModalComponent);
    modalRef.componentInstance.newUser = this.newUser;
    modalRef.result.then((result) => {
      if (result === 'save') {
        this.usuarioService.addUsuario(this.newUser).subscribe(() => {
          this.loadUsuarios();
        });
      }
    });
  }

  openEditModal(usuario: Usuario): void {
    this.currentUser = { ...usuario };
    const modalRef = this.modalService.open(EditUserModalComponent);
    modalRef.componentInstance.currentUser = this.currentUser;
    modalRef.result.then((result) => {
      if (result === 'update') {
        this.usuarioService.updateUsuario(this.currentUser.usuID, this.currentUser).subscribe(() => {
          this.loadUsuarios();
        });
      }
    });
  }

  deleteUsuario(id: number): void {
    this.usuarioService.deleteUsuario(id).subscribe(() => {
      this.usuarios = this.usuarios.filter(u => u.usuID !== id);
    });
  }
}
