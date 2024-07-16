import { Booking } from "./booking";


export class Service {
  serviceId: number = 0;
  serviceName: string = '';
  description: string = '';
  price: number | null = null;
  bookings: Booking[] = [];

  constructor() {
    // Initialize with default values
    this.serviceId = 0;
    this.serviceName = '';
    this.description = '';
    this.price = null;
    this.bookings = [];
  }
}
