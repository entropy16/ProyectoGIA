import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-borrar-paciente',
  templateUrl: './borrar-paciente.component.html',
  styleUrls: ['./borrar-paciente.component.css']
})
export class BorrarPacienteComponent implements OnInit {

  constructor(private pacienteService: PacienteService) { };

  public cedulaPaciente: number = 0;

  ngOnInit(): void {
  };

  public cambiarCedula(event: Event){
    this.cedulaPaciente = Number((<HTMLInputElement>event.target).value);
  }

  public borrarPaciente() {
    this.pacienteService.borrarPaciente(this.cedulaPaciente).subscribe(response => {
      alert("Paciente con cédula " + response.cedulaPaciente + " eliminado");
      console.log(response);
    });
  }

}

