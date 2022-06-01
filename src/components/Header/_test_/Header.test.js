import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed into title prop (getByText)', () => {
  // render the header component
  render(<Header title="My Header"/>);
  // select the heading in the component
  const headingElement = screen.getByText(/my header/i);
  // expect something from the heading
  expect(headingElement).toBeInTheDocument();
});


// it('get the Cats header by role', () => {
//   // render the header component
//   render(<Header title="My Header"/>);
//   // select the heading in the component
//   const headingElement = screen.getByRole('heading', { name: 'Cats'});
//   // expect something from the heading
//   expect(headingElement).toBeInTheDocument();
// });


// it('the component renders what is passed in with title prop)', () => {
//   // render the header component
//   render(<Header title="My Header"/>);
//   // select the heading in the component
//   const headingElement = screen.getByRole('heading', { name: /my header/i });
//   // expect something from the heading
//   expect(headingElement).toBeInTheDocument();
// });

// it('the component renders what is passed in with title prop', () => {
//   // render the header component
//   render(<Header title="My Header"/>);
//   // select the heading in the component
//   const headingElement = screen.getByTitle('Cats');
//   // expect something from the heading
//   expect(headingElement).toBeInTheDocument();
// });

// it('using test id', () => {
//   // render the header component
//   render(<Header title="My Header"/>);
//   // select the heading in the component
//   const headingElement = screen.getByTestId('h1-test');
//   // expect something from the heading
//   expect(headingElement).toBeInTheDocument();
// });

// // FIND BY TEST

// it('find by tests', async () => {
//   // render the header component
//   render(<Header title="My Header"/>);
//   // select the heading in the component
//   const headingElement = await screen.findByText(/my header/i);
//   // expect something from the heading
//   expect(headingElement).toBeInTheDocument();
// });

// // QUERY BY

// it('using query by for an element that is not there', async () => {
//   // render the header component
//   render(<Header title="My Header"/>);
//   // select the heading in the component
//   const headingElement = screen.queryByText(/dogs/i);
//   // using not to say it is not in the document
//   expect(headingElement).not.toBeInTheDocument();
// });

// // GET ALL BY 

// it('check there is exactly two heading elements present', async () => {
//   // render the header component
//   render(<Header title="My Header"/>);
//   // select the heading in the component
//   const headingElements = screen.getAllByRole('heading');
//   // using not to say it is not in the document
//   expect(headingElements.length).toBe(2);
// });


