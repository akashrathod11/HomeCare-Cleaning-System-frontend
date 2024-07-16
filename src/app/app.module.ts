import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HerosectionComponent } from './components/herosection/herosection.component';
import { FormsModule } from '@angular/forms';
import { AboutsectionComponent } from './components/aboutsection/aboutsection.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { KitchensectionComponent } from './components/kitchensection/kitchensection.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FullcleaningComponent } from './components/fullcleaning/fullcleaning.component';
import { BookingComponent } from './components/booking/booking.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { BookingdetailsComponent } from './components/bookingdetails/bookingdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HerosectionComponent,
    AboutsectionComponent,
    ContactusComponent,
    KitchensectionComponent,
    LoginComponent,
    FullcleaningComponent,
    BookingComponent,
    DashboardComponent,
    CustomerloginComponent,
    BookingdetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
