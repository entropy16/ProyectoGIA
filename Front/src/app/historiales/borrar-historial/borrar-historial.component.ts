import { Component, OnInit } from '@angular/core';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-borrar-historial',
  templateUrl: './borrar-historial.component.html',
  styleUrls: ['./borrar-historial.component.css']
})
export class BorrarHistorialComponent implements OnInit {

  public cedulaPaciente: number = 0;

  constructor(private historialService: HistorialService) { }

  ngOnInit(): void {
  }

  public cambiarCedula(event: Event) {
    this.cedulaPaciente = Number((<HTMLInputElement>event.target).value);
  }

  public borrarHistorial() {
    this.historialService.borrarHistorial(this.cedulaPaciente).subscribe(response =>
        alert("Historial del paciente con cédula " + response + " eliminado")
      );
  }

}
