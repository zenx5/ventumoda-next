type typeCart = {
    index: number[]
    quantity: number[]
}

const cartBlank = {
    index: [],
    quantity: []
}

export default class Cart {

    static get(){
        try{
            if (typeof window === 'undefined') throw new Error("Window not defined")
            const tempCart = window.localStorage.getItem('temp_cart') as string
            return JSON.parse( tempCart ) || cartBlank
        } catch(e) {
            console.log(e.message as string)
            return cartBlank
        }
    }

    static set(cart:typeCart){
        try{
            if (typeof window === 'undefined')  throw new Error("Window not defined")
            window.localStorage.setItem('temp_cart', JSON.stringify(cart) )
        } catch (e) {
            console.log(e.message as string)
        }
    }

    static is( item:number ) {
        const cart = this.get()
        return cart.index.indexOf( item )
    }

    static quantity( item:number ) {
        const cart = this.get()
        const index = cart.index.indexOf( item )
        return index!=-1 ? cart.quantity[index] : 0
    }

    static add( item:number, quantity:number = 1 ) {
        const cart = this.get()
        const index = this.is(item)
        if ( index==-1 ) {
            cart.index.push(item)
            cart.quantity.push(quantity)
        } else {
            cart.quantity = cart.quantity.toSpliced(index, 1, cart.quantity[index]+quantity)
        }
        this.set(cart)
    }

    static remove( item:number, quantityToRemove:number = 1 ) {
        const cart = this.get()
        const index = this.is(item)
        if ( index!=-1 ) {
            const quantity = cart.quantity[index] - quantityToRemove
            if( quantity <= 0 ) {
                cart.index = cart.index.toSpliced(index,1)
                cart.quantity = cart.quantity.toSpliced(index,1)
            } else {
                cart.quantity = cart.quantity.toSpliced(index,1, cart.quantity[index]-1)
            }
        }
        this.set(cart)
    }

    static clear() {
        try{
            if (typeof window === 'undefined')  throw new Error("Window not defined")
            window.localStorage.setItem('temp_cart', JSON.stringify({
                index: [],
                quantity: []
            }))
        } catch (e) {
            console.log(e.message as string)
        }
    }
}