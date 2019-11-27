import React from 'react';
import './styles.css';

export default ({ children, handleClick }) => (
	<button onClick={handleClick} className='btn'>
		{children}
	</button>
);