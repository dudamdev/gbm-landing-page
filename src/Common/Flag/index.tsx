import './style.css'
import { SvgImageProps } from "../types"


export default function Flag({ src, alt }: SvgImageProps) {
    return (
        <img src={`svg/${src}`} alt={alt} className="flag-img"/>
    )
}