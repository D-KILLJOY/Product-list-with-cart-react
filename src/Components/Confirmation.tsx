import confirmedIcon from "../assets/images/icon-order-confirmed.svg";

type CartItem = {
    name: string;
    thumbnail: string;
    quantity: number;
    price: number;
};
interface ConfProps {
    orderToggle: () => void;
    mainCart: CartItem[];
    cartPriceTotal: number;
}

function Confirmation({ orderToggle, mainCart, cartPriceTotal }: ConfProps) {
    return (
        <section className="fixed inset-0 w-full h-screen flex justify-center items-center bg-black/60">
            <div className="bg-Rose-50 rounded-2xl py-8 px-5">
                <img
                    src={confirmedIcon}
                    alt="Green Check in a circle"
                    className="mb-6"
                />
                <h2 className="font-bold text-Rose-900 text-4xl mb-4">
                    Order Confirmed
                </h2>
                <p className="text-Rose-500 font-normal ">
                    We hope you enjoy your food!
                </p>

                <ul className="m-5 overflow-scroll max-h-70">
                    {mainCart.map((item) => (
                        <li
                            className="py-5 border-b border-b-Rose-100"
                            key={item.name}
                        >
                            <div className="flex items-center">
                                <img
                                    src={item.thumbnail}
                                    alt={`image of a serving of ${item.name}`}
                                    className="w-12 h-12 rounded me-4"
                                />
                                <div>
                                    <p className="text-sm text-Rose-900 font-bold mb-1">
                                        {item.name}
                                    </p>
                                    <p className="text-sm flex gap-4">
                                        <span className="text-Red font-semibold ">
                                            {item.quantity}x
                                        </span>
                                        <span className="text-Rose-400 font-medium">
                                            @ ${item.price}
                                        </span>
                                    </p>
                                </div>
                                <p className="ms-auto font-semibold text-Rose-900">
                                    ${(item.quantity * item.price).toFixed(2)}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className=" flex justify-between items-center px-5">
                    <p className="text-xs text-Rose-500 font-medium">
                        Order Total
                    </p>
                    <p className="font-bold text-Rose-900 text-xl">
                        ${cartPriceTotal.toFixed(2)}
                    </p>
                </div>

                <button
                    type="button"
                    onClick={orderToggle}
                    className="mt-10 border border-Red bg-Red text-sm font-semibold text-Rose-100 w-full h-12 rounded-full cursor-pointer"
                >
                    Start New Order
                </button>
            </div>
        </section>
    );
}

export default Confirmation;
