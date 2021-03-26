type Product = {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number
    title: string,
}

type ListProduct = Array<Product>

type StateObjectProduct = {
    productList: ListProduct
}