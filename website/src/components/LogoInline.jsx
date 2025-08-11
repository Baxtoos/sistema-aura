import React from "react"
import ImgLogo from "../assets/logo.svg"
function Logo({ txt_class, foto_class }) {
    return (
        <>
            {txt_class && foto_class ? (
                <span className="in">
                    <img src={ImgLogo} alt="" className={foto_class + ` inline ml-1`} />
                    <p className={txt_class + ` inline-block mx-2 `}>AURA</p>
                </span>
            ) : (
                <span className="in">
                    <img src={ImgLogo} alt="" className="w-[23px] inline" />
                    <p className="text-3xl inline-block ml-2">AURA</p>
                </span>
            )}
        </>
    )
}

export default Logo