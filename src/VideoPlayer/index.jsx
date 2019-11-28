import React from 'react';
import './styles.css';
import VideoTitle from './../common/VideoTitle';

export default ({ activeVideo }) => {
	if (!activeVideo) {
		return null;
	}
	const { id, title } = activeVideo;

	return <section className='videoBlock'>
		<h2><VideoTitle>{title}</VideoTitle></h2>
		<iframe id='existing-iframe-example'
			height='360'
			title='video'
			src={`https://www.youtube.com/embed/${id}?enablejsapi=1`}
			frameBorder='0'
			className='VideoPlayerIframe'>
	    </iframe>
	</section>
};
