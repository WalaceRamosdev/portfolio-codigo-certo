import Button from '../components/Button'

export const Card = ({image, title, description, link}) => {
    return (
        <div>
            <img src={image}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <Button text='Click-me' link={link}/>
        </div>
    )
}