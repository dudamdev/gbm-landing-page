import { useTranslation } from 'react-i18next';
import './style.css';
import { SectionProps } from '../../Common/types';

export default function How({ id, sectionRef }: SectionProps) {
    const {t} = useTranslation();
    
    return (
        <section className="how-section-container" id={id} ref={sectionRef}>
            <h3>{t("howPreTitle")}</h3>
            <h2>{t("howTitle")}</h2>
            <div className="steps-container">
                <div className="steps">
                    <img src="svg/select.svg"/>
                    <h4>{t("howTitleOne")}</h4>
                    <ul>
                        <li>{t("howOneStepOne")}</li>
                        <li>{t("howOneStepTwo")}</li>
                    </ul>
                </div>
                <div className="steps">
                    <img src="svg/submit.svg"/>
                    <h4>{t("howTitleTwo")}</h4>
                    <ul>
                        <li>{t("howTwoStepOne")}</li>
                        <li>{t("howTwoStepTwo")}</li>
                    </ul>
                </div>
                <div className="steps">
                    <img src="svg/meeting.svg"/>
                    <h4>{t("howTitleThree")}</h4>
                    <ul>
                        <li>{t("howThreeStepOne")}</li>
                        <li>{t("howThreeStepTwo")}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}