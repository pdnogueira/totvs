import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3000/dataContext";

  constructor(
    private http: HttpClient
  ) { }

  newProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

  listProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }



}
