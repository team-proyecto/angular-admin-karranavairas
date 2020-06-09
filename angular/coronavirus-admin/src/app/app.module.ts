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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuariosCasosComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
