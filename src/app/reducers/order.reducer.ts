import { Order } from '../models/order.interface';
import { OrderActionTypes, OrderActionsUnion } from '../actions/order.actions';

export interface State {
  data: Order[];
  isLoading: boolean;
  error: any;
}

const initialState: State = {
  data: null,
  isLoading: false,
  error: null
};

export function reducer(state: State = initialState, action: OrderActionsUnion): State {
  switch (action.type) {
    case OrderActionTypes.GET_ORDERS: {
      return { ...state,
        isLoading: true
      };
    }

    case OrderActionTypes.GET_ORDERS_FAIL: {
      return { ...state,
        isLoading: false,
        error: null
      };
    }

    case OrderActionTypes.GET_ORDERS_SUCCESS: {
      return { ...state,
        isLoading: false,
        error: action.payload.error
      };
    }

    default: {
      return state;
    }
  }
}
