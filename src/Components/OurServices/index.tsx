import { useTranslation } from 'react-i18next';
import './style.css';
import H2 from '../../Common/H2';
import Card from '../../Common/Card';
import Button from '../../Common/Button';
import { SectionProps } from '../../Common/types';

interface OurServicesProps extends SectionProps {
    scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
    contactSection: React.RefObject<HTMLDivElement>;
}

export default function OurServices({ id, sectionRef, scrollToSection, contactSection }: OurServicesProps) {
    const {t} = useTranslation();

    return (
        <section className='section-container' id={id} ref={sectionRef}>
            <H2 title={t("servicesTitle")} />
            <div className='section-card-container'>
                <Card
                    src='svg/career.svg'
                    alt='north illustration'
                    title={t("serviceTitleOne")}
                    list={t("serviceListOne", { returnObjects: true }) as string[]}
                />
                <Card
                    src='svg/cv-opt.svg'
                    alt='cv illustration'
                    title={t("serviceTitleTwo")}
                    list={t("serviceListTwo", { returnObjects: true }) as string[]}
                />
                <Card
                    src='svg/job.svg'
                    alt='dialog illustration'
                    title={t("serviceTitleThree")}
                    list={t("serviceListThree", { returnObjects: true }) as string[]}
                />
                <Card
                    src='svg/recruit.svg'
                    alt='magnifying glass illustration'
                    title={t("serviceTitleFour")}
                    list={t("serviceListFour", { returnObjects: true }) as string[]}
                />
            </div>
            <Button color='yellow-button' title={t("getStarted")} onClick={(e) => { e.preventDefault(); scrollToSection(contactSection)}} />
        </section>
    )
}