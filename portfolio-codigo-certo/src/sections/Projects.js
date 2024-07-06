import style from './css/Projects.module.css'
import { Button } from "../components/Button"

export const Projects = () => {
    return (
        <div className={style.projects}>
            <h1>
                Conheça meu Repositório.
                <br/>
                Tenho muitos projetos lá !
            </h1>

            <Button text='Repositório' link={'https://github.com/WalaceRamosdev?tab=repositories'}/>
        </div>
    )
}