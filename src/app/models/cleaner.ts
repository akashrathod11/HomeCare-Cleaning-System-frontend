import { Booking } from "./booking";
import { Review } from "./review";

export class Cleaner {
  cleanerId: number = 0;
  name: string = '';
  contactInfo: string = '';
  availability: string = '';
  rating: number = 0;
  bookings: Booking[] = [];
  reviews: Review[] = [];

  constructor() {
    // Initialize with default values
    this.cleanerId = 0;
    this.name = '';
    this.contactInfo = '';
    this.availability = '';
    this.rating = 0;
    this.bookings = [];
    this.reviews = [];
  }
}