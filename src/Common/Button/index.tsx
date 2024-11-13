import './Button.css';
import { ButtonProps } from '../types';

export default function Button({ title, color, onClick}: ButtonProps) {
    return (
        <a href="#" className={color} onClick={onClick}>{title}</a>
    )
}