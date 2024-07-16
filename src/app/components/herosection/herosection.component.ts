import { Component } from '@angular/core';

@Component({
  selector: 'app-herosection',
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.css'
})
export class HerosectionComponent {
  
  imageSlider= [
    'assets/image/slide1.jpg',
    'assets/image/slide2.jpg',
    'assets/image/slide3.jpg'
  ];

  cleaningServices = [
    { name: 'Cleaning Service',  image:'assets/image/cleaningImage1.jpg'},
    { name: 'Window Cleaning',  image: 'assets/image/cleaningImage3.jpg' },
    { name: 'Full Home Cleaning',  image: 'assets/image/cleaningImage2.jpg' },
    { name: 'Water Tank Cleaning',  image: 'assets/image/cleaningImage1.jpg' },
    { name: 'Window Cleaning',  image: 'assets/image/cleaningImage1.jpg' },
    { name: 'Window Cleaning', image: 'assets/image/cleaningImage1.jpg' }
  ];

  popularServices = [
    { name: 'Full Home Cleaning', image: 'assets/image/popularCleaningServiceImg/serviceImg1.jpg' },
    { name: 'Office Cleaning', image: 'assets/image/popularCleaningServiceImg/serviceImg2.jpg' },
    { name: 'Kitchen Cleaning', image: 'assets/image/popularCleaningServiceImg/serviceImg3.jpg' },
    { name: 'Bathroom Cleaning', image: 'assets/image/popularCleaningServiceImg/serviceImg4.jpg' },
    {name: 'Sofa Cleaning', image: 'assets/image/popularCleaningServiceImg/serviceImg5.jpg' },
    { name: 'Glass Cleaning', image: 'assets/image/popularCleaningServiceImg/serviceImg6.jpg' }
  ];


  features = [
    {
      icon: 'bi bi-check-circle-fill',
      title: 'Reliable',
      description: 'We offer reliable and trustworthy cleaning services.'
    },
    {
      icon: 'bi bi-star-fill',
      title: 'Highly Rated',
      description: 'Our customers love us! Check our 5-star reviews.'
    },
    {
      icon: 'bi bi-shield-fill-check',
      title: 'Safe & Secure',
      description: 'Your safety is our priority. We follow strict protocols.'
    },
    {
      icon: 'bi bi-clock-fill',
      title: '24/7 Availability',
      description: 'We are available 24/7 to cater to your cleaning needs.'
    },
    {
      icon: 'bi bi-people-fill',
      title: 'Professional Team',
      description: 'Our team consists of experienced and professional cleaners.'
    },
    {
      icon: 'bi bi-heart-fill',
      title: 'Customer Satisfaction',
      description: 'We prioritize customer satisfaction with every service.'
    }
  ];

  clients = [
    {
    
      logo: 'assets/image/ourclientimg/client1.webp'
    },
    {
     
      logo: 'assets/image/ourclientimg/client2.webp'
    },
    {
     
      logo: 'assets/image/ourclientimg/client3.webp'
    },
    {
      
      logo: 'assets/image/ourclientimg/client5.webp'
    },
    {
     
      logo: 'assets/image/ourclientimg/client5.webp'
    },
    {
     
      logo: 'assets/image/ourclientimg/client5.png'
    },
    {
     
      logo: 'assets/image/ourclientimg/client7.png'
    },
    {
     
      logo: 'assets/image/ourclientimg/client8.webp'
    }
  ];

  statistics = [
    { value: '0', label: 'Happy Customers' },
    { value: '0%', label: 'Services Guarantee' },
    { value: '0', label: 'Service Partners' },
    { value: '0', label: 'Services Completed' }
  ];
  
  finalValues = ['1', '100', '10', '1'];
  
  ngOnInit() {
    this.animateNumbers();
  }
  
  animateNumbers() {
    const intervals = this.statistics.map((stat, index) => {
      const target = parseInt(this.finalValues[index].replace(/[^\d]/g, ''), 10);
      const delay = 30; // Adjust animation delay (milliseconds)
      let current = parseInt(stat.value.replace(/[^\d]/g, ''), 10);
  
      return setInterval(() => {
        const increment = Math.max(1, Math.ceil(Math.abs(target - current) / 100));
        current = current < target ? current + increment : current - increment;
        stat.value = this.formatStatValue(current, this.finalValues[index]);
  
        if (current === target) {
          clearInterval(intervals[index]);
        }
      }, delay);
    });
  }
  
  parseStatValue(value: string): number {
    return parseInt(value.replace(/[^\d]/g, ''), 30);
  }
  
  formatStatValue(value: number, format: string): string {
    if (format.includes('M')) {
      return (value / 1000000).toFixed(1) + 'M+';
    } else if (format.includes('K')) {
      return (value / 1000).toFixed(1) + 'K+';
    } else if (format.includes('%')) {
      return value.toFixed(1) + '%';
    } else {
      return value.toString();
    }
  }
  


  

}



