import './style.css';
import { FeatureCardProps } from '../types';

export default function FeatureCard({ src, alt, width, height, title }: FeatureCardProps) {
    return (
        <div className='feature-card-container'>
            <img src={src} alt={alt} width={width} height={height} />
            <p>{title}</p>
        </div>
    )
}