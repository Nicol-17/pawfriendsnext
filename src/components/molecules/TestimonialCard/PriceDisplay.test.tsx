import { currencyFormat } from '@/utils/currencyformat';
import { render, screen } from '@testing-library/react';
import { expect } from "vitest";
import PriceDisplay from './PriceDisplay';
import { vi } from 'vitest';
import * as nextIntl from 'next-intl';
import { localeToCurrency, exchangeRates } from '@/utils/currencyformat.constants';

// Mock el hook useLocale
vi.mock('next-intl', async () => {
    const actual = await vi.importActual<typeof nextIntl>('next-intl');
    return {
        ...actual,
        useLocale: vi.fn()
    };
});

describe('PriceDisplay', () => {
    it('renders formatted price in English (USD)', () => {
        vi.mocked(nextIntl.useLocale).mockReturnValue('en');
        render(<PriceDisplay amount={100} />);

        const currency = localeToCurrency['en'];
        const rate = exchangeRates[currency];

        const expected = currencyFormat(100 * rate, currency, 'en');

        expect(screen.getByText(expected)).toBeInTheDocument();

    });


});
