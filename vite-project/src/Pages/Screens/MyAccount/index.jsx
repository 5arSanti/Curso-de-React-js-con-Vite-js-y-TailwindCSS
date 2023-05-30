import React from "react"
import { ShoppingCartContext } from "../../../Context";
import { Link } from "react-router-dom";


function MyAccount() {
    const context = React.useContext(ShoppingCartContext);

    //Lama del localStorage al valor de account y lo parsea para poderlo manejar
    const account = localStorage.getItem("account");
    const parsedAccount = JSON.parse(account);

    //
    const [view, setView] = React.useState("user-info");


    //Formulario
    const form = React.useRef(null)
    const editAccount = () => {
        const formData = new FormData(form.current);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
        }
        const stringifiedAccount = JSON.stringify(data);
        localStorage.setItem("account", stringifiedAccount);
        context.setAccount(data);
        setView("user-info");
    }




    const renderInfo = () => {
        return(
            <>
                <div className="signUpTitle h-50 flex justify-center p-3 relative items-center  ">
                    <p className="text-lg font-bold ">Welcome <span className="underline">{parsedAccount?.name}</span> </p>
                </div>

                <div className="signUpInfo flex flex-col items-center py-8 px-10 justify-between">
                    <div className="flex flex-col w-full items-center">
                        <div className="w-full h-12 border-b-2 border-l-2 border-gray-200 rounded-lg flex items-center px-8 mb-3">
                            <span className="mx-2 font-semibold">Name:</span>
                            <span className="">{parsedAccount?.name}</span>
                        </div>
                        <div className="w-full h-12 border-b-2 border-l-2 border-gray-200 rounded-lg flex items-center px-8 mb-3">
                            <span className="mx-2 font-semibold">Email:</span>
                            <span className="">{parsedAccount?.email}</span>
                        </div>
                        <div className="w-full h-12 border-b-2 border-l-2 border-gray-200 rounded-lg flex items-center px-8 mb-3">
                            <span className="mx-2 font-semibold">Password:</span>
                            <span>{parsedAccount?.password}</span>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center">
                        <Link className="w-full">
                            <button className="w-full h-12 bg-white border border-black font-semibold rounded-lg mb-3"
                            onClick={() => setView("edit-user-info")}
                            >Edit Account</button>
                        </Link>
                        <Link to='/sign-in' className="w-full">
                            <button className="w-full h-12 text-red-400 bg-white border border-red-400 font-semibold rounded-lg"
                            onClick={() => {context.handleSignOut()}}
                            >Sign Out</button>
                        </Link>
                    </div>

                </div>
            </>

        );
    }
    const renderEditAccount = () => {
        return(
            <>  
                <div className="signUpTitle h-50 flex justify-center p-3 relative items-center  ">
                    <p className="text-lg font-bold ">Edit Account</p>
                </div>
                <div className="signUpInfo flex flex-col items-center py-8 px-10 justify-between">
                    <form ref={form}  className="flex flex-col w-full items-center">
                        <div className="w-full h-12 bg-gray-200 rounded-lg flex items-center px-8 mb-3">
                            <label htmlFor="name" className="mx-2 font-semibold">Name:</label>
                            <input type="text" id="name" name="name" defaultValue={parsedAccount?.name} />
                        </div>

                        <div className="w-full h-12 bg-gray-200 rounded-lg flex items-center px-8 mb-3">
                            <label htmlFor="email" className="mx-2 font-semibold">Email:</label>
                            <input type="email" id="email" name="email" defaultValue={parsedAccount?.email}/>
                        </div>

                        <div className="w-full h-12 bg-gray-200 rounded-lg flex items-center px-8 mb-3">
                            <label htmlFor="password" className="mx-2 font-semibold">Password:</label>
                            <input type="password" id="password" name="password" defaultValue={parsedAccount?.password}/>
                        </div>

                        <Link className="w-full mt-8 mb-3">
                            <button className="w-full h-12 bg-black text-white font-semibold rounded-lg"
                            onClick={() => editAccount()}>Save Changes</button>
                        </Link>
                    </form>

                    <div className="w-full flex flex-col items-center">
                        <Link className="w-full">
                            <button className="w-full h-12 bg-white border border-black font-semibold rounded-lg"
                            onClick={() => setView("user-info")}
                            >Account</button>
                        </Link>
                    </div>
                </div>
            </>
            
        );
    }

    const renderView = (() => view === "edit-user-info" ? renderEditAccount() : renderInfo());

    return(
        <>
            {renderView()}
        </>
    )
}

export {MyAccount};