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

  beforeEach(() => {
    render(
      <MockRouter>
        <FollowersList />
      </MockRouter>
    );
  })

  beforeAll(() => {
    console.log('runs once before all tests');
  })

  afterEach(() => {
    console.log('runs after each test');
  })

  afterAll(() => {
    console.log('runs once after all the tests');
  })

  it('find the first follower', async () => {

    const firstFollower = await screen.findByTestId('follower-0');

    expect(firstFollower).toBeInTheDocument();

  });


  it('render 5 followers', async () => {
    const followersArray = await screen.findAllByTestId(/follower/i);

    expect(followersArray.length).toBe(5);

  });
 })