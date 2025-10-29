import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ClientiComponent } from './pages/clienti/clienti.component';
import { authGuard } from './guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { ListaComponent } from './pages/lista/lista.component';
import { PrenotazioniComponent } from './pages/lista/prenotazioni.component';
import { ArriviComponent } from './pages/lista/arrivi.component';
import { PartenzeComponent } from './pages/lista/partenze.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard', // This is the authenticated section
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: 'clienti', component: ClientiComponent },
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
            { path: '', redirectTo: 'clienti', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: 'login' } // Redirect any unmatched routes to login
];
