import { MdOutlineSwipeRight } from "react-icons/md"

import reactImg from '../imagens/react.png'
import js from '../imagens/javascript-logo-1.png'
import ts from '../imagens/typescript.png'

import style from './css/Tecnologies.module.css'

export const Tecnologies = () => {
    return (
        <>
        <h1 className={style.titlePage}  id="tecnologies">
            Principais Tecnologias
        </h1>

        <p className={style.slide}><MdOutlineSwipeRight size={45}/></p>

        <div className={style.tecnologies}><div>
            

            </div>

            <div className={style.card}>
                <h1 className={style.rsCard} >
                    React.JS
                </h1>
                <p>
                    Este presentinho do facebook deixado para nós! Uma biblioteca que agiliza a construção de páginas web através de seus componentes reutilizáveis.
                </p>
                <img src={reactImg} className={style.rsImage} />
            </div>

            <div className={style.card}>
                <h1 className={style.jsCard}>
                    JavaScript
                </h1>
                <p>
                Minha linguagem de programação predileta quando o assunto é desenvolvimento Web.<br/>
                Utilizo muito para criar dinamismo e interações nas páginas.
            </p>

            <img src={js}/>

            </div>
            
            <div className={style.card}>
                <h1 className={style.tsCard}>
                    TypeScript
                </h1>
                <p>
                    Uso quando necessário melhorar a robustez e deixar o meu código mais limpo e com fácil manutenção.
                </p>
                <br/>
                <br/>
                <br/>
                <img src={ts}/>
            </div>
        </div>
        </>
    )
}