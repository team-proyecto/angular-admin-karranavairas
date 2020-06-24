import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/* routes */
import { APP_ROUTING } from './app.routes';

/* component */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsuariosCasosComponent } from './components/usuarios-casos/usuarios-casos.component';
import { FormComponent } from './components/usuarios-casos/form/form.component';
import { ReporteEconomicoComponent } from './components/reporte-economico/reporte-economico.component';
import { FormReporteComponent } from './components/reporte-economico/form-reporte/form-reporte.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuariosCasosComponent,
    FormComponent,
    ReporteEconomicoComponent,
    FormReporteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
