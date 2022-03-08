import {Component, OnInit} from '@angular/core';
import {ServicioQuipuxService} from "../../servicios/servicio-quipux.service";
import {UtilQuipuxService} from "../../servicios/util-quipux.service";
import {Router} from "@angular/router";

interface ListaReproduccion {
  id: number;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-prueba-quipux',
  templateUrl: './prueba-quipux.component.html',
  styleUrls: ['./prueba-quipux.component.css'],
  providers: [ServicioQuipuxService]
})
export class PruebaQuipuxComponent implements OnInit {

  prueba = 'Listas de música';
  datosTabla: ListaReproduccion[] = [];
  isVisible = false;

  constructor(private serviciosBak: ServicioQuipuxService,
              private utilService: UtilQuipuxService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.obtenerListasCanciones();
  }

  eliminarLista($event: any) {
    this.serviciosBak.eliminarListas($event).subscribe(() => {
      this.datosTabla = this.datosTabla.filter(dato => dato.id !== $event);
      this.obtenerListasCanciones();
    }, (error: any) => {
      this.utilService.mensajeDialogSeguridad('Error', error.descripcion, 'error)')
      console.log(error);
    });
  }

  private obtenerListasCanciones() {
    this.serviciosBak.obtenerListas().subscribe((data) => {
      if (data.length !== 0) {
        this.datosTabla = data;
      } else {
        this.utilService.mensajeDialogSeguridad('Información', 'No se encontraron listas', 'info')
      }
    }, (error: any) => {
      this.utilService.mensajeDialogSeguridad('Error', error.descripcion, 'error)')
      console.log(error);
    });
  }

  crearListas() {
    const listas = [
      {
        nombre: "Regueton",
        descripcion: "Lista de Regueton",
        canciones: [
          {
            titulo: "sola",
            artista: "Bad Bunny",
            album: "X100pre",
            anno: "2020"
          },
          {
            titulo: "Por siempre",
            artista: "Bad Bunny, Arcangel",
            album: "X100pre",
            anno: "2020"
          }
        ]
      },
      {
        nombre: "Salsa",
        descripcion: "Lista de salsa",
        canciones: [
          {
            titulo: "El cantante",
            artista: "Hector lavoe",
            album: "La fama",
            anno: "1984"
          },
          {
            titulo: "Gitana",
            artista: "Willie Colon",
            album: "La fania",
            anno: "1994"
          }
        ]
      },
      {
        nombre: "Rock",
        descripcion: "Lista de Rock",
        canciones: [
          {
            titulo: "Aguita amarilla",
            artista: "Los enanos verdes",
            album: "rockeritos",
            anno: "1984"
          },
          {
            titulo: "Soul in pill",
            artista: "La voz",
            album: "rockeritos",
            anno: "1984"
          }
        ]
      },
    ]
    listas.forEach(lista => {
      this.serviciosBak.crearListaMusica(lista).subscribe(()=>{
        this.obtenerListasCanciones();
      }, (error: any) => {
        this.utilService.mensajeDialogSeguridad('Error', error.descripcion, 'error)')
        console.log(error);
      });
    })
  }

  showModal(id: any): void {
    localStorage.setItem('idLista', id)
    this.router.navigate(['canciones']);
  }


}
