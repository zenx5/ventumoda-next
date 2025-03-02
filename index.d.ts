type typeProduct = {
    id:         number
    price:      string
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