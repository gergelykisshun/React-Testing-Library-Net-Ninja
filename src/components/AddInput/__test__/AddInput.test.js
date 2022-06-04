import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockSetTodo = jest.fn;

describe('All the tests for AddInput', () => {
  it('should render input element', async () => {
    // render the header component
    render(
      <AddInput
        todos={[]}
        setTodos={mockSetTodo}
      />
    );
    // select the heading in the component
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    // expect something from the heading
    expect(inputElement).toBeInTheDocument();
  });

  it('should be able to type into input', async () => {
    // render the header component
    render(
      <AddInput
        todos={[]}
        setTodos={mockSetTodo}
      />
    );
    // select the heading in the component
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

    // trigger type event
    fireEvent.change(inputElement, { target: { value: "Go shopping"} })

    // expect something from the heading
    expect(inputElement.value).toBe("Go shopping");
  });
});

it('should have empty input when ADD btn is clicked', async () => {
  render(
    <AddInput
      todos={[]}
      setTodos={mockSetTodo}
    />
  );

  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const addButton = screen.getByRole('button', { name: /add/i })

  fireEvent.change(inputElement, { target: { value: "Do something" } });
  fireEvent.click(addButton);

  expect(inputElement.value).toBe('');
})
