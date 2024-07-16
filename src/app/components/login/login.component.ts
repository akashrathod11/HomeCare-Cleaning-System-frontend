import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../service/navbar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = '';
  pass: string = '';
  showError: boolean = false;

  constructor(private router: Router, private navbarService: NavbarService) {}

  onSubmit() {
    const tempUsername = 'admin';
    const tempPassword = 'admin123';

    if (this.name === tempUsername && this.pass === tempPassword) {
      this.navbarService.hideNavbar();
      this.router.navigate(['/dashboard']);
    } else {
      this.showError = true;
    }
  }
}
