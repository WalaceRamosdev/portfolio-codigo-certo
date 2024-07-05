import style from './css/Header.module.css'

export const Header = () => {
    
    return (
        <header className={style.header}>
            <ul>
                <li>
                    aqui ficará uma logo
                </li>
            </ul>

            <ul>
                <li>Sobre mim</li>
                <li>Projeto</li>
                <li>Tecnologias</li>
                <li>Contato</li>
            </ul>
        </header>
    )
}