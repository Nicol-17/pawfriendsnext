'use client';
import BaseForm from "@/components/organisms/BaseForm/BaseForm";
import type { Field } from "@/components/organisms/BaseForm/BaseForm";
import Image from "next/image";
import NavItem from "@/components/organisms/NavItem/NavItem";
import Button from "@/components/atoms/Button/Button";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/atoms/LanguageSwitcher/LanguageSwitcher";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "@/Services/auth";
import './style.css';


import Swal from "sweetalert2";

function SignUp() {
    const t = useTranslations("signup");
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const fields: Field[] = [
        {
            name: "fullname",
            label: t('fields.name.label'),
            type: "text",
            placeholder: t('fields.name.placeholder')
        },
        {
            name: "email",
            label: t('fields.email.label'),
            type: "email",
            placeholder: t('fields.email.placeholder')

        },
        {
            name: "phone",
            label: t('fields.phone.label'),
            type: "tel",
            placeholder: t('fields.phone.placeholder')
        },
        {
            name: "birthdate",
            label: t('fields.birthdate.label'),
            type: "date",
            placeholder: t('fields.birthdate.placeholder'),
            
        },

        {
            name: "country",
            label: t('fields.country.label'),
            type: "select",
            options: [
                { label: t('fields.country.options.AR'), value: "AR" },
                { label: t('fields.country.options.FR'), value: "FR" },
                { label: t('fields.country.options.CO'), value: "CO" },
                { label: t('fields.country.options.DE'), value: "DE" },

            ],
        },
        {
            name: "password",
            label: t('fields.password.label'),
            type: "password",
            placeholder: t('fields.password.placeholder')
        },
    ];

    const handleSignUpSubmit = async (formData: Record<string, string>) => {
        try {
            const { message } = await signup(formData)
            setSuccessMessage(message)
            setErrorMessage("")

            Swal.fire({
                title: t("alert.title"),
                text: t("alert.message"),
                icon: "success",
                confirmButtonText: t("alert.button") || "OK",
            })

            setTimeout(() => {
                router.push("/Login")
            }, 2600)

        } catch (error: any) {
            setErrorMessage(error.message)
        }
    }

    return (
        <>
            <NavItem>
                <LanguageSwitcher />
                <Button type="link" destiny="/Login" className="text-white  text-quicksand  font-bold items-center hover:bg-[#43bb6f]">
                    {t('buttonNav')}
                </Button>
            </NavItem>
            <section className="Signup-container">
                <div className="background">
                    <div className="shape"></div>
                    <div className="shape"></div>
                </div>

                <div className="Form-container">
                    <div className="Form-left">
                        <h3 className="text-primary text-4xl">{t('title')}</h3>
                    </div>
                    <div className="Form-right">
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        {successMessage && <p className="success-message">{successMessage}</p>}

                        <BaseForm fields={fields} onSubmit={handleSignUpSubmit} buttonText={t('buttonForm')} className="style-signup grid grid-cols-2 gap-4 w-full" />
                    </div>




                </div>
                <Image
                    src="/images/Rama-secondary.png"
                    width={500}
                    height={500}
                    className="absolute bottom-0 -right-2.5 z-[1] w-[140px] scale-x-[-1]"
                    alt="Rama secondary"
                />
            </section>
            <div className="bg"></div>

        </>

    );
}


export default SignUp;

