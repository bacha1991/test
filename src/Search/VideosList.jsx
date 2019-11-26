import React from 'react';

export default ({ items = [], playVideo }) => <ul className='searchResult'>
	{
		items.map((item, i) => {
			const { id, snippet } = item;

			return <li key={id.videoId}>
					<img src={snippet.thumbnails.default.url}/>
					<span className='videoTitle'>Video #{i + 1} {snippet.title}</span>
					<span className='playBtnWrapper'>
						<button onClick={() => playVideo(id.videoId)}>Play</button>
					</span>
				</li>;
		})
	}
</ul>;