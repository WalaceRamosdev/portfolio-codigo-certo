import style from './css/AboutMe.module.css'
import perfilPB from '../imagens/perfilPB.svg'

export const AboutMe = () => {
    return (
        <main className={style.aboutme}>

            <img src={perfilPB} className={style.profile}/>

                <div className={style.information}>
                    <h2>
                        Walace Ramos
                    </h2>
                    <h1>
                        Front-End Developer
                    </h1>
                    <p>
                    Desenvolvendo interfaces e interações para sites e aplicativos. Utilizo <span>TypeScript</span> e <span>ReactJS</span> para garantir uma experiência intuitiva e funcional em diversos dispositivos e navegadores.
                    </p>
                    <button className={style.btn}>GitHub</button>
                </div>


        </main>
    )
}