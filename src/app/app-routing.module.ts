import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutsectionComponent } from './components/aboutsection/aboutsection.component';
import { HerosectionComponent } from './components/herosection/herosection.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { KitchensectionComponent } from './components/kitchensection/kitchensection.component';
import { LoginComponent } from './components/login/login.component';
import { FullcleaningComponent } from './components/fullcleaning/fullcleaning.component';
import { BookingComponent } from './components/booking/booking.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookingdetailsComponent } from './components/bookingdetails/bookingdetails.component';



const routes: Routes = [
  {
    path: 'home', 
    component: HerosectionComponent, 
  },
  {
  path:"aboutus",
  component:AboutsectionComponent,
  },
  {
  path:"contactus",
  component:ContactusComponent,
  },{
  path:"kitchen",
  component:KitchensectionComponent   ,
  },{
  path:"admin-login",
  component:LoginComponent,
  },
  {
    path:"fullcleaning",
    component:FullcleaningComponent
  },
  { path: 'booking/:name/:price', component: BookingComponent },
  
   

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'booking-details/:id', component:BookingdetailsComponent }
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
