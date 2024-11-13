import { useTranslation } from 'react-i18next';
import './style.css';
import FeatureCard from '../../Common/FeatureCard';

export default function Feature() {
    const {t} = useTranslation();

    return (
        <div className='feature-container'>
            <FeatureCard src='svg/elevate.svg' alt='graph illustration' width='50' height='50' title={t("elevate")}/>
            <FeatureCard src='svg/cv.svg' alt='CV illustration' width='50' height='50' title={t("refine")}/>
            <FeatureCard src='svg/market.svg' alt='graph illustration' width='50' height='50' title={t("relocation")}/>
            <FeatureCard src='svg/business.svg' alt='graph illustration' width='50' height='50' title={t("solutions")}/>
        </div>
    )
}