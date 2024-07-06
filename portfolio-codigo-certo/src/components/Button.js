import style from '../components/css-components/Button.module.css'

export const Button = ({text, link}) => {
    return (
        <a href={link} target="_blank">
            
            <button className={style.btn}>
                {text}
            </button>
        </a>
    )
}