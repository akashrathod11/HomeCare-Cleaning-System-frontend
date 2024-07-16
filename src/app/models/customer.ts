import { Booking } from "./booking";
import { Review } from "./review";

export class Customer {
  customerId: number = 0;
  name: string = '';
  address: string = '';
  email: string = '';
  phoneNumber: string = '';
  bookings: Booking[] = [];
  reviews: Review[] = [];

  constructor() {
    // Initialize with default values
    this.customerId = 0;
    this.name = '';
    this.address = '';
    this.email = '';
    this.phoneNumber = '';
    this.bookings = [];
    this.reviews = [];
  }
}