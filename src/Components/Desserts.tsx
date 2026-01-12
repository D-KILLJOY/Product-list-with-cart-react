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
}

function Desserts({ dessertsDataProp, addToCartFunc }: DesertProps) {
    console.log(dessertsDataProp);
    return (
        <section>
            <h1 className="font-bold text-4xl mb-5">Desserts</h1>
            <section>
                {dessertsDataProp.map((dessert) => (
                    <div key={dessert.image.mobile}>
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
                        <div>
                            <div>
                                <button type="button">
                                    <span>
                                        <img src={cartIcon} alt="" /> Add to
                                        Cart
                                    </span>
                                </button>
                                <div>
                                    <button>
                                        <img src={decreaseIcon} alt="" />
                                    </button>
                                    <span>1</span>
                                    <button>
                                        <img src={increaseIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                            <p>{dessert.category}</p>
                            <p>{dessert.name}</p>
                            <p>${dessert.price}</p>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    );
}

export default Desserts;
