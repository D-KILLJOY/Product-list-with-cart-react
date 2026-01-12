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
                        <div
                            key={dessert.image.mobile}
                            className="border border-Green"
                        >
                            <div className="rounded-lg overflow-hidden">
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
                            <article className="border border-Rose-400">
                                <div>
                                    {quantity < 1 ? (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                makeCartItem(dessert)
                                            }
                                        >
                                            <span>
                                                <img src={cartIcon} alt="" />{" "}
                                                Add to Cart
                                            </span>
                                        </button>
                                    ) : (
                                        <div className="bg-Red">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    qtyDec(dessert.name)
                                                }
                                            >
                                                <img
                                                    src={decreaseIcon}
                                                    alt=""
                                                />
                                            </button>
                                            <span>{quantity}</span>
                                            <button
                                                type="button"
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
                                <p>{dessert.category}</p>
                                <p>{dessert.name}</p>
                                <p>${dessert.price}</p>
                            </article>
                        </div>
                    );
                })}
            </section>
        </section>
    );
}

export default Desserts;
