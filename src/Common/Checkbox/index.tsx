import './style.css';
import { CheckboxProps } from '../types';

export default function Checkbox({ src, alt, title }: CheckboxProps) {
    return (
        <div className='checkbox-container'>
            <img src={src} alt={alt} />
            <p>{title}</p>
        </div>
    )
}