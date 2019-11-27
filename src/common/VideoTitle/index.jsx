import React from 'react';
import './styles.css';

export default ({
	children,
	isActive,
	clickHandler,
	customClass = '',
	customWrapperClass = ''
}) => {
	return <span className={`videoTitleWrapper ${customWrapperClass}`}>
		<span onClick={clickHandler}
			className={`videoTitle ${isActive ? 'active' : ''} ${customClass}`}>
			{children}
		</span>
	</span>;
};