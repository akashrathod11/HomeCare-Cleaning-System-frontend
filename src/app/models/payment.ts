import { Booking } from "./booking";


export class Payment {
  paymentId: number = 0;
  booking: Booking | null = null;
  amount: number | null = null;
  paymentDate: Date | null = null;
  paymentMethod: string = '';
  status: string = '';

  constructor() {
    // Initialize with default values
    this.paymentId = 0;
    this.booking = null;
    this.amount = null;
    this.paymentDate = null;
    this.paymentMethod = '';
    this.status = '';
  }
}
