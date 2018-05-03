import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { Order } from '../models/order.interface';

import { OrderActionTypes, GetOrdersSuccess, GetOrdersFail } from '../actions/order.actions';
import { OrderService } from '../services/order.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class OrderEffects {

  @Effect()
  getOrders$: Observable<Action> = this.actions$
    .ofType(OrderActionTypes.GET_ORDERS)
    .switchMap(() =>
      this.orderService.getOrders()
        .map((orders: Order[]) => new GetOrdersSuccess({ orders }))
        .catch(error => Observable.of(new GetOrdersFail({ error }))
      )
    );

  constructor(private actions$: Actions, private orderService: OrderService) {}
}
