import React from "react";
import Logo from "../components/Logo";
import LogoInline from "../components/LogoInline";
import SlidesFrases from "../components/SlidesFrases";
import LinkLogin from "../components/LinkLogin";
import ImgAlunos from "../assets/alunos.svg"
import ImgEscola from "../assets/escola.svg"
import ImgProfessor from "../assets/professor.svg"

import { Link } from "react-router-dom";

function Welcome() {
    return (
        <>
            {/* <Logo></Logo> */}
            <div className="md:w-[90%] md:h-auto md:pl-10 md:mb-0 h-[20dvh]">
                <div className="animate-[var(--slideInAnimation)] translate-x-[-100%] opacity-0">
                    <Logo txt_class="text-2xl my-1" foto_class="w-6"></Logo>
                </div>
            </div>
            <div className="min-h-[350px] md:px-10 flex md:justify-center items-center md:flex-row flex-col text-justify gap-40 md:w-[90%] relative">
                <div className="md:w-[50%] w-[70%] md:mt-20 md:h-auto h-[80dvh] ">
                    <p className="md:h-auto font-semibold md:leading-[48px] leading-[40px] text-[30px] animate-[var(--slideInAnimationDalay1)] translate-x-[-100%] opacity-0">
                        Seja Bem vindo ao <LogoInline></LogoInline>
                    </p>
                    <p className="text-[14px] font-stretch-75% italic animate-[var(--slideInAnimationDalay2)] translate-x-[-100%] opacity-0">
                        Análise Unificada de Risco de Abandono
                    </p>
                    <div className="animate-[var(--slideInAnimationDalay3)] translate-x-[-100%] opacity-0 min-h-[120px]">
                        <SlidesFrases></SlidesFrases>
                    </div>
                </div>
                <div className="w-[50%] md:h-auto h-[90dvh] flex gap-10 flex-col">
                    <p>Faça seu login e aproveite!</p>
                    <LinkLogin imgUrl={ImgAlunos} texto="Portal Aluno" pagina="/login"></LinkLogin>
                    <LinkLogin imgUrl={ImgProfessor} texto="Portal Professor" pagina="/login"></LinkLogin>
                    <LinkLogin imgUrl={ImgEscola} texto="Portal Instituição" pagina="/login"></LinkLogin>
                </div>
            </div>
        </>
    )
}

export default Welcome