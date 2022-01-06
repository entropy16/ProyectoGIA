import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { PacienteDTO } from '../model/PacienteDTO';
import { PersonalDTO } from '../model/PersonalDTO';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http: HttpClient) { }

  public enviarPersonal(personal: PersonalDTO): Observable<PersonalDTO> {

    return this.http.post<PersonalDTO>(environment.protocol + environment.localhost + "/personal/crearPersonal", personal);
  }

  public obtenerPersonal(): Observable<PersonalDTO[]>{

    return this.http.get<PersonalDTO[]>(environment.protocol + environment.localhost + "/personal/obtenerPersonal");
  }

  public consultarPersonal(cedulaPersonal: number): Observable<PersonalDTO> {

    return this.http.get<PersonalDTO>(environment.protocol + environment.localhost + "/personal/consultarPersonal");
  }

  public consultarTipo(tipo: string): Observable<PersonalDTO[]> {

    return this.http.get<PersonalDTO[]>(environment.protocol + environment.localhost + "/personal/consultarTipo",{"params": {tipo: tipo}});
  }

  public actualizarPersonal(personal: PersonalDTO): Observable<PersonalDTO> {

    return this.http.put<PersonalDTO>(environment.protocol + environment.localhost + "/personal/actualizarPersonal", personal);
  }

  public borrarPersonal(cedulaPersonal: Number): Observable<number> {

    return this.http.delete<number>(environment.protocol + environment.localhost + "/personal/borrarPersonal")
  }
}
