import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../../src/app/page';

test('checks if a word exists in MyComponent', () => {
    const { getAllByText } = render(<Home />);
    const wordElements = getAllByText((content, element) => {
      const hasText = (text) => element.textContent.includes(text);
      const isWordElement = hasText('Engineering');
      return isWordElement;
    });
  
    expect(wordElements).toHaveLength(5); // Make assertions on the number of elements
  });


/*
test('checks if a word exists in MyComponent', () => {
    const { getByText } = render(<Home />);
    const wordElement = getByText((content, element) => {
      // Use a custom function to match the text
      const hasText = (text) => element.textContent.includes(text);
      const isWordElement = hasText('Engineering');
      return isWordElement;
    });
  
    expect(wordElement).toBeInTheDocument();
  });

  


test('checks if a word exists in MyComponent', () => {
  const { getByText } = render(<Home/>);
  const wordElement = getByText('Engineering');

  expect(wordElement).toBeInTheDocument();
});

  */