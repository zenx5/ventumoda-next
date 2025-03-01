import { products } from "../constant";

type typeFilter = {
    category?: string
}

export default class Product {

    get(filter?:typeFilter) {
        if( filter && filter.category) return products
        return products
    }
}