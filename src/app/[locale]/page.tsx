'use client';
import NavItem from "@/components/organisms/NavItem/NavItem";
import LanguageSwitcher from "@/components/atoms/LanguageSwitcher/LanguageSwitcher";
import Button from "@/components/atoms/Button/Button";
import HeroText from "@/components/molecules/HeroText/HeroText";
import UsText from "@/components/molecules/UsText/UsText";
import TestimonialSection from "@/components/organisms/TestimonialSection/TestimonialSection";
import FooderSection from "@/components/organisms/FooderSection/FooderSection";
import ContactSection from "@/components/organisms/ContactSection/ContactSection";
import { useTranslations } from "next-intl";

import "@/lib/i18n"; 





const HomePage = () => {

  const  t  = useTranslations("home");
  return (
    <>

      <section className="section  section-full hero-main-content ">
        <HeroText />
      <NavItem>
        <LanguageSwitcher/>

        <li>
          <a href="#us" className="">
             {t('nav.us')}
          </a>
        </li>
        <li>
          <a href="#testimonials" className="">
            {t('nav.testimonials')}
          </a>
        </li>
        <li>
          <a href="#food" className="">
            {t('nav.food')}
          </a>
        </li>
        <li>
          <a href="#contact" className="">
            {t('nav.contact')}
          </a>
        </li>
        <li>
          <Button type="link" destiny="/Login" className=" font-bold  items-center">
            {t('nav.login')}
          </Button>
        </li>
      </NavItem>
        
      </section>

      <div className="header-top-spacing">
        <div className="bg-separator"></div>
      </div>

      <section id="us" className="section section-haft header-top-spacing">
        <div className="header-top-spacing main-wrapper">
          <UsText />
        </div>
      </section>

      <div className="header-top-spacing">
        <div className="bg-separator"></div>
      </div>

      <section
        id="testimonials"
        className="testimonials section-haft header-top-spacing"
      >
        <div className="header-top-spacing main-wrapper">
          <TestimonialSection />
        </div>
      </section>

       <div className="header-top-spacing">
        <div className="bg-separator"></div>
      </div>

      <section
      id="food"
      className="section-haft header-top-spacing"
      >
        <div className="header-top-spacing main-wrapper">
          <FooderSection/>
        </div>
      </section>

     <div className="header-top-spacing">
        <div className="bg-separator"></div>
      </div>

      <section id="contact" className="contact header-top-spacing">
        <ContactSection />
      </section>
      





    </>






  );
}

export default HomePage;