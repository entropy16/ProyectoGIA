import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { CrearPacienteComponent } from '../pacientes/crear-paciente/crear-paciente.component';

interface opcionBusqueda {
  name: string;
  mensaje: string;
  tipo: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public options: opcionBusqueda[] = [
    {name:"Paciente", mensaje:"Cedula paciente", tipo: "number"}, 
    {name:"Estado del paciente", mensaje:"Ingrese estado", tipo: "text"}, 
    {name:"Personal", mensaje:"Cedula del PdS", tipo: "number"}, 
    {name:"Tipo de PdS", mensaje:"Ingrese tipo", tipo: "text"}, 
    {name:"Historial paciente", mensaje:"Cedula paciente", tipo:"number"},
    {name:"Fecha registro", mensaje:"aaaa-mm-dd", tipo: "date"},
    {name:"Registros de Pds", mensaje:"Cedula del Pds", tipo: "number"}
  ];
  public selectedSearch: opcionBusqueda = {name:"", mensaje:"", tipo: ""};
  public selectedMenu: string = "";

  public busqueda: any;

  formBusqueda = new FormGroup({
    busqueda: new FormControl('',Validators.required)
  });

  items: MenuItem[] = [
    {
      label: "Paciente",
      items: [
        { label: "Crear", icon: PrimeIcons.PLUS, 
          command : (event) => {
            this.llamaCrearPaciente();
          }},
        { label: "Lista Pacientes", icon: PrimeIcons.TABLE,
          command: (event) => {
            this.llamaObtenerPacientes();
          }},
        { label: "Actualizar", icon: PrimeIcons.REFRESH,
          command: (event) => {
            this.llamaActualizarPaciente();
          }},
        { label: "Borrar", icon:  PrimeIcons.TRASH,
          command: (event) => {
            this.llamaBorrarPaciente();
          }}
      ]
    },
    {
      label: "Personal",
      items: [
        { label: "Crear", icon: PrimeIcons.PLUS, 
          command: (event) => {
            this.llamaCrearPersonal();
          }},
        { label: "Lista Personal", icon:  PrimeIcons.TABLE, 
        command: (event) => {
          this.llamaObtenerPersonal();
          }},
        { label: "Actualizar", icon: PrimeIcons.REFRESH,
          command: (event) => {
            this.llamaActualizarPersonal();
          }},
        { label: "Borrar", icon:  PrimeIcons.TRASH, 
        command: (event) => {
          this.llamaBorrarPersonal();
          }}
      ]
    },
    {
      label: "Historial",
      items: [
        { label: "Crear registro", icon: PrimeIcons.PLUS,
          command: (event) => {
            this.llamaCrearRegistro()
          }},
        { label: "Lista Registros", icon: PrimeIcons.TABLE,
        command: (event) => {
          this.llamaObtenerRegistros()
        }},
        { label: "Actualizar registro", icon: PrimeIcons.REFRESH,
        command: (event) => {
          this.llamaActualizarRegistro()
        }},
        { label: "Borrar registro", icon: PrimeIcons.TRASH,
        command: (event) => {
          this.llamaBorrarRegistro()
        }},
        { separator: true },
        { label: "Borrar historial", icon:  PrimeIcons.TRASH,
        command: (event) => {
          this.llamaBorrarHistorial()
        }},
      ]
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  consultar() {
    this.busqueda = this.formBusqueda.get("busqueda")?.value;
    switch(this.selectedSearch.name){
      case "Paciente": { 
        this.selectedMenu = "consultarPaciente"; 
        break; 
      }
      case "Estado del paciente": { 
        this.selectedMenu = "consultarEstado";  
        break; 
      } 
      case "Personal": { 
        this.selectedMenu = "consultarPersonal"; 
        break; 
      }
      case "Tipo de PdS": { 
        this.selectedMenu = "consultarTipo";  
        break; 
      }
      case "Historial paciente": { 
        this.selectedMenu = "consultarHistorialPaciente";  
        break; 
      }
      case "Fecha registro": { 
        this.selectedMenu = "consultarRegistrosFecha";  
        break; 
      }
      case "Registros de Pds": { 
        this.selectedMenu = "consultarRegsitrosPersonal";  
        break; 
      }
    }
  }

  llamaBorrarHistorial(){
    this.selectedMenu = "borrarHistorial";
  }

  llamaBorrarRegistro(){
    this.selectedMenu = "borrarRegistro";
  }

  llamaActualizarRegistro(){
    this.selectedMenu = "actualizarRegistro";
  }

  llamaObtenerRegistros(){
    this.selectedMenu = "obtenerRegistros";
  }

  llamaCrearRegistro(){
    this.selectedMenu = "crearRegistro";
  }

  llamaBorrarPersonal(){
    this.selectedMenu = "borrarPersonal";
  }

  llamaActualizarPersonal(){
    this.selectedMenu = "actualizarPersonal";
  }

  llamaObtenerPersonal(){
    this.selectedMenu = "obtenerPersonal";
  }

  llamaCrearPersonal(){
    this.selectedMenu = "crearPersonal";
  }

  llamaObtenerPacientes(){
    this.selectedMenu = "obtenerPacientes";
  }

  llamaCrearPaciente(){
    this.selectedMenu = "crearPaciente";
  }

  llamaActualizarPaciente(){
    this.selectedMenu = "actualizarPaciente";
  }

  llamaBorrarPaciente(){
    this.selectedMenu = "borrarPaciente";
  }
}