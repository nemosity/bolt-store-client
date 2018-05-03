import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as OrderActions from '../../actions/order.actions';
import * as fromOrders from '../../reducers';
import { Order } from '../../models/order.interface';

@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.css']
})
export class OrderContainerComponent implements OnInit {

  orders$: Observable<Order[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<fromOrders.State>) {
    this.orders$ = this.store.select(state => state.order.data);
    this.isLoading$ = this.store.select(state => state.order.isLoading);
  }

  ngOnInit() {
    this.store.dispatch(new OrderActions.GetOrders());
  }

}
