import { Logo } from "../Logo";

export  function Header(){
        return(
            <div className="flex items-center justify-center w-full py-5 bg-gray-700 border-b border-gray-600 ">
                <Logo/>
            </div>
        )
}