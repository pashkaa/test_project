import axios from "axios";
import { OrderType } from "../components/Orders/Orders";
import { ProductType } from "../components/products/Products";

type GetOrdersType = {
    orders: OrderType[]
}

type GetProductsType = {
    products: ProductType[]
}

export const ordersAPI = {
    getOrders() {
        return axios.get<GetOrdersType>('http://localhost:3001/orders');
    },
    getProducts() {
        return axios.get<GetProductsType>('http://localhost:3001/products');
    }
}