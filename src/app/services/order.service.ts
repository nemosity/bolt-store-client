import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import 'rxjs/add/operator/map';
import { Order } from '../models/order.interface';

@Injectable()
export class OrderService {
  private API_PATH = 'http://localhost:7071/api/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.API_PATH}`);
  }
}
