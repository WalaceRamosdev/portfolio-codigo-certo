import style from './css/Objective.module.css'

export const Objective = () => {
    return (
        <div id="projects" className={style.objective}>
            <h1>Objetivos</h1>

            <div className={style.descricao}>
                <p>
                    Meu principal objetivo é estar perto de quem deseja alcançar lugares mais altos, e foi através deste pequeno projeto que vi a oportunidade perfeita para compartilhar um pouco do que sei com todos aqueles que ama escrever códigos.
                </p>
            </div>
        </div>
    )
}