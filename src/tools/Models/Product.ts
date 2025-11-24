import { BaseModel } from "./BaseModel";

type typeFilter = {
    category?: string
}

export default class Product extends BaseModel {
    static  tableName = 'products'

    public static async getByCategory(categories:string[]) {
        const products = await this.getAll()
        return products.filter( product => categories.includes(product?.category) )
    }

    public static async getAll() {
        const product = await this.get()
        if( Array.isArray(product) ) return product
        return [product]
    }

    public static async get( id:string|null=null ) {
        if( id === null ) return super.get(id)
        if( typeof id === 'string' && id.includes('?') ){
            const [,queryString] = id.split('?')
            const urlQuery = new URLSearchParams(queryString)
            const category = urlQuery.get('category')
            return super.get(id)
        }
        return super.get()
    }

    public static async post(data:any) {
        return await super.post(data)
    }

    public static async put(id:string, data:any) {
        return await super.put(id, data)
    }
}