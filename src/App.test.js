import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

// test('renders learn react link', () => {
//   render(<App />); // creates a virtual DOM for whatever jsx we pass as an argument
//   const linkElement = screen.getByText(/learn react/i); // screen accesses the virtual DOM we created
//   expect(linkElement).toBeInTheDocument(); // assertion
// });

// By role -> preferable, to make sure that elements are accessible to screen readers
// test('renders another react link', () => {
//   render(<App />); // creates a virtual DOM for whatever jsx we pass as an argument
//   const anotherLink = screen.getByRole('link', { name: /learn react/i });
//   expect(anotherLink).toBeInTheDocument(); // assertion
// });

test('button has correct initial color', () => {
	render(<App/>)
	const colorButton = screen.getByRole('button', { name: 'Change to blue'})
	expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

	// click button
	fireEvent.click(colorButton)

	// expect to have background color blue
	expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })

	// expect to text to change
	expect(colorButton.textContent).toBe('Change to red')
})

test('initial conditions', () => {
	render(<App/>)
	// button starts out enabled
	const colorButton = screen.getByRole('button', { name: 'Change to blue'})
	expect(colorButton).toBeEnabled()

	// checkbox starts unchecked
	const checkbox = screen.getByRole('checkbox')
	expect(checkbox).not.toBeChecked()
})

test('button functionality', () => {
	render(<App/>)

	const colorButton = screen.getByRole('button')
	const checkbox = screen.getByRole('checkbox', { name: 'Disable button'})

	fireEvent.click(checkbox)
	expect(colorButton).toBeDisabled()

	fireEvent.click(checkbox)
	expect(colorButton).toBeEnabled()
})

test('button turns gray if disabled', () => {
	render(<App/>)
	const colorButton = screen.getByRole('button')
	const checkbox = screen.getByRole('checkbox', { name: 'Disable button'})

	fireEvent.click(checkbox)
	expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })

	fireEvent.click(checkbox)
	expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
})


test('change color then disable', () => {
	render(<App/>)
	const colorButton = screen.getByRole('button', { name: 'Change to blue'})
	const checkbox = screen.getByRole('checkbox', { name: 'Disable button'})

	fireEvent.click(colorButton)

	fireEvent.click(checkbox)
	expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })

	fireEvent.click(checkbox)
	expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
})

describe('spaces before camel-case capital letters', () => {
	test('Works for no inner capital letters', () => {
		expect(replaceCamelWithSpaces('Red')).toBe('Red')
	})

	test('Works for one inner capital letters', () => {
		expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
	})

	test('Works for multiple inner capital letters', () => {
		expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
	})
})
