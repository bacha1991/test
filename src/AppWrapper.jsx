import React, { useState, Fragment } from "react";
import Search from './Search';
import HistoryBar from './HistoryBar';
import VideoPlayer from './VideoPlayer';
import { getLastFromHistory } from './storeModule';

export default () => {
	const [video, updateVideo] = useState(getLastFromHistory());

	return <Fragment>
		<Search playVideo={updateVideo} />
		<HistoryBar activeVideo={video} playVideo={updateVideo} />
		<VideoPlayer activeVideo={video} />
	</Fragment>;
};