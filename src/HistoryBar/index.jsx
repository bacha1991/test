import React, { useReducer, useEffect } from "react";
import VideoTitle from './../common/VideoTitle';
import Button from './../common/Button';
import { getHistoryFromStorage, setHistoryToStorage } from './../storeModule';
import { reducer, addVideoToHistory, removeVideoFromHistory } from './reducer';

import './styles.css';

export default ({ activeVideo, playVideo }) => {
	const [history, dispatch] = useReducer(reducer, getHistoryFromStorage());

	useEffect(() => {
		activeVideo && addVideoToHistory(dispatch)(activeVideo);
	}, [activeVideo]);
	useEffect(() => setHistoryToStorage(history), [history]);

	return <section className='historyBlock'>
		<h2>Watch History</h2>
		<ul>
			{
				history.map((item) => <li key={item.id}>
					<VideoTitle isActive={activeVideo.id === item.id}
						customClass='historyBlockItem'
						clickHandler={() => playVideo(item)}>{item.title}</VideoTitle>
					<Button handleClick={() => removeVideoFromHistory(dispatch)(item.id)}>Delete</Button>
				</li>)
			}
		</ul>
	</section>
};
