import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuariosCasosComponent} from './components/usuarios-casos/usuarios-casos.component';
import { FormComponent } from './components/usuarios-casos/form/form.component';
import { ReporteEconomicoComponent } from './components/reporte-economico/reporte-economico.component';
import { FormReporteComponent } from './components/reporte-economico/form-reporte/form-reporte.component';

// tslint:disable-next-line: variable-name
const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosCasosComponent },
  { path: 'reporte', component: ReporteEconomicoComponent },
  { path: 'reporte/form', component: FormReporteComponent },
  { path: 'form', component: FormComponent },
  { path: 'form/:id', component: FormComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
