// about //

import React from 'react';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div>
			<h1>About</h1>
			<Link to="/">
				<Button>HOME</Button>
			</Link>
		</div>
	);
};

export default About;
