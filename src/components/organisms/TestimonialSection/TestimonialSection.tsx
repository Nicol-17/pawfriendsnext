import TestimonialCard from '@/components/molecules/TestimonialCard/TestimonialCard';
import "./TestimonialSection.css";

import { useTranslations } from 'next-intl';

function TestimonialSection() {
    const  t  = useTranslations("home");

    return (
        <section className="Testimonial-container">
            <h2>{t('testimonials.title')}</h2>
            <div className="Testimonial-cards-container">
                <TestimonialCard
                    name="Luna"
                    comment={t('testimonials.comment1')}
                    avatar="/images/person.svg"
                    rating={1}

                />

                <TestimonialCard
                    name="Leila"
                    comment={t('testimonials.comment2')}
                    avatar="/images/person.svg"
                    rating={5}

                />

                <TestimonialCard
                    name="Sara"
                    comment={t('testimonials.comment3')}
                    avatar="/images/person.svg"
                    rating={4}

                />

                


            </div>

        </section>
    )


}
export default TestimonialSection;