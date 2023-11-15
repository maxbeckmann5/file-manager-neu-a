import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FileComponent } from './file/file.component';
import { ManageComponent } from './manage/manage.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'file', component: FileComponent },
  { path: 'manage', component: ManageComponent},
  { path: 'teams', component: TeamsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }