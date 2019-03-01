import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000/products'

  getProducts() {
    return this.http.get(`${this.uri}/`)
  }
}
