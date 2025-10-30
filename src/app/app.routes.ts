import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { UsersComponent } from './pages/users/users.component';
import { Dashboard } from './pages/dashboard/dashboard';
import { ArriviComponent } from './pages/lista/arrivi.component';
import { ListaComponent } from './pages/lista/lista.component';
import { PartenzeComponent } from './pages/lista/partenze.component';
import { PrenotazioniComponent } from './pages/lista/prenotazioni.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'after-login', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: '', // This is the authenticated section
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'clienti', component: ClientsComponent },
            { path: 'users', component: UsersComponent },
            {
                path: 'lista',
                component: ListaComponent,
                children: [
                    { path: 'prenotazioni', component: PrenotazioniComponent },
                    { path: 'arrivi', component: ArriviComponent },
                    { path: 'partenze', component: PartenzeComponent },
                    { path: '', redirectTo: 'prenotazioni', pathMatch: 'full' }
                ]
            },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: 'dashboard' }
];
