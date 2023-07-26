import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'home', component : HomeComponent},
  {path:'offer-ride', component:OfferRideComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'payment', component:PaymentOptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
