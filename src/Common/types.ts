export interface ButtonProps {
    title: string;
    color: string;
    onClick?: (e: any) => void;
}

export interface PretitleProps { 
    title: string;
}

export interface H1Props {
    title: string;
}

export interface SvgImageProps {
    src: string;
    alt: string;
}

export interface FeatureCardProps {
    src: string;
    alt: string;
    width: string;
    height: string;
    title: string;
}

export interface CheckboxProps {
    src: string;
    alt: string;
    title: string;
}

export interface CardProps {
    src: string;
    alt: string;
    title: string;
    list: string[];
}

export interface InputProps {
    type: string;
    placeholder: string;
    label: string;
    refference: React.RefObject<HTMLInputElement>;
}

export interface TextareaProps { 
    rows: number;
    placeholder: string;
    label: string;
    refference: React.RefObject<HTMLTextAreaElement>;

}

export interface HeaderProps { 
    scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
    homeSection: React.RefObject<HTMLDivElement>;
    aboutSection: React.RefObject<HTMLDivElement>;
    howSection: React.RefObject<HTMLDivElement>;
    servicesSection: React.RefObject<HTMLDivElement>;
    contactSection: React.RefObject<HTMLDivElement>;
    reference: React.RefObject<HTMLHeadElement>;
}

export interface SectionProps {
    id: string;
    sectionRef: React.RefObject<HTMLDivElement>;
    
}
