import { Injectable } from "@angular/core";
import { API_URL } from "../app.config";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class CustomerService {
    private apiUrl = `${API_URL}/customers`;
  
    constructor(private http: HttpClient) {}
  
    getCustomers(): Observable<any> {
      return this.http.get(`${this.apiUrl}`);
    }
  
    createCustomer(customerData: any): Observable<any> {
      return this.http.post(`${this.apiUrl}`, customerData);
    }
  
    deleteCustomer(id: string): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
  }