import Button from "../../atoms/Button/Button";
import Image from "next/image";



import { useTranslations } from "next-intl";
import "./HeroText.css"; 

function HeroText() {
    const  t  = useTranslations("home");

    return (
        <section className="hero-section">

            <Image
                src="/images/Rama-secondary.png"
                width={500}
                height={500}
                className="absolute bottom-0 -right-2.5 z-[1] w-[140px] scale-x-[-1]"
                alt="Rama secondary"
            />
            <Image
                src="/images/Rama.png"
                width={500}
                height={500}
                className="absolute top-0 right-0 w-[150px] z-[0] h-[auto]"
                alt="Rama primary"
            />

            <div className="hero-main-content">
                <Image
                    src="/images/modelDogs.png"
                    width={530}
                    height={550}
                    className="Dog"
                    alt="Dog"
                />



                <div className="main-wrapper full-column">
                    <div className="text-primary "> 
                        <h1 className="grid text-left text-[2.5rem] text-principle text-chewy  ">
                            <span>{t('hero.titleLine1')}</span>
                            <span className="flex gap-[2ch] items-center ms-[2ch]">
                                {t('hero.titleLine2')} <small className="text-[1.5rem]"> {t('hero.titleLine3')}</small>
                            </span>
                        </h1>
                        <div></div>

                        <p className="paragraph-primary">
                            {t('hero.paragraph1')}<br />
                        </p>

                        <p className="paragraph-secondary"> {t('hero.paragraph2')}</p>

                        <Button type="link" destiny="/Signup" className="text-white font-quicksand no-underline font-bold items-center">
                            {t('hero.signup')}
                        </Button>

                        
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HeroText;


