import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockComponent = ({children}) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}

it('should render the correct amount of incomplete tasks', () => {
  render(
  <MockComponent>
    <TodoFooter numberOfIncompleteTasks={5} />
  </MockComponent>
  )

  const paragraphElement = screen.getByText(/5 tasks left/);

  expect(paragraphElement).toBeInTheDocument();
});


it('should render "task" when there is 1 task left', () => {
  render(
  <MockComponent>
    <TodoFooter numberOfIncompleteTasks={1} />
  </MockComponent>
  )

  const paragraphElement = screen.getByText(/1 task left/);
  expect(paragraphElement).toBeInTheDocument();
});