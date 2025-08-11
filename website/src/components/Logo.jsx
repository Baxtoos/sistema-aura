import React from "react"
import ImgLogo from "../assets/logo.svg"
function Logo({ txt_class, foto_class }) {
    return (
        <>
            {txt_class && foto_class ? (
                <span className="logo">
                    <img src={ImgLogo} alt="" className={foto_class} />
                    <p className={txt_class}>AURA</p>
                </span>
            ) : (
                <span className="logo">
                    <img src={ImgLogo} alt="" className="w-6" />
                    <p className="text-3xl">AURA</p>
                </span>
            )}
        </>
    )
}

export default Logo