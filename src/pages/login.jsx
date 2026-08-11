import loginbackground from "../assets/loginbackground.png"

export default function login() {
    return (
        <div className="w-full h-[600px] flex">
            <div className="w-[50%] h-full flex flex-col pt-10 pl-30">
                <p>Logo</p>
                <div className="pt-20">
                    <div className="w-100 h-[80px] border border-gray-400">
                        <p className="p-2 text-sm text-gray-500">Email</p>
                        <input className="border-none outline-none pb-1 pl-2 text-sm w-full" />
                    </div>
                    <div className="w-100 h-[80px] border border-gray-400">
                        <p className="p-2 text-sm text-gray-500">Passward</p>
                        <input className="border-none outline-none pb-1 pl-2 text-sm w-full"/>
                    </div>
                </div>


                {/* <p className="pt-20">Input Box</p> */}
                <p className="text-[15px] text-gray-500 pt-2">Forgot Your Passward?</p>
                <div className="pt-10">
                    <div className="w-30 bg-orange-400 py-2 px-1 text-sm flex justify-center items-center hover:bg-orange-500 transition-colors duration-500 cursor-pointer">
                        <p className="text-center text-white">Sign In</p>
                    </div>
                </div>
                <p className="pt-10 text-sm">© 2026 Virtuoso Learning Ltd</p>
                <div className="flex pt-2 gap-2">
                    <p className="font-bold text-orange-400 hover:text-orange-500 cursor-pointer ">Terms Of Use</p> |
                    <p className="font-bold text-orange-400 hover:text-orange-500 cursor-pointer"> Privacy Policy</p>
                </div>
                
            </div>
            <div className="w-[50%] h-full ">
                <img className="h-full w-full object-cover object-[50%_20%]" src={loginbackground} />
            </div>
        </div>
    )
}
