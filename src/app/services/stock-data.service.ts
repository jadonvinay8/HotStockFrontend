import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {API_URL} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  constructor(private http: HttpClient) { }

  getNums(): Observable<any> {
    return this.http.get(`${API_URL}/`);
  }

  getStockData(request): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(`${API_URL}/`, request, httpOptions);
  }
}
