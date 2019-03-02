import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  uri = 'http://34.73.97.253:4000/products'

  getProducts() {
    return this.http.get(`${this.uri}/`)
  }

  saveProduct(productName, category, price) {
    const data = {
      productName: productName,
      category: category,
      price: price
    }
    this.http.post(`${this.uri}/add`, data).subscribe(res => alert('Save'));
  }

  loadDetailProduct(id) {
    return this.http.get(`${this.uri}/${id}`)
  }

  updateProduct(id, productName, category, price) {
    const data = {
      productName: productName,
      category: category,
      price: price
    }
    this.http.post(`${this.uri}/update/${id}`, data).subscribe(res => alert('Update'));
  }

  deleteProduct(id) {
    return this.http.post(`${this.uri}/delete/${id}`, '');
  }
}
