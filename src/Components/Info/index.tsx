import { useTranslation } from 'react-i18next';
import './style.css';

export default function Info() { 
    const {t} = useTranslation();

    return (
        <div className='section-info-container'>
            <div className='text-icon-container'>
                <img src='svg/hired.svg'/>
                <div className='text-info'>
                    <h3>900+</h3>
                    <p>{t("infoOne")}</p>
                </div>
            </div>
            <div className='text-icon-container'>
                <img src='svg/projects.svg'/>
                <div>
                    <h3>500+</h3>
                    <p>{t("infoTwo")}</p>
                </div>
            </div>
            <div className='text-icon-container'>
                <img src='svg/experience.svg'/>
                <div>
                    <h3>7 years+</h3>
                    <p>{t("infoThree")}</p>
                </div>
            </div>
            <div className='text-icon-container'>
                <img src='svg/delivered.svg'/>
                <div>
                    <h3>2000+</h3>
                    <p>{t("infoFour")}</p>
                </div>
            </div>
        </div>
    )
}