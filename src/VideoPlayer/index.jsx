import React from 'react';
import './styles.css';
import VideoTitle from './../common/VideoTitle';

export default ({ activeVideo = {} }) => {
	const { id = '71h8MZshGSs', title } = activeVideo;

	return <section className='videoBlock'>
		<h2><VideoTitle>{title}</VideoTitle></h2>
		<iframe id='existing-iframe-example'
			height='360'
			title='video'
			src={`https://www.youtube.com/embed/${id}?enablejsapi=1`}
			frameBorder='0'
			className='VideoPlayerIframe'
			style={{border: "solid 4px #37474F"}}>
	    </iframe>
	</section>
};
