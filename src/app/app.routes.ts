import { Routes } from '@angular/router';
import { LoginComponent } from '@proptech/components/login/login.component';
import { authGuard } from '@proptech/guards/auth.guard';
import { LayoutComponent } from '@proptech/layout/layout.component';
import { ClientsComponent } from '@proptech/pages/clients/clients.component';
import { UsersComponent } from '@proptech/pages/users/users.component';
import { Dashboard } from '@proptech/pages/dashboard/dashboard';
import { ArriviComponent } from '@proptech/pages/lista/arrivi.component';
import { ListaComponent } from '@proptech/pages/lista/lista.component';
import { PartenzeComponent } from '@proptech/pages/lista/partenze.component';
import { PrenotazioniComponent } from '@proptech/pages/lista/prenotazioni.component';

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
