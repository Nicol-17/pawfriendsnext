
import Image from "next/image";

import { useTranslations } from "next-intl";

function UsText() {
    const  t  = useTranslations("home");
    return (
        <section className="flex items-center justify-center gap-8 flex-wrap md:flex-nowrap">
            <Image
                src="/images/us.png"
                width={500}
                height={500}
                className="mission-img"
                alt="Us"
            />

            <div className="text-center text-quicksand text-primary">
                <h2 className="text-chewy text-2xl">{t('us.title')}</h2>
                <p className="max-w-[35ch] mx-auto">
                    {t("us.paragraph1")}

                </p>

                <p className="max-w-[35ch] mx-auto">
                    {t("us.paragraph2")}

                </p>
            </div>
        </section>
    );
}
export default UsText;