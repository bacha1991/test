import React, { Fragment, useState, useEffect } from "react";

import Search from "./Search";
import HistoryBar from "./HistoryBar";
import VideoPlayer from "./VideoPlayer";


export default () => {
	const [activeVideo, setActiveVideo] = useState();

	return <Fragment>
		<Search playVideo={id => setActiveVideo(id)} />
		<HistoryBar activeVideo={activeVideo} />
		<VideoPlayer id={activeVideo} />
	</Fragment>;
};