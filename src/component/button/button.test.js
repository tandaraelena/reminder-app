import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Button } from '.';
import '@testing-library/jest-dom/extend-expect'

describe('@Button', () => {
// after each test afterEach(cleanup) will clean things up
afterEach(cleanup);

  it('should render a button', () => {
    const { debug, container, ...all } = render(<Button/>);
    // console.log(Object.keys(all))
    // debug(container.firstChild)
    const button = container.firstChild;

    expect(button).toHaveTextContent('hi')
  })

  it('should receive a click event', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button onClick={onClick}/>);
    const button = getByTestId('nice-button');
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled();
  })
})

// getBy* queries return the first matching node for a query, and throw an error if no elements match or if more than one match is found

// getAllBy* queries return an array of all matching nodes for a query, and throw an error if no elements match.

// queryBy* queries return the first matching node for a query, and return null if no elements match. This is useful for asserting an element that is not present. This throws if more than one match is found

// queryAllBy* queries return an array of all matching nodes for a query, and return an empty array ([]) if no elements match.

// findBy* queries return a promise which resolves when an element is found which matches the given query. The promise is rejected if no element is found or if more than one element is found after a default timeout of 4500ms. If you need to find more than one element, then use findAllBy.

// findAllBy* queries return a promise which resolves to an array of elements when any elements are found which match the given query. The promise is rejected if no elements are found after a default timeout of 4500ms.