import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from '../../models/booking';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  baseUrl = 'http://localhost:8081';
  bookingForm!: FormGroup; // Add '!' to indicate that it will be initialized in ngOnInit
  private successModal: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit() {
    this.bookingForm = this.fb.group({
      customerName: ['', Validators.required],
      serviceName: [{ value: '', disabled: true }, Validators.required],
      bookingDate: ['', Validators.required],
      serviceDate: ['', Validators.required],
      status: ['', Validators.required],
      price: [{ value: '', disabled: true }, Validators.required]
    });

    this.route.params.subscribe(params => {
      const nameParam = params['name'];
      const priceParam = params['price'];

      this.bookingForm.patchValue({
        serviceName: nameParam ? nameParam : '',
        price: priceParam ? +priceParam : 0
      });
    });

    // Initialize Bootstrap modal
    const modalElement = document.getElementById('successModal');
    if (modalElement) {
      this.successModal = new bootstrap.Modal(modalElement);
    }
  }

  onSubmit() {
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      return;
    }

    const bookingData: Booking = this.bookingForm.getRawValue();
    console.log('Booking submitted:', bookingData);

    this.http.post(`${this.baseUrl}/saveBooking`, bookingData).subscribe(response => {
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
}
