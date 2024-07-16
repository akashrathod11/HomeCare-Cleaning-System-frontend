export class Booking {
  bookingId: number;
  customerName: string;
  serviceName: string;
  bookingDate: Date;
  serviceDate: Date;
  status: string;
  price: number;

  constructor() {
      this.bookingId = 0;
      this.customerName = '';
      this.serviceName = '';
      this.bookingDate = new Date();
      this.serviceDate = new Date();
      this.status = '';
      this.price = 0;
  }
}
