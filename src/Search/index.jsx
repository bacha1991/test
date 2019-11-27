import React, { useState, useEffect, forwardRef } from "react";
import SearchField from './SearchField';
import VideosList from './VideosList';
import { getVideolist } from './../gapiModule';

import './styles.css';

export default forwardRef(({ playVideo, isAppClicked }, ref) => {
	const [list, updateList] = useState([]);

	const removeList = value => !value && updateList([]);
	const getVideos = query => getVideolist({ q: query })
		.then(({ items }) => updateList(items.filter(item => item.id.kind === 'youtube#video')));
	const handlePlayVideo = (data) => {
		playVideo(data);
		removeList();
	};

	useEffect(() => removeList(), [isAppClicked]);

	return <div className='searchWrapper' ref={ref}>
		<SearchField
			onChange={removeList}
			submitCallback={getVideos} />
		<VideosList
			playVideo={handlePlayVideo}
			list={list} />
	</div>;
});
