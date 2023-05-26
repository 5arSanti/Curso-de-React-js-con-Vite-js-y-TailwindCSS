import { XMarkIcon } from "@heroicons/react/24/solid"
import "./styles.css"

const OrderCard = ({id, title, imageUrl, price, handleDelete}) => {
    return (
        <div className="orderCardContainer flex justify-between items-center py-1 pl-2 pr-3 mx-3 my-2 rounded-lg">
            <div className="flex items-center gap-4">
                <figure className="w-20 h-20">
                    <img className="w-fill h-full rounded-lg object-cover" src={imageUrl[0]} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-5">
                <p className="text-md font-semibold">${price}</p>
                <XMarkIcon className="h-6 g-6 text-black cursor-pointer"
                    onClick={() => {handleDelete(id)}}
                ></XMarkIcon>
            </div>
        </div>
    );
}

export { OrderCard };