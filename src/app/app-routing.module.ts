import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PruebaQuipuxComponent} from "./prueba-quipux/prueba-quipux.component";
import {HomeComponent} from "./home/home.component";
import {ModalComponent} from "./prueba-quipux/modal/modal.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'prueba', component: PruebaQuipuxComponent },
  { path: 'canciones', component: ModalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
