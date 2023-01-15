import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardDetail } from '.';

describe('CardDetail component', () => {
  test('Renders an CardDetail component', async () => {
    render(<CardDetail label='Test' detail='Detail test' />);

    // Check that renders the label
    const label = screen.getByText(/Test/);
    expect(label).toBeInTheDocument();

    // Check that renders the detail
    const detail = screen.getByText(/Detail/);
    expect(detail).toBeInTheDocument();
  });
});
