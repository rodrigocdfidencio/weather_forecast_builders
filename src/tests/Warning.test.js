import React from "react";
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import Warning from "../pages/Warning/Index";

const text = 'Por favor, habilite a localização no browser.'

describe('Tests for Warning component', () => {
    it('Should Warning to be render', () => {
        render(<Warning />);
        expect(screen.getByText(text)).toBeInTheDocument();
    });
});