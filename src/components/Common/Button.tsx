import { Button } from '@material-tailwind/react';
import { useState } from 'react';

const Buttons = () => {
	const [color, setColor] = useState('bg-red-700');
	const [text, setText] = useState('Change to Blue');

	const handleClick = () => {
		if (color === 'bg-red-700') {
			setColor('bg-blue-700');
			setText('Change to Red');
		} else {
			setColor('bg-red-700');
			setText('Change to Blue');
		}
	};

	const ButtonClassName = `${color}`;

	return (
		<Button className={ButtonClassName} onClick={handleClick}>
			{text}
		</Button>
	);
};

export default Buttons;
