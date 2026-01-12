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

    console.log(dessertData);
    console.log(cartItems);

    return (
        <main className="p-4">
            <Desserts dessertsDataProp={desserts} addToCartFunc={addToCart} />
            <Cart />
            <Confirmation />
        </main>
    );
}

export default App;
