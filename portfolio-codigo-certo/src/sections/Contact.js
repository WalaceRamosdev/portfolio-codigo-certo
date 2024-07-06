import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import style from './css/Contact.module.css'

export const Contact = () => {
    return (
        <div id="contato" className={style.contact}>
            <ul>
                <li>
                    <h1>Tel: </h1>
                    <h2>(21) 9 9906-4502</h2>
                </li>
                <li>
                    <h1>Email: </h1>
                    <h2>contatowalace.dev@gmail.com</h2>
                </li>
            </ul>

            <div  className={style.icon}>
                <ul>
                    <li>
                        <a href='https://www.instagram.com/walacedev.contato/' target='_blank'>
                            <FaInstagram size={50}/>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/WalaceRamosdev' target='_blank'>
                            <FaGithub size={50} />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/walace-ramos-dev/' target='_blank'>
                            <FaLinkedin size={50} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}