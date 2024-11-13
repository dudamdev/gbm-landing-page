import './style.css'
import { PretitleProps } from "../types";

export default function Pretitle({ title }: PretitleProps) {
    return (
        <div className='pretitle-container'>
            <div className="border"></div>
            <p className="pretitle">{title}</p>
        </div>
    )
}