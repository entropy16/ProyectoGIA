import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PacienteDTO } from '../model/PacienteDTO';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  public enviarPaciente(datosPaciente: PacienteDTO): Observable<PacienteDTO> {

    return this.http.post<PacienteDTO>(environment.protocol + environment.localhost + "/paciente/crearPaciente", datosPaciente);
  }

  public obtenerPacientes(): Observable<PacienteDTO[]> {

    return this.http.get<PacienteDTO[]>(environment.protocol + environment.localhost + "/paciente/obtenerPacientes");
  }

  public consultarPaciente(cedulaPaciente: number): Observable<PacienteDTO> {

    return this.http.get<PacienteDTO>(environment.protocol + environment.localhost + "/paciente/consultarPaciente", {"params": {cedulaPaciente: cedulaPaciente}});
  }

  public consultarEstado(estado: string): Observable<PacienteDTO[]> {
    
    return this.http.get<PacienteDTO[]>(environment.protocol + environment.localhost + "/paciente/consultarEstado", {"params": {estado: estado}});
  }

  public actualizarPaciente(datosPaciente: PacienteDTO): Observable<PacienteDTO> {

    return this.http.put<PacienteDTO>(environment.protocol + environment.localhost + "/paciente/actualizarPaciente", datosPaciente);
  }

  public borrarPaciente(cedulaPaciente: number): Observable<PacienteDTO>{

    return this.http.delete<PacienteDTO>(environment.protocol + environment.localhost + "/paciente/borrarPaciente", {"params": {cedulaPaciente: cedulaPaciente}});
  }
}
