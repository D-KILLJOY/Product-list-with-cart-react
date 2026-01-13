import emptyIllustration from "../assets/images/illustration-empty-cart.svg";
import removeIcon from "../assets/images/icon-remove-item.svg";
import carbonIcon from "../assets/images/icon-carbon-neutral.svg";

type CartItem = {
    name: string;
    thumbnail: string;
    quantity: number;
    price: number;
};
interface CartProps {
    orderToggle: () => void;
    mainCart: CartItem[];
    removeFunc: (name: string) => void;
    cartItemTotal: number;
    cartPriceTotal: number;
}

function Cart({
    orderToggle,
    mainCart,
    removeFunc,
    cartItemTotal,
    cartPriceTotal,
}: CartProps) {
    return (
        <section className="my-10 p-5">
            <h2 className="text-Red text-2xl font-bold">
                Your Cart <span>({cartItemTotal})</span>
            </h2>
            <article>
                {mainCart.length < 1 ? (
                    <div className="flex flex-col justify-center items-center my-10">
                        <img src={emptyIllustration} alt="" />
                        <p className="font-semibold text-Rose-400 mt-5">
                            Your added items will appear here
                        </p>
                    </div>
                ) : (
                    <>
                        <ul className="flex flex-col gap-7">
                            {mainCart.map((item) => (
                                <li
                                    className="flex justify-between items-center"
                                    key={item.name}
                                >
                                    <div>
                                        <p className="text-xs font-semibold text-Rose-900 mb-2 ">
                                            {item.name}
                                        </p>
                                        <div className="flex gap-3 text-xs">
                                            <p className="text-Red font-semibold">
                                                {item.quantity}x
                                            </p>
                                            <p className="text-Rose-300 font-medium">
                                                @ ${item.price}
                                            </p>
                                            <p className="font-semibold text-Rose-400">
                                                $
                                                {(
                                                    item.price * item.quantity
                                                ).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeFunc(item.name)}
                                        className="border border-Rose-400 rounded-full w-4 h-4 flex justify-center items-center"
                                    >
                                        <img src={removeIcon} alt="" />
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="my-10 flex justify-between items-center ">
                            <p className="text-xs text-Rose-900">Order Total</p>
                            <p className="font-bold text-Rose-900 text-xl">
                                ${cartPriceTotal.toFixed(2)}
                            </p>
                        </div>

                        <div className="flex justify-center items-center gap-2">
                            <img src={carbonIcon} alt="" />
                            <p className="text-Rose-900 text-xs">
                                This is a{" "}
                                <span className="font-bold">
                                    carbon-neutral
                                </span>{" "}
                                delivery
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={orderToggle}
                            className="my-8 border border-Red bg-Red text-xs font-semibold text-Rose-100 w-full h-10 rounded-full cursor-pointer"
                        >
                            Confirm Order
                        </button>
                    </>
                )}
            </article>
        </section>
    );
}

export default Cart;
