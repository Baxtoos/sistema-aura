import { Link } from "react-router-dom"

export default function LinkLogin({ imgUrl, texto, pagina }) {
    return (
        <>
            <Link to={pagina} className='link'>
                <button className="w-[100%] h-[70px] flex items-center p-3 border-1 rounded-2xl gap-10 overflow-hidden border-[var(--secundary)]">
                    <div className="w-[60px] h-[60px] ">
                        <img src={imgUrl} alt="pagina" className="w-[60px] h-[60px]" />
                    </div>
                    <p>{texto}</p>
                </button>
            </Link>
        </>
    )
}