import { useState } from 'react';

const frases = [
    "O AURA é um sistema de auxílio à instituições de ensino na identificação e prevenção da evasão escolar.",
    "Através de uma análise abrangente, o AURA considera diversos fatores para oferecer uma visão clara sobre o risco de abandono de cada aluno.",
    "Com isso, escolas, professores e estudantes podem atuar de forma mais consciente e estratégica para garantir uma trajetória educacional mais sólida e inclusiva."
];

export default function SlidesFrases() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % frases.length);
    };

    return (
        <div className="flex flex-col md:w-[70%] ">
            <div className="text-left font-stretch-[75%] leading-8 overflow-hidden ">
                <p className="transition-opacity duration-500 ease-in-out opacity-100 mt-5 ">
                    {frases[index]}
                </p>
            </div>

            <div className="relative mt-4 md:mt-0">
                <button
                    className="w-[80px] h-[30px] flex justify-center items-center absolute md:right-[-100px]" onClick={nextSlide}>
                    Next
                </button>
            </div>
        </div>
    );
}
