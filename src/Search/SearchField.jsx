import React from 'react';

export default ({ submitCallback, handleChange }) => {
	const handleSubmit = (e) => {
		const input = e.target.elements['q'];
		
		e.preventDefault();
		
		submitCallback(input.value);
	};

	return <form autoComplete="off" onSubmit={handleSubmit}>
		<input name='q'
			onChange={e => handleChange(e.target.value)}
			placeholder='Search on Youtube...'
			className='searchFiels' />
	</form>;
};