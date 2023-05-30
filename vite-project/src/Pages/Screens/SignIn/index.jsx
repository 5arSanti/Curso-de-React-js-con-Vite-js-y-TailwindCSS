import React from "react";

import { Link, Navigate } from "react-router-dom";
import "./styles.css";
import { ShoppingCartContext } from "../../../Context";


function SignIn() {
    const context = React.useContext(ShoppingCartContext);

    //Lama del localStorage al valor de account y lo parsea para poderlo manejar
    const account = localStorage.getItem("account");
    const parsedAccount = JSON.parse(account);

    //
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true;
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

    //
    const [view, setView] = React.useState("user-info");


    const handleSignIn = () => {
        const stringifiedSignOut = JSON.stringify(false);
        localStorage.setItem("sign-out", stringifiedSignOut)
        context.setSignOut(false);
        return <Navigate replace to={"/"}/>
    }

    //Formulario
    const form = React.useRef(null)
    const createAccount = () => {
        const formData = new FormData(form.current);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
        }
        const stringifiedAccount = JSON.stringify(data);
        localStorage.setItem("account", stringifiedAccount);
        context.setAccount(data);
        handleSignIn();
    }




    const renderLogin = () => {
        return(
            <>
                <div className="signUpTitle h-50 flex justify-center p-3 relative items-center  ">
                    <p className="text-lg font-bold ">Welcome <span className="underline">{parsedAccount?.name}</span> </p>
                </div>

                <div className="signUpInfo flex flex-col items-center py-8 px-10 justify-between">
                    <div className="flex flex-col w-full items-center">
                        <div className="w-full h-12 border-b-2 border-l-2 border-gray-200 rounded-lg flex items-center px-8 mb-3">
                            <span className="mx-2 font-semibold">Email:</span>
                            <span className="">{parsedAccount?.email}</span>
                        </div>
                        <div className="w-full h-12 border-b-2 border-l-2 border-gray-200 rounded-lg flex items-center px-8 mb-3">
                            <span className="mx-2 font-semibold">Password:</span>
                            <span>{parsedAccount?.password}</span>
                        </div>
                        <Link to="/" className="w-full mt-8 mb-3">
                            <button className="w-full h-12 bg-black text-white font-semibold rounded-lg"
                            onClick={() => handleSignIn()}
                            disabled={!hasUserAnAccount}>Log In</button>
                        </Link>
                        <div>
                            <a className="text-sm underline underline-offset-1" href="">Forgot my password</a>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center">
                        <div className="mb-3 ">
                            <p className="text-xs">Don't have an account? Click below </p>
                        </div>
                        <Link className="w-full">
                            <button className="w-full h-12 bg-white border border-black font-semibold rounded-lg"
                            onClick={() => setView("create-user-info")}
                            disabled={hasUserAnAccount}>Sign Up</button>
                        </Link>
                    </div>

                </div>
            </>

        );
    }
    const renderSignUp = () => {
        return(
            <>  
                <div className="signUpTitle h-50 flex justify-center p-3 relative items-center  ">
                    <p className="text-lg font-bold ">Create an Account</p>
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

                        <Link to="/" className="w-full mt-8 mb-3">
                            <button className="w-full h-12 bg-black text-white font-semibold rounded-lg"
                            onClick={() => createAccount()}>Create Account</button>
                        </Link>
                    </form>

                    <div className="w-full flex flex-col items-center">
                        <div className="mb-3 ">
                            <p className="text-xs">Already have an account? Click below </p>
                        </div>
                        <Link className="w-full">
                            <button className="w-full h-12 bg-white border border-black font-semibold rounded-lg"
                            onClick={() => setView("user-info")}
                            disabled={hasUserAnAccount}>Log In</button>
                        </Link>
                    </div>
                </div>
            </>
            
        );
    }

    const renderView = (() => view === "create-user-info" ? renderSignUp() : renderLogin());

    return(
        <>
            {renderView()}
        </>
    )
}

export {SignIn};