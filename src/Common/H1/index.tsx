import { H1Props } from '../types';
import './style.css';

export default function H1({ title }: H1Props) {
    return (
        <h1>{title}</h1>
    )
}