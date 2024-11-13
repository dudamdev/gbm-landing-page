import './style.css'
import { TextareaProps } from "../types"

export default function Textarea({ rows, placeholder, label, refference }: TextareaProps) {
    return (
        <div className="textarea-container">
            <label>{label}</label>
            <textarea rows={rows} placeholder={placeholder} ref={refference}/>
        </div>
    )

}