import { XMarkIcon } from "@heroicons/react/24/solid"
import "./styles.css"

const OrderCard = ({id, title, imageUrl, price, handleDelete}) => {
    let renderXMarkIcon;
    if (handleDelete) {
        renderXMarkIcon = <XMarkIcon className="h-6 g-6 text-black cursor-pointer" onClick={(event) => {handleDelete(event, id)}}></XMarkIcon>
    }

    return (
        <div className="orderCardContainer flex justify-between items-center py-1 pl-2 pr-3 mx-3 my-2 rounded-lg">
            <div className="flex items-center gap-4">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl[0]} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>

            <div className="flex items-center">
                <p className="text-md font-semibold mr-5">${price}</p>
                {renderXMarkIcon}
                {/* <XMarkIcon className="h-6 g-6 text-black cursor-pointer"
                    onClick={(event) => {handleDelete(event, id)}}
                ></XMarkIcon> */}
            </div>
        </div>
    );
}

export { OrderCard };