import React from "react";
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import Loading from "../pages/Loading/Index";

const text = 'Carregando o clima em sua localidade...'

describe('Tests for Loading component', () => {
    it('Should Loading to be render', () => {
        render(<Loading />);
        expect(screen.getByText(text)).toBeInTheDocument();
    });
});
