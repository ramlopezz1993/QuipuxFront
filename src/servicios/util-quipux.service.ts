import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UtilQuipuxService {

  constructor() { }

  mensajeDialogSeguridad(titulo: string, mensaje: string, icon: any) {
    return Swal.fire({
      title: titulo,
      text: mensaje,
      icon,
      showCancelButton: false,
      allowOutsideClick: false,
      confirmButtonColor: '#dfc326',
      confirmButtonText: 'Aceptar',
    });
  }
}
