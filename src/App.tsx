import { useState } from "react";

import Desserts from "./Components/Desserts";
import Cart from "./Components/Cart";
import Confirmation from "./Components/Confirmation";
import dessertData from "../data.json";

type CartItem = {
    name: string;
    thumbnail: string;
    quantity: number;
    price: number;
};

type DesertsImg = {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
};

type DessertsData = {
    image: DesertsImg;
    name: string;
    category: string;
    price: number;
};

function App() {
    const desserts: DessertsData[] = dessertData;

    console.log(desserts);

    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    function addToCart(item: CartItem) {
        setCartItems((prev) => [...prev, item]);
    }

    function increaseQty(name: string) {
        setCartItems((prev) =>
            prev.map((item) =>
                item.name === name
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    }

    function decreaseQty(name: string) {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.name === name
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    }

    console.log(dessertData);
    console.log(cartItems);

    return (
        <main className="p-4 relative">
            <Desserts
                dessertsDataProp={desserts}
                cartItemsData={cartItems}
                addToCartFunc={addToCart}
                qtyInc={increaseQty}
                qtyDec={decreaseQty}
            />
            <Cart />
            <Confirmation />
        </main>
    );
}

export default App;
