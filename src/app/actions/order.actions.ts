import { Action } from '@ngrx/store';

export enum OrderActionTypes {
  GET_ORDERS = '[Order] GET_ORDERS',
  GET_ORDERS_SUCCESS = '[Order] GET_ORDERS_SUCCESS',
  GET_ORDERS_FAIL = '[Order] GET_ORDERS_FAIL',
}

export class GetOrders implements Action {
  readonly type = OrderActionTypes.GET_ORDERS;
}

export class GetOrdersSuccess implements Action {
  readonly type = OrderActionTypes.GET_ORDERS_SUCCESS;

  constructor(public payload: any = {}) {}
}

export class GetOrdersFail implements Action {
  readonly type = OrderActionTypes.GET_ORDERS_FAIL;

  constructor(public payload: any = {}) {}
}

export type OrderActionsUnion = GetOrders | GetOrdersSuccess | GetOrdersFail;
