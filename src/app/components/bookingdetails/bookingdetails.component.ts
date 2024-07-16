import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/booking';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../service/booking.service';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrl: './bookingdetails.component.css'
})
export class BookingdetailsComponent implements OnInit{

  booking: Booking | undefined;

  constructor(private route: ActivatedRoute, private bookingService: BookingService) { }

  ngOnInit(): void {
    const bookingId = +this.route.snapshot.paramMap.get('id')!;
    this.getBookingDetails(bookingId);
  }

  getBookingDetails(id: number): void {
    this.bookingService.getBookingById(id).subscribe(
      (data) => {
        this.booking = data;
        console.log('Booking details:', this.booking);
      },
      (error) => {
        console.error('Error fetching booking details:', error);
      }
    );
  }

}
