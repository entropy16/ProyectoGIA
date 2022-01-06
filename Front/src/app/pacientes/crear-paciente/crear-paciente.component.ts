import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PacienteDTO } from '../../model/PacienteDTO';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {

  constructor(private pacienteService: PacienteService){ }

  ngOnInit(): void {
  }

  formPaciente = new FormGroup({
    cedulaPaciente: new FormControl('',Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    estado: new FormControl('',Validators.required),
    telefono: new FormControl('', Validators.required),
    direccion: new FormControl('',Validators.required),
    fechaNacimiento: new FormControl('',Validators.required),
    sexo: new FormControl('',Validators.required),
    eps: new FormControl('',Validators.required),
    estadoCivil: new FormControl('',Validators.required)
  })

  public crearPaciente() {
    let paciente ={
      cedulaPaciente: this.formPaciente.get("cedulaPaciente")?.value,
      nombre: this.formPaciente.get("nombre")?.value,
      apellido: this.formPaciente.get("apellido")?.value,
      estado: this.formPaciente.get("estado")?.value,
      telefono: this.formPaciente.get("telefono")?.value,
      direccion: this.formPaciente.get("direccion")?.value,
      fechaNacimiento: this.formPaciente.get("fechaNacimiento")?.value,
      sexo: this.formPaciente.get("sexo")?.value,
      eps: this.formPaciente.get("eps")?.value,
      estadoCivil: this.formPaciente.get("estadoCivil")?.value
    }
    this.pacienteService.enviarPaciente(paciente).subscribe(response => {
      alert("El paciente ha sido creado");
      console.log(response);
    })
  }

}
