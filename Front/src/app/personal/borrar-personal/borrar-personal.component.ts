import { Component, OnInit } from '@angular/core';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-borrar-personal',
  templateUrl: './borrar-personal.component.html',
  styleUrls: ['./borrar-personal.component.css']
})
export class BorrarPersonalComponent implements OnInit {

  cedulaPersonal: number = 0;

  constructor(private personalService: PersonalService) { }

  ngOnInit(): void {
  }

  public cambiarCedula(event: Event){
    this.cedulaPersonal = Number((<HTMLInputElement>event.target).value);
  }

  public borrarPersonal() {
    this.personalService.borrarPersonal(this.cedulaPersonal).subscribe(response => {
      alert("Personal con cédula " + response + " eliminado");
      console.log(response);
    });
  }

}
