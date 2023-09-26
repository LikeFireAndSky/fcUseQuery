import { render, screen, fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/dom';
import Buttons from './Button';

test('button has correct initial color', () => {
	const { container } = render(<Buttons />);
	logRoles(container);

	const colorButton = screen.getByRole('button', { name: 'Change to Blue' });
	expect(colorButton).toHaveStyle({ backgroundColor: 'rgb(211 47 47' });

	fireEvent.click(colorButton);

	expect(colorButton).toHaveStyle({ backgroundColor: 'rgb(3 169 244)' });

	console.log('테스트 성공');
	expect(colorButton).toHaveTextContent('Change to Red');
});

test('initial conditions', () => {
	render(<Buttons />);
	// check that the button starts out enabled
	const colorButton = screen.getByRole('button', { name: 'Change to Blue' });
	expect(colorButton).toBeEnabled();

	// check that the checkbox starts out unchecked
	const checkbox = screen.getByRole('checkbox');
	expect(checkbox).not.toBeChecked();
});
