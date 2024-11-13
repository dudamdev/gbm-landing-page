import { useTranslation } from 'react-i18next';
import './style.css';
import Pretitle from '../../Common/Pretitle';
import H2 from '../../Common/H2';
import Checkbox from '../../Common/Checkbox';
import SvgImage from '../../Common/SvgImage';
import { SectionProps } from '../../Common/types';

export default function About({ id, sectionRef }: SectionProps) { 
    const { t } = useTranslation();

    return (
        <section className='container' id={id} ref={sectionRef}>
            <SvgImage src='svg/about.svg' alt='about' />
            <div className='content-container'>
                <Pretitle title={t("aboutUs")}/>
                <H2 title={t("aboutTitle")}/>
                <p className='text-content'>{t("aboutDescriptionOne")}</p>
                <p className='text-content'>{t("aboutDescriptionTwo")}</p>
                <div className='check-box-container'>
                    <Checkbox src='svg/checkbox.svg' alt='checkbox' title={t("aboutListOne")}/>
                    <Checkbox src='svg/checkbox.svg' alt='checkbox' title={t("aboutListTwo")}/>
                    <Checkbox src='svg/checkbox.svg' alt='checkbox' title={t("aboutListThree")} />
                </div>
            </div>
        </section>
    )
}