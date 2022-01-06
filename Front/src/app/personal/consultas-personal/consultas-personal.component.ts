import { Component, Input, OnInit } from '@angular/core';
import { PersonalDTO } from 'src/app/model/PersonalDTO';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-consultas-personal',
  templateUrl: './consultas-personal.component.html',
  styleUrls: ['./consultas-personal.component.css']
})
export class ConsultasPersonalComponent implements OnInit {

  @Input() 
  cedulaPersonal: number = 0;

  public personal: PersonalDTO = new PersonalDTO();
  
  constructor(private personalService: PersonalService) { }

  ngOnInit(): void {
    if(this.cedulaPersonal != 0) {
      this.personalService.consultarPersonal(this.cedulaPersonal).subscribe(response =>
          this.personal = response
        );
    }
  }

}
