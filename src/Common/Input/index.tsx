import './style.css';
import { InputProps } from '../types';

export default function Input({ type, placeholder, label, refference }: InputProps) { 
    return (
        <div className='input-container'>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} ref={refference}/>
        </div>
    )
}