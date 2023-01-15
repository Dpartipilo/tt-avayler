import React from 'react';
import { render, screen } from '@testing-library/react';
import { LaunchList } from '.';

describe('LaunchList component', () => {
  test('Renders an LaunchList component', async () => {
    render(<LaunchList />);

    const ListTitle = screen.getByRole('heading', { name: 'Launches' });
    expect(ListTitle).toBeInTheDocument();
  });
});
