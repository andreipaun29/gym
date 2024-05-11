import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VotingComponent } from './components/voting/voting.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'voting', component: VotingComponent },
];
