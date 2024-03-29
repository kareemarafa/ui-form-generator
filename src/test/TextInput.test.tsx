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
 * 1- Render TextInput with type text
 * 2- Render TextInput with type number
 * 3- Render TextInput with type email
 */

test('Render TextInput with type text', () => {
  const route = '/some-route';
  const metadataSeed: Metadata = {fields: [{id: 'name', type: 'text', label: 'Name'}]};
  const dataSeed = {name: 'Bob'};
  renderWithRouter(<GeneratedForm data={dataSeed} metadata={metadataSeed}/>, {route});
  const inputControl = screen.getByTestId('name') as HTMLInputElement;
  expect(inputControl.value).toEqual('Bob')
});

test('Render TextInput with type number', () => {
  const route = '/some-route';
  const metadataSeed: Metadata = {fields: [{id: 'age', type: 'number', label: 'Age'}]};
  const dataSeed = {age: 42};
  renderWithRouter(<GeneratedForm data={dataSeed} metadata={metadataSeed}/>, {route});
  const inputControl = screen.getByTestId('age') as HTMLInputElement;
  expect(inputControl.value).toEqual('42')});

test('Render TextInput with type email', () => {
  const route = '/some-route';
  const metadataSeed: Metadata = {fields: [{id: 'email', type: 'email', label: 'Email'}]};
  const dataSeed = {email: 'bob@app.com'};
  renderWithRouter(<GeneratedForm data={dataSeed} metadata={metadataSeed}/>, {route});
  const inputControl = screen.getByTestId('email') as HTMLInputElement;
  expect(inputControl.value).toEqual('bob@app.com')});

