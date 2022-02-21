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

/**
 * Test Cases
 * 1- Should generate form with all provided fields
 */

test('Should generate form with all provided fields', () => {
  const route = '/some-route';
  const {data, metadata} = FormOneData;
  renderWithRouter(<GeneratedForm data={data} metadata={metadata}/>, {route});
  metadata.fields.forEach(field => {
    const inputControl = screen.getByTestId(field.id) as HTMLInputElement;
    // Formatted to string to prevent fails for data types 42, "42"
    expect((inputControl.value).toString()).toEqual((data[field.id]).toString())
  })
});
