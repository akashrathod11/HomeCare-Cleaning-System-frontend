import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../../models/booking';
import { HttpClient } from '@angular/common/http';

declare var bootstrap: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit, AfterViewInit {

  baseUrl = 'http://localhost:8081';
  booking: Booking = new Booking();
  private successModal: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const nameParam = params['name'];
      const priceParam = params['price'];

      this.booking.serviceName = nameParam ? nameParam : '';
      this.booking.price = priceParam ? +priceParam : 0; // Ensure price is converted to number
    });
  }

  ngAfterViewInit() {
    // Initialize Bootstrap modal
    const modalElement = document.getElementById('successModal');
    if (modalElement) {
      this.successModal = new bootstrap.Modal(modalElement);
    }
  }

  onSubmit() {
    console.log('Booking submitted:', this.booking);
    this.http.post(`${this.baseUrl}/saveBooking`, this.booking).subscribe(response => {
      console.log('Booking response:', response);
      this.showSuccessModal();
    }, error => {
      console.error('Booking error:', error);
    });
  }

  showSuccessModal() {
    if (this.successModal) {
      this.successModal.show();
    }
  }

  closeModal() {
    // Hide the modal
    if (this.successModal) {
      this.successModal.hide();
    }

    // Navigate to '/home'
    this.router.navigate(['/fullcleaning']);
  }
}
