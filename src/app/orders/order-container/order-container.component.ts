import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as OrderActions from '../../actions/order.actions';
import * as fromOrders from '../../reducers';

@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.css']
})
export class OrderContainerComponent implements OnInit {

  constructor(private store: Store<fromOrders.State>) { }

  ngOnInit() {
    this.store.dispatch(new OrderActions.GetOrders());
  }

}
