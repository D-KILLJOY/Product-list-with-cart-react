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

    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [orderStat, setOrderStat] = useState<"order" | "confirmed">("order");

    function toggleOrderState() {
        setOrderStat((prev) => (prev === "order" ? "confirmed" : "order"));
    }

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

    function removeItem(name: string) {
        setCartItems((prev) => prev.filter((item) => item.name !== name));
    }

    const cartTotalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const cartTotalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    function startNewOrder() {
        toggleOrderState();
        setCartItems([]);
    }

    return (
        <main className="p-4 mx-auto w-full max-w-300 relative grid md:p-10 md:grid-cols-3">
            <div className="md:col-span-2">
                <Desserts
                    dessertsDataProp={desserts}
                    cartItemsData={cartItems}
                    addToCartFunc={addToCart}
                    qtyInc={increaseQty}
                    qtyDec={decreaseQty}
                />{" "}
            </div>
            <Cart
                orderToggle={toggleOrderState}
                mainCart={cartItems}
                removeFunc={removeItem}
                cartItemTotal={cartTotalItems}
                cartPriceTotal={cartTotalPrice}
            />
            {orderStat === "confirmed" && (
                <Confirmation
                    orderToggle={startNewOrder}
                    mainCart={cartItems}
                    cartPriceTotal={cartTotalPrice}
                />
            )}
        </main>
    );
}

export default App;
