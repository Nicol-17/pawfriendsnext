import Image from "next/image";
import BaseForm from "../BaseForm/BaseForm";
import type { Field } from "../BaseForm/BaseForm";
import { useTranslations } from "next-intl";

function ContactSection () {
   const  t  = useTranslations("home");

    const fields: Field[] = [
        {
            name: "name", 
            label : t("contact.fields.name.label"),
            type: "text", 
            placeholder : t("contact.fields.name.placeholder"),
        },
        {
            name: "email", 
            label :  t("contact.fields.email.label"), 
            type: "email", 
            placeholder : t("contact.fields.email.placeholder"), 
        },
        {
            name: "message", 
            label : t("contact.fields.message.label"), 
            type: "textarea", 
            placeholder : t("contact.fields.message.placeholder"),
        }
    ];

    const handleContactSubmit = (FormData: Record<string, string>) => {
        console.log("Form submitted:", FormData);
    } 

    return(
        <section className="flex flex-wrap md:flex-row flex-col text-center justify-between items-center px-6 md:px-40 py-4 gap-8" aria-label="Section contact">
            <div className="flex flex-[1_1_100%] md:flex-[1_1_10%] justify-center w-full">
                <Image 
                    src="/images/contact.png" 
                    width={350} 
                    height={350} 
                    alt="Contact" 
                    className="max-w-full h-auto"
                 />
                
            </div>

            <div className="flex flex-col justify-center w-full md:flex-[1_1_10%] ">
                <h2 className="text-chewy text-[2rem] mb-4">{t('contact.title')}</h2>
                <hr className="w-4/5 h-auto my-4 mx-auto border border-black rounded-[5px] bg-black opacity-50"/>
                    <div className="mt-px-2">
                        <BaseForm fields={fields} onSubmit={handleContactSubmit} buttonText={t('contact.button')}  />
                    </div>
            </div>
        </section>


    )
    
   

    
    
} 

export default ContactSection;


