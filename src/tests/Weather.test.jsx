/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Weather from '../pages/Weather/Index';
import { response } from './mockData';

const weather = response;

const text = 'São Manuel, BR';
const temp = '22 °C';
const humidity = '41%';
const wind = '2 km/h';
const feelsLike = '21°C';
const description = 'A previsão para hoje é de céu limpo.';

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
    expect(screen.getByText(feelsLike)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
