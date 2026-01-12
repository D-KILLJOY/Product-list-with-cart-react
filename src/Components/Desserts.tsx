import cartIcon from "../assets/images/icon-add-to-cart.svg";
import carbonIcon from "../assets/images/icon-carbon-neutral.svg";
import increaseIcon from "../assets/images/icon-increment-quantity.svg";
import decreaseIcon from "../assets/images/icon-decrement-quantity.svg";
import confirmedIcon from "../assets/images/icon-order-confirmed.svg";
import removeIcon from "../assets/images/icon-remove-item.svg";
import emptyIllustration from "../assets/images/illustration-empty-cart.svg";

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
                <div>
                    <img src="" alt="" />
                    <div>
                        <div>
                            <button>
                                <span>
                                    <img src="" alt="" /> Add to Cart
                                </span>
                            </button>
                            <div>
                                <button></button>
                                <span>1</span>
                                <button></button>
                            </div>
                        </div>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Desserts;
