import { Component, OnInit } from '@angular/core';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-borrar-registro',
  templateUrl: './borrar-registro.component.html',
  styleUrls: ['./borrar-registro.component.css']
})
export class BorrarRegistroComponent implements OnInit {

  constructor(private historialService: HistorialService) { };

  public codRegistro: number = 0;

  ngOnInit(): void {
  };

  public cambiarCod(event: Event){
    this.codRegistro = Number((<HTMLInputElement>event.target).value);
  }

  public borrarRegistro() {
    this.historialService.borrarRegistro(this.codRegistro).subscribe(response => {
      alert("Registro con codigo " + response + " eliminado");
      console.log(response);
    });
  }

}
