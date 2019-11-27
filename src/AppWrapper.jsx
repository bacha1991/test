import React, { useState, useEffect, useRef } from "react";
import Search from './Search';
import HistoryBar from './HistoryBar';
import VideoPlayer from './VideoPlayer';
import { getLastFromHistory } from './storeModule';

export default () => {
	const [video, updateVideo] = useState(getLastFromHistory());
	const [isAppClicked, toggleAppClicked] = useState(false);
	const searchBlock = useRef(null);
	const handleClick = e => !searchBlock.current.contains(e.target) && toggleAppClicked(true);

	useEffect(() => toggleAppClicked(false), [isAppClicked])

	return <div onClickCapture={handleClick}>
		<Search playVideo={updateVideo}isAppClicked={isAppClicked} ref={searchBlock} />
		<HistoryBar activeVideo={video} playVideo={updateVideo} />
		<VideoPlayer activeVideo={video} />
	</div>;
};