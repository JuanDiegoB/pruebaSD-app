import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UsuarioListComponent } from './usuario/components/usuario-list/usuario-list.component';
import { CreateUserModalComponent } from './usuario/components/create-user-modal/create-user-modal.component';
import { EditUserModalComponent } from './usuario/components/edit-user-modal/edit-user-modal.component';
//import { Cre }

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListComponent,
    CreateUserModalComponent,
    EditUserModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
