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

test('Render Active Textarea', () => {
  const route = '/some-route';
  const metadataSeed: Metadata = {fields: [{id: 'description', type: 'textarea', label: 'Description'}]};
  const dataSeed = {description: 'some data ...'};
  renderWithRouter(<GeneratedForm data={dataSeed} metadata={metadataSeed}/>, {route});
  const textarea = screen.getByTestId('description');
  expect(textarea).toBeDefined()
});

test('Render disabled Textarea', () => {
  const route = '/some-route';
  const metadataSeed: Metadata = {fields: [{id: 'description', type: 'textarea', label: 'Description', disabled: true}]};
  const dataSeed = {description: 'some data ...'};
  renderWithRouter(<GeneratedForm data={dataSeed} metadata={metadataSeed}/>, {route});
  const textarea = screen.getByTestId('description');
  expect(textarea).toHaveAttribute('disabled')
});

