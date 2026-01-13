import cartIcon from "../assets/images/icon-add-to-cart.svg";
import increaseIcon from "../assets/images/icon-increment-quantity.svg";
import decreaseIcon from "../assets/images/icon-decrement-quantity.svg";

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

type DesertsData = {
    image: DesertsImg;
    name: string;
    category: string;
    price: number;
};

interface DesertProps {
    dessertsDataProp: DesertsData[];
    addToCartFunc: (item: CartItem) => void;
    cartItemsData: CartItem[];
    qtyInc: (name: string) => void;
    qtyDec: (name: string) => void;
}

function Desserts({
    dessertsDataProp,
    addToCartFunc,
    cartItemsData,
    qtyInc,
    qtyDec,
}: DesertProps) {
    function makeCartItem(item: DesertsData) {
        const cartItem: CartItem = {
            name: item.name,
            thumbnail: item.image.thumbnail,
            quantity: 1,
            price: item.price,
        };

        addToCartFunc(cartItem);
    }

    return (
        <section>
            <h1 className="font-bold text-4xl mb-5">Desserts</h1>
            <section className="grid gap-4">
                {dessertsDataProp.map((dessert) => {
                    const cartItem = cartItemsData.find(
                        (cart) => cart.name === dessert.name
                    );
                    const quantity = cartItem?.quantity ?? 0;

                    return (
                        <div key={dessert.image.mobile}>
                            <div
                                className={`rounded-lg overflow-hidden ${quantity >= 1 && "border-3 border-Red"}`}
                            >
                                <img
                                    src={dessert.image.mobile}
                                    alt={`image of serving of a ${dessert.name}`}
                                    className="md:hidden"
                                />
                                <img
                                    src={dessert.image.tablet}
                                    alt={`image of serving of a ${dessert.name}`}
                                    className="hidden md:block lg:hidden"
                                />
                                <img
                                    src={dessert.image.desktop}
                                    alt={`image of serving of a ${dessert.name}`}
                                    className="hidden lg:block"
                                />
                            </div>
                            <article className=" relative">
                                <div>
                                    {quantity < 1 ? (
                                        <button
                                            className="border rounded-full border-Rose-500 flex gap-1 items-center justify-center bg-Rose-50 h-10 w-1/2  -translate-y-1/2 translate-x-1/2 cursor-pointer"
                                            type="button"
                                            onClick={() =>
                                                makeCartItem(dessert)
                                            }
                                        >
                                            <img src={cartIcon} alt="" />{" "}
                                            <p className="text-xs font-semibold text-Rose-900">
                                                Add to Cart
                                            </p>
                                        </button>
                                    ) : (
                                        <div className="bg-Red border border-Red rounded-full flex items-center justify-between px-3 h-10 w-1/2 -translate-y-1/2 translate-x-1/2 cursor-pointer">
                                            <button
                                                type="button"
                                                className="border rounded-full h-4 w-4 flex justify-center items-center border-Rose-100"
                                                onClick={() =>
                                                    qtyDec(dessert.name)
                                                }
                                            >
                                                <img
                                                    src={decreaseIcon}
                                                    alt=""
                                                />
                                            </button>
                                            <span className="font-semibold text-Rose-100 text-sm">
                                                {quantity}
                                            </span>
                                            <button
                                                type="button"
                                                className="border rounded-full h-4 w-4 flex justify-center items-center border-Rose-100"
                                                onClick={() =>
                                                    qtyInc(dessert.name)
                                                }
                                            >
                                                <img
                                                    src={increaseIcon}
                                                    alt=""
                                                />
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <p className="text-xs text-Rose-400 font-medium mb-1">
                                    {dessert.category}
                                </p>
                                <p className="text-sm font-semibold text-Rose-900 mb-1">
                                    {dessert.name}
                                </p>
                                <p className="text-sm text-Red font-semibold ">
                                    ${dessert.price.toFixed(2)}
                                </p>
                            </article>
                        </div>
                    );
                })}
            </section>
        </section>
    );
}

export default Desserts;
