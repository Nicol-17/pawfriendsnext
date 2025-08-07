import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import NavItem from './NavItem';

vi.mock('next/image', () => ({
    default: (props: any) => {
        return <img {...props} />
    }
}));

const menuItems = (
    <>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
    </>
);

describe('NavItem', () => {
    it('render the logo and the hamburger button', () => {
        render(<NavItem>{menuItems}</NavItem>)

        const logo = screen.getByAltText(/pawfriends logo/i);
        expect(logo).toBeInTheDocument();

        const toggleButton = screen.getByLabelText(/toggle menu/i)
        expect(toggleButton).toBeInTheDocument();


    }),
        it('Should open the menu when toggle button is clicked', () => {
            render(
                <NavItem>
                    <li><a href="/test">Test</a></li>

                </NavItem>
            );

            const toggleButton = screen.getByLabelText(/toggle menu/i);
            fireEvent.click(toggleButton);

            const menuItem = screen.getByRole("link", { name: /test/i });
            expect(menuItem).toBeVisible();

        }),

        it("should close the menu when a list item is clicked", () => {
            render(
                <NavItem>
                    <li><button>Item Button</button></li>
                </NavItem>
            );

            const toggleButton = screen.getByLabelText(/toggle menu/i);
            fireEvent.click(toggleButton); 

            const button = screen.getByRole("button", { name: /item button/i });
            fireEvent.click(button); 

            const menu = screen.getByTestId("nav-menu");
            expect(menu.className).toMatch(/hidden/); 
        });

})