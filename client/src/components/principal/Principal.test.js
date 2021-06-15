import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Principal from './Principal'

describe("testing component" , () => {

  let component

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <Principal />
      </BrowserRouter>
    );
  })

  test('should render component and has correct text', () => {
    component.getByText("Welcome")
    
  })

  test('should has correct text', () => {
    expect(component.container).toHaveTextContent("Go Home");
  })
  
  
})