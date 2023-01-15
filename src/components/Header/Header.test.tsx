import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('Header component', () => {
  test('Renders an Header component', async () => {
    render(<Header />);

    // Check that renders the banner image
    const image = screen.getByAltText(/SpaceX banner/);
    expect(image).toBeInTheDocument();
  });
});
