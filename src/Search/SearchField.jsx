import React from 'react';

export default ({ submitCallback, onChange }) => {
	const handleSubmit = (e) => {
		const input = e.target.elements['q'];
		
		e.preventDefault();
		
		submitCallback(input.value);
	};

	return <form autoComplete="off" onSubmit={handleSubmit}>
		<input name='q'
			onChange={e => onChange(e.target.value)}
			placeholder='Search on Youtube...'
			className='searchFiels' />
	</form>;
};