'use client';
import BaseForm from "@/components/organisms/BaseForm/BaseForm";
import type { Field } from "@/components/organisms/BaseForm/BaseForm";
import Image from "next/image";
import NavItem from "@/components/organisms/NavItem/NavItem";
import Button from "@/components/atoms/Button/Button";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/atoms/LanguageSwitcher/LanguageSwitcher";
import { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

function SignUp() {
    const t = useTranslations("signup");
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const fields: Field[] = [
        {
            name: "FullName",
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
            name: "Phone",
            label: t('fields.phone.label'),
            type: "tel",
            placeholder: t('fields.phone.placeholder')
        },
        {
            name: "birthdate",
            label: t('fields.birthdate.label'),
            type: "date",
            placeholder: t('fields.birthdate.placeholder')
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

    //   const handleSignUpSubmit = async (FormData: Record<string, string>) => {
    //     try {
    //       const data = await signup(FormData);
    //       setsuccessMessage(data.message || "user created successfully");
    //       setErrorMessage("");

    //       Swal.fire({
    //         title: t("alert.title"),
    //         text: t("alert.message"),
    //         icon: "success",
    //         confirmButtonText: t("alert.button") || "OK",
    //         draggable: true
    //       });

    //       setTimeout(() => {
    //         navigate("/login");
    //       }, 2600);

    //     } catch (error: any) {
    //       setErrorMessage(error.message);
    //     };

    return (
        <>
            <NavItem>
                <LanguageSwitcher />
                <Button type="link" destiny="/Login" className="text-primary  text-quicksand font-bold items-center hover:bg-[#43bb6f] underline">
                    {t('buttonNav')}
                </Button>
            </NavItem>
            <section className="Login-container">
                <div className="background">
                    <div className="shape"></div>
                    <div className="shape"></div>
                </div>

                <div className="Form-container">
                    <h3>{t('title')}</h3>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}

                    {/* <BaseForm fields={fields} onSubmit={handleSignUpSubmit} buttonText={t('buttonForm')} className="style-login" /> */}



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