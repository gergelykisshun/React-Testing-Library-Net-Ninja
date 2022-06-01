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

describe('All the tests for the TodoFooter', () => {

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
  
    const paragraphElement = screen.getByTestId('myPara');
    expect(paragraphElement).toContainHTML('p');
    expect(paragraphElement).toBeVisible();
    expect(paragraphElement).toHaveTextContent('task');
    // using "not" keyword
    expect(paragraphElement).not.toHaveTextContent('dontbehere');
    //can access the properties of this element
    expect(paragraphElement.textContent).toBe('1 task left');
  });
})
