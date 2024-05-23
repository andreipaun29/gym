import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VotingComponent } from './components/voting/voting.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'voting', component: VotingComponent },
    { path: 'admin', component: AdminComponent}
];
