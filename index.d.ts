type typeProduct = {
    id:         string
    price:      number
    currency:   string
    slug:       string
    status:     string
    href:       string
    title:      string
    content:    string
    excerpt:    string
}

type typeProductQuantifiable = typeProduct & {
    quantity:number
}

type typeClient = {
    id:         number
    name:       string
    email:      string
    phone:      string
    address:    string
}

type typeInvoices = {
    id:             number
    description:    string
    client:         typeClient
    products:       typeProductQuantifiable[]
    paymentMethod:  string
    paymentDetails: string
    total:          number
}