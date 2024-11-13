import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { firestore } from '../../firebase';
import { addDoc, collection } from '@firebase/firestore';
import './style.css';
import Input from "../../Common/Input";
import Textarea from '../../Common/Textarea';
import { SectionProps } from '../../Common/types';
import SvgImage from '../../Common/SvgImage';

export default function ContactForm({ sectionRef, id }: SectionProps) {
    const { t } = useTranslation();

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const serviceRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null); // Estado para feedback
    const ref = collection(firestore, 'contacts');

    const handleSave = async (e: React.FormEvent) => { 
        e.preventDefault();

        let data = {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            service: serviceRef.current?.value,
            message: messageRef.current?.value
        }

        try {
            await addDoc(ref, data);
            setFeedbackMessage(t("formSuccess")); 
        } catch (e) {
            console.error(e);
            setFeedbackMessage(t("formError")); 
        }
    }
    
    return (
        <section className="contact-form-container" id={id} ref={sectionRef}>
            <div className="form-container">
                <h2>{t("contactTitle")}</h2>
                <form onSubmit={handleSave}>
                    <Input 
                        type='text' 
                        placeholder={t("namePlaceholder")} 
                        label={t("name")}
                        refference={nameRef}          
                    />
                    <Input 
                        type='email' 
                        placeholder={t("emailPlaceholder")} 
                        label={t("email")}
                        refference={emailRef}           
                    />
                    <Input 
                        type='text' 
                        placeholder={t("servicePlaceholder")}
                        label={t("service(s)")}
                        refference={serviceRef}                        
                    />
                    <Textarea 
                        rows={5} 
                        placeholder={t("messagePlaceholder")} 
                        label={t("message")}
                        refference={messageRef}                    
                    />
                    <button type='submit'>{t("send")}</button>
                </form>
                {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}
            </div>
            <SvgImage src='svg/contact.svg' alt='Contact' />
        </section>
    )
}
