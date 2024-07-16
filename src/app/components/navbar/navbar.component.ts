import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../service/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
 imageLink:string="assets/image/logo.png";

 showAdminLoginForm: boolean = false;

  // constructor() {}

  showAdminLogin() {
    this.showAdminLoginForm = true;
  }
  
  isVisible: boolean = true;

  constructor(private navbarService: NavbarService) {}

  ngOnInit() {
    this.navbarService.navbarVisibility$.subscribe(visible => {
      this.isVisible = visible;
    });
  }
}
