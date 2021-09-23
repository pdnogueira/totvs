import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  constructor(private http: HttpClient) { }

  private readonly API = "http://localhost:3000/dataContext"

  list() {
    return this.http.get(this.API)
  }
}
