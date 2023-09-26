import { Button, Checkbox, Input } from '@material-tailwind/react';
import { useState } from 'react';

const Buttons = () => {
	const [color, setColor] = useState('bg-red-700');
	const [text, setText] = useState('Change to Blue');

	const [checked, setChecked] = useState(false);

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
		<div>
			<Button className={ButtonClassName} onClick={handleClick}>
				{text}
			</Button>
			<div>
				<Checkbox crossOrigin="anonymous" label="REMEBER ME" />
			</div>
		</div>
	);
};

export default Buttons;
