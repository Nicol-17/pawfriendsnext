// import { render, screen } from '@testing-library/react';
// import HeroText from '@/components/molecules/HeroText/HeroText';
// import '@testing-library/jest-dom';


// jest.mock('next/image', () => ({
//   __esModule: true,
//   default: (props: any) => {
//     // return <img {...props} />;
//     return <img alt={props.alt} />;
//   },
// }));

// // Mock de next-intl
// jest.mock('next-intl', () => ({
//   useTranslations: () => (key: string) => {
//     // Devuelve la key para evitar errores
//     return key;
//   },
// }));

// describe('HeroText component', () => {
//   it('renderiza correctamente los títulos y párrafos', () => {
//     render(<HeroText />);


//     expect(screen.getByText('hero.titleLine1')).toBeInTheDocument();
//     expect(screen.getByText('hero.titleLine2')).toBeInTheDocument();
//     expect(screen.getByText('hero.titleLine3')).toBeInTheDocument();
//     expect(screen.getByText('hero.paragraph1')).toBeInTheDocument();
//     expect(screen.getByText('hero.paragraph2')).toBeInTheDocument();
//     expect(screen.getByText('hero.signup')).toBeInTheDocument();
//   });
// });
