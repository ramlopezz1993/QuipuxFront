import { Component, OnInit } from '@angular/core';
import {ServicioQuipuxService} from "../../../servicios/servicio-quipux.service";
import {UtilQuipuxService} from "../../../servicios/util-quipux.service";

interface ListaCanciones {
  id: number;
  titulo: string;
  artista: string;
  album: string;
  anno: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  canciones = 'Canciones'
  datosTabla: ListaCanciones[] = [];
  id: any;

  constructor(private serviciosBak: ServicioQuipuxService,
              private utilService: UtilQuipuxService) {
    this.id = localStorage.getItem('idLista');
  }

  ngOnInit(): void {
    this.obtenerCanciones();
  }

  private obtenerCanciones() {
    this.serviciosBak.obtenerCancionesPorIdLista(this.id).subscribe((data) => {
      if (data.length !== 0) {
        this.datosTabla = data.canciones;
      } else {
        this.utilService.mensajeDialogSeguridad('Información', 'No se encontraron canciones', 'info')
      }
    }, (error: any) => {
      this.utilService.mensajeDialogSeguridad('Error', error.descripcion, 'error)')
      console.log(error);
    });
  }
}
