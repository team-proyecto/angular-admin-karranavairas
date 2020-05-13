import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuariosCasosComponent} from './components/usuarios-casos/usuarios-casos.component';


const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosCasosComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
