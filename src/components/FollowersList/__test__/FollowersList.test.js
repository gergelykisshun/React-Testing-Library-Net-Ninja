import { render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom'

const MockRouter = ({children}) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
};

describe('FollowersList tests', () => { 
  it('find the first follower', async () => {
    render(
      <MockRouter>
        <FollowersList />
      </MockRouter>
    );

    const firstFollower = await screen.findByTestId('follower-0');

    expect(firstFollower).toBeInTheDocument();

  });


  it('render 5 followers', async () => {
    render(
      <MockRouter>
        <FollowersList />
      </MockRouter>
    );

    const followersArray = await screen.findAllByTestId(/follower/i);

    expect(followersArray.length).toBe(5);

  });
 })