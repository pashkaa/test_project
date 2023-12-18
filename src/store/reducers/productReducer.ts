import { ProductType } from "../../components/products/Products";
import { AnyAction, Dispatch } from "redux";
import { ordersAPI } from "../../api/ordersAPI";
import { AppRootStateType, store } from "../store";
import { ThunkAction, ThunkActionDispatch } from "redux-thunk";

type SetProductsActionType = {
  type: "SET-PRODUCTS",
  products: ProductType[]
}

type CounterReducerActionType =  SetProductsActionType;

const initialState: ProductType[] = [

    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: { start: '2017-06-29 12:09:33',end: '2017-06-29 12:09:33'},
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},{value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 1,
    photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
    title: 'Product 2',
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
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 3,
    serialNumber: 1234,
    isNew: 1,
    photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
    title: 'Product 3',
    type: 'Monitors 2',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 4,
    serialNumber: 1234,
    isNew: 1,
    photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
    title: 'Product 4',
    type: 'Monitors 2',
    specification: 'Specification 2',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 5,
    serialNumber: 1234,
    isNew: 1,
    photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
    title: 'Product 5',
    type: 'Monitors',
    specification: 'Specification 2',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 6,
    serialNumber: 1234,
    isNew: 1,
    photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
    title: 'Product 6',
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
    order: 2,
    date: '2017-06-29 12:09:33'
  }
]

export const productReducer = (state: ProductType[] = initialState, action: CounterReducerActionType): ProductType[] => {
    switch (action.type) {
        case 'SET-PRODUCTS':
            return action.products;
        default:
            return state;
    }

}

export const setProductsActionCreator = (products: ProductType[]): SetProductsActionType => {
  return {type: "SET-PRODUCTS", products}
}

export const fetchProducssTC = ()=> {
  return (dispatch: typeof store.dispatch ) => {
      ordersAPI.getProducts()
          .then((res) => {
              dispatch(setProductsActionCreator(res.data.products))
          })
  }
}
