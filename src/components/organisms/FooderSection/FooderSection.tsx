import PriceDisplay from '@/components/molecules/TestimonialCard/PriceDisplay';
import TestimonialCard from '@/components/molecules/TestimonialCard/TestimonialCard';
import { useTranslations, useFormatter, useLocale } from 'next-intl';




function FooderSection() {
  const t = useTranslations("home");
 
  return (
    <section className="grid gap-8">
      <h2 className="text-center text-chewy  text-3xl">{t('food.title')}</h2>
      <div className="flex justify-evenly gap-20 flex-wrap">
        <TestimonialCard

          name={t('food.RoyalCanin.name')}
          comment={<PriceDisplay amount={5}/>}
          avatar="/images/RoyalCanine.jpg"
          rating={4}

        />
        <TestimonialCard
          name={t('food.Proplan.name')}
          comment={<PriceDisplay amount={5}/>}
          avatar="/images/ProPlan.jpg"
          rating={3}

        />
        <TestimonialCard
          name={t('food.NutraNuggets.name')}
          comment={<PriceDisplay amount={5}/>}
          avatar="/images/NutraNuggets.jpg"
          rating={4}

        />
      </div>


    </section>
  );


}
export default FooderSection;