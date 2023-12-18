import { AnyAction, Dispatch } from "redux";
import { OrderType } from "../../components/Orders/Orders";
import { ordersAPI } from "../../api/ordersAPI";
import { AppRootStateType, store } from "../store";
import { ThunkAction, ThunkActionDispatch } from "redux-thunk";

type SetOrdersActionType = {
  type: "SET-ORDERS",
  orders: OrderType[]
}

type DeleteActionType = {
    type: "DELETE",
    orderId: number
}

type OrdersReducerActionType = DeleteActionType | SetOrdersActionType;

const initialState: OrderType[] = [
{
        id: 0,
        title: 'Длинное предлинное длинное название прихода',
        date: '2023-01-29 12:09:33',
        description: 'desc',
        products: [
          {
            id: 1,
            serialNumber: 1234,
            isNew: 1,
            photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
            title: 'Product 1',
            type: 'Monitors',
            specification: 'Specification 1',
            guarantee: {
              start: '2017-06-29 12:09:33',
              end: '2017-06-29 12:09:33'
            },
            price: [
              {value: 100, symbol: 'USD', isDefault: 0},
              {value: 2600, symbol: 'UAH', isDefault: 1}
            ],
            order: 1,
            date: '2023-06-29 12:09:33'
          },{
            id: 2,
            serialNumber: 1234,
            isNew: 1,
            photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
            title: 'Product 1',
            type: 'Monitors',
            specification: 'Specification 1',
            guarantee: {
              start: '2017-06-29 12:09:33',
              end: '2017-06-29 12:09:33'
            },
            price: [
              {value: 200, symbol: 'USD', isDefault: 0},
              {value: 2600, symbol: 'UAH', isDefault: 1}
            ],
            order: 1,
            date: '2017-06-29 12:09:33'
          },{
            id: 3,
            serialNumber: 1234,
            isNew: 1,
            photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
            title: 'Product 1',
            type: 'Monitors',
            specification: 'Specification 1',
            guarantee: {
              start: '2017-06-29 12:09:33',
              end: '2017-06-29 12:09:33'
            },
            price: [
              {value: 300, symbol: 'USD', isDefault: 0},
              {value: 2600, symbol: 'UAH', isDefault: 1}
            ],
            order: 1,
            date: '2017-06-29 12:09:33'
          }
        ]
      },
      {
        id: 1,
        title: 'Order 2',
        date: '2017-06-29 12:09:33',
        description: 'desc',
        products: [
          {
            id: 1,
            serialNumber: 1234,
            isNew: 1,
            photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
            title: 'Product 1',
            type: 'Monitors',
            specification: 'Specification 1',
            guarantee: {
              start: '2017-06-29 12:09:33',
              end: '2017-06-29 12:09:33'
            },
            price: [
              {value: 100, symbol: 'USD', isDefault: 0},
              {value: 2600, symbol: 'UAH', isDefault: 1}
            ],
            order: 1,
            date: '2017-06-29 12:09:33'
          },{
            id: 2,
            serialNumber: 1234,
            isNew: 1,
            photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
            title: 'Product 1',
            type: 'Monitors',
            specification: 'Specification 1',
            guarantee: {
              start: '2017-06-29 12:09:33',
              end: '2017-06-29 12:09:33'
            },
            price: [
              {value: 100, symbol: 'USD', isDefault: 0},
              {value: 2600, symbol: 'UAH', isDefault: 1}
            ],
            order: 1,
            date: '2017-06-29 12:09:33'
          }
        ]
      },
      {
        id: 2,
        title: 'Order 3',
        date: '2017-06-29 12:09:33',
        description: 'desc',
        products: [
          {
            id: 4,
            serialNumber: 1234,
            isNew: 1,
            photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
            title: 'Product 1',
            type: 'Monitors',
            specification: 'Specification 1',
            guarantee: {
              start: '2017-06-29 12:09:33',
              end: '2017-06-29 12:09:33'
            },
            price: [
              {value: 100, symbol: 'USD', isDefault: 0},
              {value: 2600, symbol: 'UAH', isDefault: 1}
            ],
            order: 1,
            date: '2017-06-29 12:09:33'
          }
        ]
      },{
        id: 3,
        title: 'Order 4',
        date: '2017-06-29 12:09:33',
        description: 'desc',
        products: [
    
        ]
      }
]

export const ordersReducer = (state: OrderType[] = initialState, action: OrdersReducerActionType): OrderType[]  => {
    switch (action.type) {
      case 'SET-ORDERS':
            return action.orders;
        case 'DELETE':
            const stateCopy = [...state];
            return stateCopy.filter(t => t.id != action.orderId);
        default:
            return state;
    }

}

export const setOrderseActionCreator = (orders: OrderType[]): SetOrdersActionType => {
  return {type: "SET-ORDERS", orders}
}

export const deleteActionCreator = (orderId: number): DeleteActionType => {
    return {type: "DELETE", orderId}
}

export const fetchOrdersTC = ()=> {
    return (dispatch: typeof store.dispatch ) => {
        ordersAPI.getOrders()
            .then((res) => {
                dispatch(setOrderseActionCreator(res.data.orders))
            })
    }
}
