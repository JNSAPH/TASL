import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountListComponent } from './account-list/account-list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'admin/login', component: LoginComponent},
  { path: 'admin/users', component: AccountListComponent},
  { path: 'admin/register', component: RegisterComponent},
  { path: '', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
