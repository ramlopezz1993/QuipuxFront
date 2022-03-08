import { Injectable } from '@angular/core';
import {exposedApi} from "../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicioQuipuxService {

  constructor(private http: HttpClient) { }

  URL_BACK = exposedApi.URL_SERVICES;

  obtenerListas() {
    return this.http.get<any>('/api/lista-canciones');
  }

  eliminarListas(id: string) {
    return this.http.delete<any>('/api/lists/'.concat(id));
  }

  crearListaMusica(parametro: object) {
    return this.http.post<any>('/api/lists/',
      parametro);
  }

  obtenerCancionesPorIdLista (idLista: string) {
    return this.http.get<any>('/api/lists/'.concat(idLista));
  }

}
