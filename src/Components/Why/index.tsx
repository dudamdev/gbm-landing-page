import { useTranslation } from 'react-i18next';
import './style.css';
import H2 from '../../Common/H2';
import Card from '../../Common/Card';
import Button from '../../Common/Button';
import { SectionProps } from '../../Common/types';

interface WhyProps extends SectionProps {
    scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
    contactSection: React.RefObject<HTMLDivElement>;
}

export default function Why({ id, sectionRef, scrollToSection, contactSection }: WhyProps) {
    const {t} = useTranslation();
    
    return (
        <section className='section-container' id={id} ref={sectionRef}>
            <H2 title={t("whyTitle")} />
            <div className='section-card-container'>
                <Card
                    src='svg/personalized.svg'
                    alt='icon'
                    title={t("whyCardOneTitle")}
                    list={t("whyCardOneList", { returnObjects: true }) as string[]}
                />
                <Card
                    src='svg/global.svg' 
                        alt='globe illustration' 
                        title={t("whyCardTwoTitle")}
                        list={t("whyCardTwoList", { returnObjects: true }) as string[]} 
                />
                <Card 
                    src='svg/support.svg' 
                    alt='support illustration' 
                    title={t("whyCardThreeTitle")}
                    list={t("whyCardThreeList", { returnObjects: true }) as string[]} 
                />
                <Card 
                    src='svg/success.svg' 
                    alt='success illustration' 
                    title={t("whyCardFourTitle")}
                    list={t("whyCardFourList", { returnObjects: true }) as string[]} 
                />
            </div>
            <Button color='yellow-button' title={t("getStarted")} onClick={(e) => { e.preventDefault(); scrollToSection(contactSection)}} />
        </section>
    )
}