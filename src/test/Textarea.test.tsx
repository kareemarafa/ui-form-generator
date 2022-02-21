import React from 'react';
import {render, screen} from '@testing-library/react';
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
 * 1- Render Active Textarea
 * 2- Render disabled Textarea
 */

test('Render Active Textarea', () => {
  const route = '/some-route';
  const metadataSeed: Metadata = {fields: [{id: 'description', type: 'textarea', label: 'Description'}]};
  const dataSeed = {description: 'some data ...'};
  renderWithRouter(<GeneratedForm data={dataSeed} metadata={metadataSeed}/>, {route});
  const inputControl = screen.getByTestId('description') as HTMLInputElement;
  expect(inputControl.value).toEqual(dataSeed.description)});

test('Render disabled Textarea', () => {
  const route = '/some-route';
  const metadataSeed: Metadata = {fields: [{id: 'description', type: 'textarea', label: 'Description', disabled: true}]};
  const dataSeed = {description: 'some data ...'};
  renderWithRouter(<GeneratedForm data={dataSeed} metadata={metadataSeed}/>, {route});
  const inputControl = screen.getByTestId('description') as HTMLInputElement;
  expect(inputControl).toHaveAttribute('disabled');
});

