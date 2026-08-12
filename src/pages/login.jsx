import { useState } from "react"
import loginbackground from "../assets/loginbackground.png"
import robinsharmaloginlogo from "../assets/robinsharmaloginlogo.svg"
import Alert from '@mui/material/Alert';

export default function login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

    const handleUserLogin = (e) => {
        e.preventDefault();

        const user = {
            email, password
        }

        // localStorage.setItem('userData',JSON.stringify(user));
        setShowSuccess(true);
        // setTimeout(() => {
        //     setShowSuccess(false);
        // }, 3000);
        // alert("Successfull Login");
        console.log(user);
    }
    return (
        <div className="w-full h-[700px] flex pt-30">
            <div className="relative w-full  xl:w-[50%] h-full flex flex-col pt-5 xl:pl-30 p-10">
                {/* <div className="pb-10" className="pb-10 transition-all duration-300 ease-in-out"
                    style={{
                        display: showSuccess ? 'flex' : 'none',
                        transform: showSuccess ? 'scale(1)' : 'scale(0.8)',
                        opacity: showSuccess ? 1 : 0
                    }}>
                    <div className="w-full bg-green-100 text-green-500 px-6 py-3 rounded-lg shadow-lg">
                        Successfully logged in!
                    </div>
                </div> */}
                <div className="pb-5 pt-5">
                    <Alert severity="success" variant="outlined" onClose={() => setShowSuccess(false)} style={{
                        display: showSuccess ? 'flex' : 'none'
                    }}>Successfully logged in!</Alert>
                </div>
                <img className="h-10 w-50" src={robinsharmaloginlogo} />
                <div className="pt-20">

                    <div className="w-full xl:w-100 h-[80px] border border-gray-400">
                        <p className="p-2 text-sm text-gray-500" value={email} type="email">Email</p>
                        <input className="border-none outline-none pb-1 pl-2 text-sm w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="w-full xl:w-100 h-[80px] border border-gray-400">
                        <p className="p-2 text-sm text-gray-500" type="password" >Passward</p>
                        <input className="border-none outline-none pb-1 pl-2 text-sm w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>


                {/* <p className="pt-20">Input Box</p> */}
                <p className="text-[15px] text-gray-500 pt-2 cursor-pointer">Forgot Your Passward?</p>
                <div className="pt-10">
                    <div className="w-30 bg-orange-400 py-2 px-1 text-sm flex justify-center items-center hover:bg-orange-500 transition-colors duration-500 cursor-pointer">
                        <p className="text-center text-white" onClick={handleUserLogin}>Sign In</p>
                    </div>
                </div>
                <p className="pt-10 text-sm">© 2026 Virtuoso Learning Ltd</p>
                <div className="flex pt-2 gap-2">
                    <p className="font-bold text-orange-400 hover:text-orange-500 cursor-pointer ">Terms Of Use</p> |
                    <p className="font-bold text-orange-400 hover:text-orange-500 cursor-pointer"> Privacy Policy</p>
                </div>
                {showSuccess && (
                    <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
                        Successfully logged in!
                    </div>
                )}
            </div>
            <div className="hidden w-[50%] xl:flex h-full">
                <img className="h-full w-full object-cover object-[50%_30%]" src={loginbackground} />
            </div>
        </div>
    )
}
