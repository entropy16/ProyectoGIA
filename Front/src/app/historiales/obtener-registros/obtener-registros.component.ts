import { Component, OnInit } from '@angular/core';
import { RegistroDTO } from 'src/app/model/RegistroDTO';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-obtener-registros',
  templateUrl: './obtener-registros.component.html',
  styleUrls: ['./obtener-registros.component.css']
})
export class ObtenerRegistrosComponent implements OnInit {

  registros: RegistroDTO[] = []

  constructor(private historialService: HistorialService) { }

  ngOnInit(): void {
    this.historialService.obtenerRegistros().subscribe(
      response => this.registros = response
    );
    console.log(this.registros);
  }

  

}
