import React, { useState } from "react";
import SearchField from './SearchField';
import VideosList from './VideosList';
import { getVideolist } from './../gapiModule';

import './styles.css';

const withErrorMsg = WrappedComponent => ({ errorMsg, ...other }) => {
	return errorMsg
		? <h3 dangerouslySetInnerHTML={{__html: errorMsg}} />
		: <WrappedComponent {...other} />;
};

const withGetVideoListApi = WrappedComponent => ({ playVideo }) => {
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
	const newProps = { list, errorMsg, removeList, getList, handlePlayVideo };

	return <WrappedComponent {...newProps} />;
};

const EnhancedVideosList = withErrorMsg(VideosList);

const SearchBlock = ({
	list,
	errorMsg,
	removeList,
	getList,
	handlePlayVideo
}) => {
	return <div className='searchWrapper'>
		<SearchField
			onChange={removeList}
			submitCallback={getList} />
		<EnhancedVideosList
			playVideo={handlePlayVideo}
			list={list}
			removeList={removeList}
			errorMsg={errorMsg} />
	</div>;
};

export default withGetVideoListApi(SearchBlock);
