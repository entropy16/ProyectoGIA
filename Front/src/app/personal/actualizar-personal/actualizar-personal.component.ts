import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-actualizar-personal',
  templateUrl: './actualizar-personal.component.html',
  styleUrls: ['./actualizar-personal.component.css']
})
export class ActualizarPersonalComponent implements OnInit {

  constructor(private personalService: PersonalService) { }

  ngOnInit(): void {
  }

  formPersonal = new FormGroup({
    cedulaPersonal: new FormControl('',Validators.required),
    tipo: new FormControl('',Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    departamento: new FormControl('',Validators.required),
    telefono: new FormControl('', Validators.required)
  })

  public actualizarPersonal() {
    let personal ={
      cedulaPersonal: this.formPersonal.get("cedulaPersonal")?.value,
      tipo: this.formPersonal.get("tipo")?.value,
      nombre: this.formPersonal.get("nombre")?.value,
      apellido: this.formPersonal.get("apellido")?.value,
      departamento: this.formPersonal.get("departamento")?.value,
      telefono: this.formPersonal.get("telefono")?.value
    }
    this.personalService.actualizarPersonal(personal).subscribe(response => {
      alert("El personal ha sido actualizado");
      console.log(response);
    })
  }

}
