import './style.css';
import { CardProps } from '../types';

export default function Card({ src, alt, title, list }: CardProps) {
    return (
        <div className='card-container'>
            <img src={src} alt={alt} />
            <h3>{title}</h3>
            <ul>
                {list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}