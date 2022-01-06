import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-actualizar-registro',
  templateUrl: './actualizar-registro.component.html',
  styleUrls: ['./actualizar-registro.component.css']
})
export class ActualizarRegistroComponent implements OnInit {

  constructor(private historialService: HistorialService){ }

  ngOnInit(): void {
  }

  formRegistro = new FormGroup({
    codRegistro: new FormControl('',Validators.required),
    fechaRegistro: new FormControl('', Validators.required),
    cedulaPaciente: new FormControl('', Validators.required),
    procedimiento: new FormControl('',Validators.required),
    descripcion: new FormControl('', Validators.required),
    tipoProcedimiento: new FormControl('',Validators.required),
    cedulaPersonal: new FormControl('',Validators.required),
    estadoPaciente: new FormControl('',Validators.required),
  })

  public crearRegistro() {
    let registro ={
      codRegistro: this.formRegistro.get("codRegistro")?.value,
      fechaRegistro: this.formRegistro.get("fechaRegistro")?.value,
      cedulaPaciente: this.formRegistro.get("cedulaPaciente")?.value,
      procedimiento: this.formRegistro.get("procedimiento")?.value,
      descripcion: this.formRegistro.get("descripcion")?.value,
      tipoProcedimiento: this.formRegistro.get("tipoProcedimiento")?.value,
      cedulaPersonal: this.formRegistro.get("cedulaPersonal")?.value,
      estadoPaciente: this.formRegistro.get("estadoPaciente")?.value
    }
    this.historialService.actualizarRegistro(registro).subscribe(response => {
      alert("El registro ha sido actualizado");
      console.log(response);
    })
  }

}
