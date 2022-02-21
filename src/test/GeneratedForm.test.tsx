import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import {BrowserRouter} from 'react-router-dom'
import GeneratedForm from "../pages/GeneratedForm";
import FormOneData from "../data/FormOneData";

const renderWithRouter = (ui: any, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui, {wrapper: BrowserRouter})
}

test('Should generate form', () => {
  const route = '/some-route';
  const {data, metadata} = FormOneData;
  renderWithRouter(<GeneratedForm data={data} metadata={metadata}/>, {route});
  expect(screen.getByTestId('name')).toBeDefined()
});
