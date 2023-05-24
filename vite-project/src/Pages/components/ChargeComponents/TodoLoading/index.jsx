import "./TodoLoading.css";

function TodoLoading(){
    return(
        <div className="container bg-white cursor-pointer w-56 h-65">
            <figure className="animation relative mb-2 w-full h-3/4 rounded-lg">
                <span className="animation2 categoryContainer absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                </span>
                <div className="animation w-full h-full object-cover rounded-lg"></div>
                <div className="animation2 absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"></div>
            </figure>
            <p className="flex justify-between items-center">
                <span className="animation textContainer1 rounded-lg text-sm font-light">
                </span>
                <span className="animation textContainer2 rounded-lg text-lg font-bold">
                </span>
            </p>
        </div>
    );
}

export {TodoLoading};