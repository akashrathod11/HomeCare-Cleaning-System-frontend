import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutsection',
  templateUrl: './aboutsection.component.html',
  styleUrl: './aboutsection.component.css'
})
export class AboutsectionComponent {
 
  imageLink="assets/image/aboutusImg/aboutus.jpg";

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
