import "./styles.css"
const ProductDetail = () => {
    return (
        <aside className="productDetail flex flex-col bg-white fixed right-0 top-0 border-l border-black">
            <div className="flex justify-between items-center px-7 py-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>X</div>
            </div>
        </aside>
    );
}

export { ProductDetail };