import React from "react";
import Logo from "../components/Logo";
import Carregamento from "../components/Carregamento";
function Login() {
    return (
        <>
        <Carregamento></Carregamento>
            <div className=" w-[50%] md:min-w-[400px] p-2 flex flex-col items-center gap-10">
                <div className="w-[480px]">
                    <Logo txt_class="text-2xl my-1" foto_class="w-6"></Logo>
                </div>
                <div className=" w-[480px] flex flex-col items-start">
                    <span className="md:h-auto font-semibold md:leading-[48px] leading-[40px] text-[30px]">
                        Seja bem vindo de volta!
                    </span>
                    <span className="text-[14px] font-stretch-75% italic opacity-60">
                        Faça Login para continuar usando o aplicativo
                    </span>
                </div>
                <form className="w-full h-full flex justify-center items-center flex-col gap-5 ">
                    <div className="w-[480px] h-[64px] bg-[var(--third)] rounded-[20px] flex-col flex p-3">
                        <label htmlFor="email" className="text-start text-[12px] opacity-70">Email:</label>
                        <input name="email" type="email" className="text-[15px] font-extralight outline-0" placeholder="Enter email"></input>
                    </div>
                    <div className="w-[480px] h-[64px] bg-[var(--third)] rounded-[20px] flex-col flex p-3">
                        <label htmlFor="email" className="text-start text-[12px] opacity-70">Senha:</label>
                        <input name="email" type="password" className="text-[15px] font-extralight outline-0" placeholder="Enter password"></input>
                    </div>
                    <div className="w-full flex justify-around text-[var(--emphasis)]">
                        <div>
                            <input type="checkbox" name="manter_conectado" className=""></input>
                            <label htmlFor="manter_conectado"> Mantenha-me conectado</label>
                        </div>
                        <span className="underline italic">Esqueci a senha</span>
                    </div>
                    <button className="w-[480px] h-[54px] rounded-[20px] font-extrabold">
                        Continue
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login