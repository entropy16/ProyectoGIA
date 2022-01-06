import { Component, OnInit } from '@angular/core';
import { PersonalDTO } from 'src/app/model/PersonalDTO';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-obtener-personal',
  templateUrl: './obtener-personal.component.html',
  styleUrls: ['./obtener-personal.component.css']
})
export class ObtenerPersonalComponent implements OnInit {

  personal: PersonalDTO[] = [];

  constructor(private personalService: PersonalService) { }

  ngOnInit(): void {
    this.personalService.obtenerPersonal().subscribe(
      response => this.personal = response
    );
    console.log(this.personal);
  }

}
