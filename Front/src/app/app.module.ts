import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearPacienteComponent } from './pacientes/crear-paciente/crear-paciente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MenuComponent } from './menu/menu.component';
import { DropdownModule } from 'primeng/dropdown';
import { ActualizarPacienteComponent } from './pacientes/actualizar-paciente/actualizar-paciente.component';
import { BorrarPacienteComponent } from './pacientes/borrar-paciente/borrar-paciente.component';
import { TableModule } from 'primeng/table';
import { ObtenerPacientesComponent } from './pacientes/obtener-pacientes/obtener-pacientes.component';
import { CrearPersonalComponent } from './personal/crear-personal/crear-personal.component';
import { ObtenerPersonalComponent } from './personal/obtener-personal/obtener-personal.component';
import { ActualizarPersonalComponent } from './personal/actualizar-personal/actualizar-personal.component';
import { BorrarPersonalComponent } from './personal/borrar-personal/borrar-personal.component';
import { ConsultasPersonalComponent } from './personal/consultas-personal/consultas-personal.component';
import { CrearRegistroComponent } from './historiales/crear-registro/crear-registro.component';
import { ObtenerRegistrosComponent } from './historiales/obtener-registros/obtener-registros.component';
import { BorrarRegistroComponent } from './historiales/borrar-registro/borrar-registro.component';
import { ConsultasRegistroComponent } from './historiales/consultas-registro/consultas-registro.component';
import { ActualizarRegistroComponent } from './historiales/actualizar-registro/actualizar-registro.component';
import { BorrarHistorialComponent } from './historiales/borrar-historial/borrar-historial.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearPacienteComponent,
    MenuComponent,
    ActualizarPacienteComponent,
    BorrarPacienteComponent,
    ObtenerPacientesComponent,
    CrearPersonalComponent,
    ObtenerPersonalComponent,
    ActualizarPersonalComponent,
    BorrarPersonalComponent,
    ConsultasPersonalComponent,
    CrearRegistroComponent,
    ObtenerRegistrosComponent,
    BorrarRegistroComponent,
    ConsultasRegistroComponent,
    ActualizarRegistroComponent,
    BorrarHistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    FormsModule,
    MenubarModule,
    BrowserModule,
    TableModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
