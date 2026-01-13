import confirmedIcon from "../assets/images/icon-order-confirmed.svg";

function Confirmation() {
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
                    <li className="py-5 border-b border-b-Rose-100">
                        <div className="flex items-center">
                            <img
                                src="../../public/assets/images/image-baklava-thumbnail.jpg"
                                alt=""
                                className="w-12 h-12 rounded me-4"
                            />
                            <div>
                                <p className="text-sm text-Rose-900 font-bold mb-1">
                                    Classic Tiramisu
                                </p>
                                <p className="text-sm flex gap-4">
                                    <span className="text-Red font-semibold ">
                                        1x
                                    </span>
                                    <span className="text-Rose-400 font-medium">
                                        @ $5.50
                                    </span>
                                </p>
                            </div>
                            <p className="ms-auto font-semibold text-Rose-900">
                                $5.50
                            </p>
                        </div>
                    </li>
                </ul>
                <div className=" flex justify-between items-center px-5">
                    <p className="text-xs text-Rose-500 font-medium">
                        Order Total
                    </p>
                    <p className="font-bold text-Rose-900 text-xl">$46.50</p>
                </div>

                <button
                    type="button"
                    className="mt-10 border border-Red bg-Red text-sm font-semibold text-Rose-100 w-full h-12 rounded-full cursor-pointer"
                >
                    Start New Order
                </button>
            </div>
        </section>
    );
}

export default Confirmation;
