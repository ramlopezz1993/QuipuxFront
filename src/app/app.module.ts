import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {AppRoutingModule} from './app-routing.module';
import {PruebaQuipuxComponent} from './prueba-quipux/prueba-quipux.component';
import {HomeComponent} from './home/home.component';
import {NzAnchorModule} from 'ng-zorro-antd/anchor';
import {ServicioQuipuxService} from "../servicios/servicio-quipux.service";
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {HttpClientModule} from '@angular/common/http';
import {NzModalModule} from "ng-zorro-antd/modal";
import { ModalComponent } from './prueba-quipux/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    PruebaQuipuxComponent,
    HomeComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    NzLayoutModule,
    NzGridModule,
    NzFormModule,
    NzButtonModule,
    NzTypographyModule,
    NzSpaceModule,
    NzAnchorModule,
    NzTableModule,
    NzDividerModule,
    HttpClientModule,
    NzModalModule,
    AppRoutingModule
  ],
  providers: [ServicioQuipuxService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
