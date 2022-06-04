import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockRouter = ({children}) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
};

const addTodo = (inputEl, btn, title) => {
  fireEvent.change(inputEl, { target: {value: title}});
  fireEvent.click(btn);
}

describe("Todo integration tests", () => {
  it('dont know yet', async () => {
    // render the whole TODO component with some mock routing
    render(
      <MockRouter>
        <Todo />
      </MockRouter>
    );

    // select elements we need
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const addButton = screen.getByRole('button', { name: /add/i });
    
    // firing events
    addTodo(inputElement, addButton, 'todoItem 1');
    addTodo(inputElement, addButton, 'todoItem 2');
    addTodo(inputElement, addButton, 'todoItem 3');
    const newTodoItemArray = await screen.findAllByTestId('todoItem');
    
    expect(inputElement.value).toBe('');
    expect(newTodoItemArray.length).toBe(3);
  })

  it('not completed tasks shouldn\'t have line-through', async () => {
    render(
      <MockRouter>
        <Todo />
      </MockRouter>
    );
    // select elements we need
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const addButton = screen.getByRole('button', { name: /add/i });
    
    // firing events
    addTodo(inputElement, addButton, 'todoItem 1');
    const newTodoItem = await screen.findByTestId('todoItem');
    
    expect(inputElement.value).toBe('');
    // expect(newTodoItem.classList.contains('todo-item-active')).toBe(false);
    expect(newTodoItem).not.toHaveClass('todo-item-active')
  });

  it('after the todo item is clicked it switches to completed style', async () => {
    render(
      <MockRouter>
        <Todo />
      </MockRouter>
    );
    // select elements we need
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const addButton = screen.getByRole('button', { name: /add/i });
    
    // firing events
    addTodo(inputElement, addButton, 'todoItem 1');
    const newTodoItem = await screen.findByTestId('todoItem');
    
    expect(inputElement.value).toBe('');

    fireEvent.click(newTodoItem);

    // expect(newTodoItem.classList.contains('todo-item-active')).toBe(true);
    expect(newTodoItem).toHaveClass('todo-item-active')

  });
});