import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  
  features = [
    {
      icon: 'bi bi-envelope',
      title: 'Mail Here',
      description: 'heleandsupport@gmail.com'
    },
    {
      icon: 'bi bi-whatsapp',
      title: 'Chat Support',
     
    },
    {
      icon: 'bi bi-telephone',
      title: 'Call Here',
      description: '+91-9999229999'
    }
  ];

}
