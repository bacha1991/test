import React, { useState, useEffect, forwardRef } from "react";
import SearchField from './SearchField';
import VideosList from './VideosList';
import { getVideolist } from './../gapiModule';

import './styles.css';

const withErrorMsg = WrappedComponent => ({ errorMsg, ...other }) => {
	return errorMsg
		? <h3 dangerouslySetInnerHTML={{__html: errorMsg}} />
		: <WrappedComponent {...other} />;
};
const EnhancedVideosList = withErrorMsg(VideosList);

export default forwardRef(({ playVideo, isAppClicked }, ref) => {
	const [list, updateList] = useState([]);
	const [errorMsg, setErrorMsg] = useState();

	const removeList = value => !value && updateList([]);
	const getList = query => getVideolist({ q: query })
		.then(resp => updateList(resp.items.filter(item => item.id.kind === 'youtube#video')))
		.catch(resp => setErrorMsg(resp.error.message));
	const handlePlayVideo = (data) => {
		playVideo(data);
		removeList();
	};

	useEffect(() => removeList(), [isAppClicked]);

	return <div className='searchWrapper' ref={ref}>
		<SearchField
			onChange={removeList}
			submitCallback={getList} />
		<EnhancedVideosList
			playVideo={handlePlayVideo}
			list={list}
			errorMsg={errorMsg} />
	</div>;
});
