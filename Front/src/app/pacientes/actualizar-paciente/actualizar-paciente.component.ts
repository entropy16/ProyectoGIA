import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PacienteDTO } from '../../model/PacienteDTO';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-actualizar-paciente',
  templateUrl: './actualizar-paciente.component.html',
  styleUrls: ['./actualizar-paciente.component.css']
})
export class ActualizarPacienteComponent implements OnInit {

  constructor(private pacienteService: PacienteService){ }

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
  });

  ngOnInit(): void {
  }

  public actualizarPaciente() {
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
    this.pacienteService.actualizarPaciente(paciente).subscribe(response => {
      alert("Paciente actualizado");
      console.log(response);
    })
  }

}
