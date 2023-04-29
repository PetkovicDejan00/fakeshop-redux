export interface IProduct {
    category: string,
    description: string,
    id: string,
    image: string,
    price: number,
    productQty: number,
    productTotalPrice: number,
    title: string,
    rating: {
        count: number,
        rate: number
    }
}

export interface ITokenProps {
    token: string | null,
    setToken: React.Dispatch<React.SetStateAction<string | null>>
}

export interface IAction {
    type: string,
    payload: IProduct,
    payloadID: string
}