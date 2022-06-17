import React from "react";
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import Weather from "../pages/Weather/Index";
import { response } from "../tests/mockData";

const weather = response;

const text = 'São Manuel, BR';
const temp = '22.08 °C';
const humidity = '41%';
const wind = '1.86 km/h';
const feels_like = '21.41°C';
const description = 'céu limpo';

describe('Tests for Weather component', () => {
    it('Should Weather app to be render', () => {
        render(<Weather weather={weather} />);
        expect(screen.getByText(text)).toBeInTheDocument();
    });
    it('Should Weather info to be render', () => {
        render(<Weather weather={weather} />);
        expect(screen.getByText(temp)).toBeInTheDocument();
        expect(screen.getByText(humidity)).toBeInTheDocument();
        expect(screen.getByText(wind)).toBeInTheDocument();
        expect(screen.getByText(feels_like)).toBeInTheDocument();
        expect(screen.getByText(description)).toBeInTheDocument();
    });
});
