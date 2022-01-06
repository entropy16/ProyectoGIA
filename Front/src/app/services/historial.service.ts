import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { RegistroDTO } from '../model/RegistroDTO';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  constructor(private http: HttpClient) { }

  public enviarRegistro(registro: RegistroDTO): Observable<RegistroDTO> {

    return this.http.post<RegistroDTO>(environment.protocol + environment.localhost + "/historialClinico/crearRegistro",registro);
  }

  public consultarFecha(fecha: string): Observable<RegistroDTO[]> {

    return this.http.get<RegistroDTO[]>(environment.protocol + environment.localhost + "/historialClinico/consultarFecha", {"params":{fecha: fecha}});
  }

  public consultarPaciente(cedulaPaciente: number): Observable<RegistroDTO[]> {

    return this.http.get<RegistroDTO[]>(environment.protocol+environment.localhost+"/historialClinico/consultarPaciente",{"params":{cedulaPaciente: cedulaPaciente }});
  }

  public consultarPersonal(cedulaPersoanl: number): Observable<RegistroDTO[]> {

    return this.http.get<RegistroDTO[]>(environment.protocol+environment.localhost+"/historialClinico/consultarPaciente",{"params":{cedulaPersoanl: cedulaPersoanl }});
  }

  public actualizarRegistro(registro: RegistroDTO): Observable<RegistroDTO> {

    return this.http.put<RegistroDTO>(environment.protocol+environment.localhost+"/historialClinico/actualizarRegistro",registro);
  }

  public borrarRegistro(codRegistro: number): Observable<number> {

    return this.http.delete<number>(environment.protocol+environment.localhost+"/historialClinico/borrarRegistro",{"params":{codRegistro: codRegistro}});
  }

  public borrarHistorial(cedulaPaciente: number): Observable<number> {

    return this.http.delete<number>(environment.protocol+environment.localhost+"/historialClinico/borrarHistorial",{"params":{cedulaPaciente: cedulaPaciente}});
  }

  public obtenerRegistros(): Observable<RegistroDTO[]> {
    
    return this.http.get<RegistroDTO[]>(environment.protocol+environment.localhost+"/historialClinico/obtenerRegistros");
  }
}
