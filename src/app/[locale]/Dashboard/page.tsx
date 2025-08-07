'use client';
import type { Field } from "@/components/organisms/BaseForm/BaseForm";
import BaseForm from "@/components/organisms/BaseForm/BaseForm";
import Image from "next/image";
import Button from "@/components/atoms/Button/Button";
import NavItem from "@/components/organisms/NavItem/NavItem";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/atoms/LanguageSwitcher/LanguageSwitcher";
import LogoutButton from "@/components/atoms/LogoutButton/LogoutButton";
import './style.css'

function Dashboard() {
    const t = useTranslations("dashboard");
    const fields: Field[] = [
        {
            name: "DogName",
            label: t('fields.name.label'),
            type: "text",
            placeholder: t('fields.name.placeholder')

        },
        {
            name: "Age",
            label: t('fields.Age.label'),
            type: "text",
            placeholder: t('fields.Age.placeholder')
        },
        {
            name: "Species",
            label: t('fields.Species.label'),
            type: "select",
            options: [
                { label: t('fields.Species.options.dog'), value: "dog" },
                { label: t('fields.Species.options.cat'), value: "cat" },
                { label: t('fields.Species.options.bird'), value: "bird" },
                { label: t('fields.Species.options.fish'), value: "fish" },
            ],
        },
        {
            name: "Gender",
            label: t('fields.Gender.label'),
            type: "select",
            options: [
                { label: t('fields.Gender.options.male'), value: "male" },
                { label: t('fields.Gender.options.female'), value: "female" },
            ],
        },
        {
            name: "Condition",
            label: t('fields.Condition.label'),
            type: "text",
            placeholder: t('fields.Condition.placeholder')
        }



    ];
    const handleDashboardSubmit = (formData: Record<string, string>) => {
        console.log("form submited", formData);
    }

    return (
        <section className="flex flex-row bg-neutral text-chewy flex-wrap gap-8 min-h-screen p-8 relative items-center md:flex-row md-items-start  ">


            <NavItem>
                <LanguageSwitcher />
                {/* <Button type="link" destiny="/" className="no-underline font-bold flex-items-center  text-neutral text-quicksand ">
                    {t('buttonNavDashboard')}
                </Button> */}

                <LogoutButton />
            </NavItem>

            <Image
                src="/images/Rama.png"
                width={500}
                height={500}
                className="absolute top-0 right-0 w-[150px] z-[0] h-[auto] "
                alt="Rama primary"
            />



            <div className="flex-1 max-w-[300px] flex flex-col items-center mt-[140px] gap-4 mr-[20rem]">

                <h2 className="text-[3rem] ml-20">{t('title')}</h2>
                <h3 className="">Liliana</h3>

                <Image
                    src="/images/person.svg"
                    width={500}
                    height={500}
                    className="w-[170px] h-auto rounded-full object-cover ml-24"
                    alt="Rama primary"
                />

                <Button type="link" destiny="#" className="no-underline font-bold flex-items-center  text-neutral text-quicksand ">{t('buttonEdit')}</Button>
                <Button type="link" destiny="/Chat" className="no-underline font-bold flex-items-center  text-neutral text-quicksand ">{t('buttonChat')}</Button>

                <Image
                    src="/images/Rama-secondary.png"
                    width={500}
                    height={500}
                    className="absolute bottom-0 -right-2.5 z-[1] w-[140px] scale-x-[-1] "
                    alt="Rama secondary"
                />
            </div>


            <div className="form-container">
                <h2>{t('titleForm')}</h2>
                <BaseForm
                    fields={fields}
                    onSubmit={handleDashboardSubmit}
                    buttonText={t('buttonForm')}
                    className="style-dashboard"
                />
            </div>
        </section>
    );
}

export default Dashboard;





