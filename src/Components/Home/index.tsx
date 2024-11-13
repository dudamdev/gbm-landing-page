import { useTranslation } from 'react-i18next';
import './style.css';
import Pretitle from "../../Common/Pretitle";
import H1 from "../../Common/H1";
import SvgImage from '../../Common/SvgImage';
import Button from '../../Common/Button';
import { SectionProps } from '../../Common/types';

interface HomeProps extends SectionProps {
    scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
    servicesSection: React.RefObject<HTMLDivElement>;
    whySection: React.RefObject<HTMLDivElement>;
}

export default function Home({ id, sectionRef, scrollToSection, servicesSection, whySection }: HomeProps) {
    const {t} = useTranslation();

    return (
        <section className='container' id={id} ref={sectionRef}>
            <div className='content-container'>
                <Pretitle title={t("welcome")} />
                <H1 title={t("title")} />
                <p className="text-content">{t("description")}</p>
                <div className='button-container'>
                    <Button color='yellow-button' title={t("getStarted")} onClick={(e) => { e.preventDefault(); scrollToSection(servicesSection)}} />
                    <Button color='blue-button' title={t("learnMore")} onClick={(e) => { e.preventDefault(); scrollToSection(whySection)}} />
                </div>
            </div>
            <SvgImage src="svg/home.svg" alt="Home Illustration" />
        </section>

    )
}