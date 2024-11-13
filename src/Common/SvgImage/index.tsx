import './style.css'
import { SvgImageProps } from "../types"

export default function SvgImage({ src, alt }: SvgImageProps) {
    return (
        <img src={src} alt={alt} className="svg-image"/>
    )
}