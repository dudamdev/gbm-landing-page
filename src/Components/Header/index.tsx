import { useTranslation } from 'react-i18next';
import Logo from "../../Common/Logo";
import Flag from '../../Common/Flag';
import './style.css';
import Button from "../../Common/Button";
import { HeaderProps } from "../../Common/types";

export default function Header({ scrollToSection, homeSection, aboutSection, howSection, servicesSection, contactSection, reference }: HeaderProps) {
    const { i18n, t } = useTranslation();

    const handleChangeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header ref={reference}>
            <Logo />
            <nav>
                <div className='nav-container'>
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(homeSection); }}>{t("home")}</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(aboutSection); }}>{t("about")}</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(howSection); }}>{t("howItWorks")}</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(servicesSection); }}>{t("services")}</a>
                    <Button title={t("contact")} color="yellow-button" onClick={(e) => { e.preventDefault(); scrollToSection(contactSection); }} />
                </div>

                {/* Seletor de idioma com bandeiras */}
                <div className="language-selector">
                    {i18n.language === 'en' ? (
                        <button onClick={() => handleChangeLanguage('pt-BR')} className="language-button">
                            <Flag alt='pt-br' src='brflag.svg' />
                        </button>
                    ) : (
                        <button onClick={() => handleChangeLanguage('en')} className="language-button">
                            <Flag alt='us-flag' src='usflag.svg' />
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
}
