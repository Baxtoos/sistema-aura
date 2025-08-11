import { useState, useEffect } from "react";

export default function Carregamento() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <div className="w-[100vw] h-[100vh] absolute z-10 opacity-40 bg-black flex justify-center items-center">
                <div className="w-[70px] h-[70px] bg-white rounded-full flex justify-center items-center relative animate-spin">
                    <div className="w-[60px] h-[60px] bg-black rounded-full">

                    </div>
                    <div className="absolute bg-black right-0 w-10 h-10">

                    </div>
                </div>
            </div>
        </>
    )
}