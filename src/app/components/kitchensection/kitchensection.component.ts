import { Component, OnInit } from '@angular/core';

interface Package {
  title: string;
  rating?: string;
  name: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-kitchensection',
  templateUrl: './kitchensection.component.html',
  styleUrls: ['./kitchensection.component.css']
})
export class KitchensectionComponent implements OnInit {

  packages: Package[] = [
    {
      title: 'PREMIUM',
      rating: '4.5 (435+)',
      name: 'Deep Cleaning Kitchen',
      description: 'With Chimney',
      price: '<strike>₹1899</strike>₹1439'
    },
    {
      title: 'Discounted',
      name: 'Deep Cleaning Kitchen',
      description: 'Without Chimney',
      price: '<strike>₹1199</strike> ₹959'
    },
    {
      title: 'Basic',
      name: 'Deep Cleaning Kitchen',
      description: 'Empty Kitchen Cleaning',
      price: '<strike>₹1499</strike>₹1199'
    },  
  ];

  wishlist: Package[] = [];

  constructor() { }

  ngOnInit(): void { }

  addToWishlist(packageItem: Package): void {
    this.wishlist.push(packageItem);
  }
}
