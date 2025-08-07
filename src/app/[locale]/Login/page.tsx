'use client';
import { useState } from "react";
import BaseForm from "@/components/organisms/BaseForm/BaseForm";
import type { Field } from "@/components/organisms/BaseForm/BaseForm";
import NavItem from "@/components/organisms/NavItem/NavItem";
import Button from "@/components/atoms/Button/Button";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/atoms/LanguageSwitcher/LanguageSwitcher";
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { loginUser } from "@/Services/auth";
import './style.css';
import { setCookie } from "cookies-next";


function Login() {
    const t = useTranslations("login");
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");

    const fields: Field[] = [
        {
            name: "email",
            label: t('fields.email.label'),
            type: "email",
            placeholder: t('fields.email.placeholder')
        },
        {
            name: "password",
            label: t('fields.password.label'),
            type: "password",
            placeholder: t('fields.password.placeholder')
        },
    ];

    const handleLoginSubmit = async (formData: Record<string, string>) => {
        try {
            const data = await loginUser(formData); 

            
            setCookie('authToken', data.session.access_token, {
                path: '/',
                
            });

            router.push('/Dashboard');
        } catch (err: any) {
            setErrorMessage(err.message); 
        }
    };


  

    return (
        <>
            <NavItem>
                <LanguageSwitcher />
                <Button type="link" destiny="/" className="text-white  text-quicksand  font-bold items-center hover:bg-[#43bb6f]">
                    {t('buttonNav')}

                </Button>
            </NavItem>

            <section className="Login-container">
                <div  className="Form-container">
                    <h3>{t('title')}</h3>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <BaseForm fields={fields} onSubmit={handleLoginSubmit} buttonText={t('button')} className="style-login flex flex-col " />

                    <div className="login-footer">
                        <p>{t('forgotPassword')}
                            <Link href="/Signup" aria-label="Sign up for a new account" className="text-[#43bb6f] hover:text-[#2a7d4c] p-2">
                                {t('signup')}
                            </Link>
                        </p>
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

export default Login;
