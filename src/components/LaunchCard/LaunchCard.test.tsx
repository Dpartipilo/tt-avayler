import React from 'react';
import { render, screen } from '@testing-library/react';
import { LaunchCard } from '.';
import getLaunch from '../../../pages/api/getLaunch';
import { createMocks } from 'node-mocks-http';

describe('LaunchCard component', () => {
  test('Renders an LaunchCard component with data coming from API handler with mocked data', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    // call handler
    getLaunch(req, res);

    // Render LaunchCard component
    render(<LaunchCard {...JSON.parse(res._getData())} />);

    // Check that heading of the card is rendered
    const launchName = screen.getByRole('heading', { name: 'FalconSat' });
    expect(launchName).toBeInTheDocument();

    // Check that one of the details label is rendered
    const launchDateLabel = screen.getByText('Launched on:');
    expect(launchDateLabel).toBeInTheDocument();

    // Check that one of the details data is rendered
    const launchDateDetail = screen.getByText('Fri Mar 24 2006');
    expect(launchDateDetail).toBeInTheDocument();

    //Check that the handler is responding with a status 200 and parts of the mocked data
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        name: 'FalconSat',
        date_utc: '2006-03-24T22:30:00.000Z',
        success: false,
      })
    );
  });
});
