import { Component } from '@angular/core';

@Component({
  selector: 'app-fullcleaning',
  templateUrl: './fullcleaning.component.html',
  styleUrl: './fullcleaning.component.css'
})
export class FullcleaningComponent {
   
  services = [
    {
      type: 'Home',
      name: 'Kitchen Cleaning',
      description: 'Thorough cleaning of kitchen surfaces, cabinets, and appliances.',
      price: 2500,
      imageUrl: 'assets/image/popularCleaningServiceImg/serviceImg3.jpg'
    },
    {
      type: 'Home',
      name: 'Bathroom Cleaning',
      description: 'Cleaning and disinfection of bathroom fixtures, tiles, and surfaces.',
      price: 2000,
      imageUrl: 'assets/image/popularCleaningServiceImg/serviceImg4.jpg'
    },
    {
      type: 'Home',
      name: 'Sofa Cleaning',
      description: 'Professional cleaning of sofa upholstery using specialized techniques.',
      price: 3000,
      imageUrl: 'assets/image/popularCleaningServiceImg/serviceImg5.jpg'
    },
    {
      type: 'Home',
      name: 'Glass Cleaning',
      description: 'Streak-free cleaning of glass windows, doors, and surfaces.',
      price: 1500,
      imageUrl: 'assets/image/popularCleaningServiceImg/serviceImg6.jpg'
    },
    {
      type: 'Home',
      name: 'Full Home Cleaning',
      description: 'Comprehensive cleaning of all rooms, including floors and surfaces.',
      price: 10000,
      imageUrl: 'assets/image/popularCleaningServiceImg/serviceImg1.jpg'
    },
    {
      type: 'Office',
      name: 'Office Cleaning',
      description: 'Detailed cleaning of office spaces and workstations.',
      price: 5000,
      imageUrl: 'assets/image/popularCleaningServiceImg/serviceImg2.jpg'
    }
  ];

  constructor() { }

  bookNow(serviceName: string) {
    // Implement booking logic here
    console.log('Book Now:', serviceName);
    // You can implement further actions, such as navigating to booking page or showing a modal
  }

}
