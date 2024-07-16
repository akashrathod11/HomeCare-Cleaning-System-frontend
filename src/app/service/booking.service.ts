import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = 'http://localhost:8081'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.baseUrl}/getAllBooking`);
  }

  deleteBooking(bookingId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${bookingId}`);
  }
  
  getBookingById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

}
