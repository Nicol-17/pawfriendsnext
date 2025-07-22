

import React from 'react';
import { useLocale } from 'next-intl';
import { exchangeRates, localeToCurrency } from '@/utils/exchangeRates';
import { currencyFormat } from '@/utils/currencyformat';

interface PriceDisplayProps {
  amount: number;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ amount }) => {
  const currentLocale = useLocale(); // detecta idioma actual, ej: 'en', 'es'
  const currency = localeToCurrency[currentLocale] || 'USD'; // convierte idioma a moneda
  const rate = exchangeRates[currency] ?? 1; // tasa de conversión
  const convertedAmount = amount * rate; // monto convertido
  const formattedPrice = currencyFormat(convertedAmount, currency, currentLocale); // formato final

  return <span>{formattedPrice}</span>;
};

export default PriceDisplay;
