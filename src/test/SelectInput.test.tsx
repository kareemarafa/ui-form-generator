import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import {BrowserRouter} from 'react-router-dom'
import GeneratedForm from "../pages/GeneratedForm";
import {Metadata} from "../interfaces";

const renderWithRouter = (ui: any, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui, {wrapper: BrowserRouter})
}

/**
 * Test Cases
 * 1- Render SelectInput
 * 2- Render SelectInput with value
 * 3- Render SelectInput with value changing
 */

const route = '/some-route';
const metadataSeed: Metadata = {
  fields: [{
    id: 'hobbies',
    type: 'select',
    label: 'Hobbies',
    options: [{id: 1, name: 'Ride a bike'}, {id: 2, name: 'Unit Testing'}]
  }]
};
const dataSeed = {
  hobbies: 1
};

test('Render SelectInput', () => {
  renderWithRouter(<GeneratedForm data={dataSeed} metadata={metadataSeed}/>, {route});
  const inputControl = screen.getByTestId('hobbies');
  expect(inputControl).toBeDefined()
});

test('Render SelectInput with value', () => {
  renderWithRouter(<GeneratedForm data={dataSeed} metadata={metadataSeed}/>, {route});
  const inputControl = screen.getByTestId('hobbies') as HTMLSelectElement;
  expect(inputControl.value).toEqual('1');
})

test('Render SelectInput with value changing', () => {
  renderWithRouter(<GeneratedForm data={dataSeed} metadata={metadataSeed}/>, {route});
  const inputControl = screen.getByTestId('hobbies') as HTMLSelectElement;
  const options = screen.getAllByTestId('select-option') as HTMLOptionElement[];
  fireEvent.change(inputControl, {target: {value: 2}})
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeTruthy();
})
