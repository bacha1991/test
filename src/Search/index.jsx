import React, { useState } from "react";
import SearchField from './SearchField';
import VideosList from './VideosList';
import { getVideolist } from './../gapiModule';

import './styles.css';

export default ({ playVideo }) => {
	const [items, updateItems] = useState([]);
	const getVideos = (query) => {
		getVideolist({ q: query })
			.then((data) => {
				console.log(data, 'loaded');
				updateItems(data.items.filter(item => item.id.kind === 'youtube#video'));
			});
	};
	const handleChange = value => !value && updateItems([]);

	return <div className='searchWrapper'>
		<SearchField handleChange={handleChange} submitCallback={getVideos} />
		{items.length ? <VideosList playVideo={playVideo} items={items} /> : null}
	</div>;
};
