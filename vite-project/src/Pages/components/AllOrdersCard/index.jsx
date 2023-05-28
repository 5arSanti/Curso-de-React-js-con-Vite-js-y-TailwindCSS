import { ChevronRightIcon } from "@heroicons/react/24/solid"
import "./styles.css"

const AllOrdersCard = ({ totalPrice, totalProducts, date }) => {

    return (
        <div className="ordersCardContainer flex justify-between items-center mx-3 mb-4 py-2 px-5 rounded-lg">
            <div className="flex justify-between w-full items-center ">
                <aside className="flex flex-col font-semibold">
                    <span>Total Products: {totalProducts}</span>
                    <span>{date}</span>
                </aside>
                <div className="flex">
                    <span className="font-semibold mr-3">${totalPrice}</span>
                    <ChevronRightIcon className="h-6 g-6 text-black"></ChevronRightIcon>
                </div>

            </div>
        </div>
    );
}

export { AllOrdersCard };