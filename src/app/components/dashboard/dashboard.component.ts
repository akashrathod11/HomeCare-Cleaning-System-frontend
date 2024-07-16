import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/booking';
import { BookingService } from '../../service/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService, private router: Router) { }

  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings() {
    this.bookingService.getAllBookings().subscribe(
      (data) => {
        this.bookings = data;
        console.log('Fetched bookings:', this.bookings);
      },
      (error) => {
        console.error('Error fetching bookings:', error);
      }
    );
  }

  deleteBooking(bookingId: number) {
    this.bookingService.deleteBooking(bookingId).subscribe(
      () => {
        // After deletion, refresh the list of bookings
        this.fetchBookings();
      },
      (error) => {
        console.error('Error deleting booking:', error);
        // Handle error as needed
      }
    );
  }

  viewDetails(bookingId: number) {
    console.log('Viewing details for booking with ID:', bookingId);
    this.router.navigate(['/booking-details', bookingId]);
  }
}
