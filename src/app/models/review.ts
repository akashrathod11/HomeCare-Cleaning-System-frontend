import { Cleaner } from "./cleaner";
import { Customer } from "./customer";


export class Review {
  reviewId: number = 0;
  customer: Customer | null = null;
  cleaner: Cleaner | null = null;
  rating: number | null = null;
  comments: string = '';
  reviewDate: Date | null = null;

  constructor() {
    // Initialize with default values
    this.reviewId = 0;
    this.customer = null;
    this.cleaner = null;
    this.rating = null;
    this.comments = '';
    this.reviewDate = null;
  }
}
