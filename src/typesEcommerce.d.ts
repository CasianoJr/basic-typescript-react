type Product = {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number
    title: string,
}

type CartProduct = {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number
    title: string,
    count: number,
}

type ListProduct = Array<Product>
