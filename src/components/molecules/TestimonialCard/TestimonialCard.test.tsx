import { render, screen } from "@testing-library/react";
import TestimonialCard from "./TestimonialCard";
import { expect } from "vitest";

describe('TestimonialCard', () => {
    it("Renders name, avatar and coment", () => {
        render(
            <TestimonialCard
                name="Juan"
                comment="Excelent job"
                avatar="/avatar.png"
            />
        );

        expect(screen.getByText("Juan")).toBeInTheDocument();
        expect(screen.getByAltText("photo of Juan")).toBeInTheDocument();
        expect(screen.getByText("Excelent job")).toBeInTheDocument();
    }),

    it("renders correct number of filled stars based on rating", () => {
        render(
            <TestimonialCard
                name="Juan"
                comment="Excelent job"
                avatar="/avatar.png"
                rating={4}
            />
        );

        const filledStars = screen.getAllByText("★").filter((el) => 
            el.classList.contains("filled")
        );

        expect(filledStars).toHaveLength(4);
    })
})