import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/AUth/login/login.component';
import { HomeComponent } from './components/Pages/home/home.component';

import { AuthGuard } from './core/Services/auth.guard';


const routes: Routes = [
  {path:'' ,redirectTo:'login',pathMatch:'full'},
  {path:'login',canActivate:[AuthGuard],component:LoginComponent},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
