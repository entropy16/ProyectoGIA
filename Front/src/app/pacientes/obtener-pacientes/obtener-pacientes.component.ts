import { Component, OnInit } from '@angular/core';
import { PacienteDTO } from '../../model/PacienteDTO';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-obtener-pacientes',
  templateUrl: './obtener-pacientes.component.html',
  styleUrls: ['./obtener-pacientes.component.css']
})
export class ObtenerPacientesComponent implements OnInit {

  pacientes: PacienteDTO[] = [];

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.pacienteService.obtenerPacientes().subscribe(
      response => this.pacientes = response
    );
    console.log(this.pacientes);
  }

}
