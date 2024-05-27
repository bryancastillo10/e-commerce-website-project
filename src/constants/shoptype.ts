export interface ShopCardsProps {
    id: number;
    name: string;
    price: number;
    imgPath: string;
}

export interface QuantityButtonProps {
    id: number;
    quantity: number;
    addCartEvent: (id: number) => void;
    subCartEvent: (id: number) => void;
    removeCart: (id: number) => void;
}