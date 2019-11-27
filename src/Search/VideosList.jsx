import React from 'react';
import VideoTitle from './../common/VideoTitle';
import Button from './../common/Button';
export default ({ list = [], playVideo }) =>
	!list.length ? null
	: <ul className='searchResult'>
		{
			list.map((item, i) => {
				const { thumbnails, title } = item.snippet;
				const id = item.id.videoId;

				return <li key={id}>
						<div className='searchResulCol_1'>
							<img alt={title} src={thumbnails.default.url}/>
						</div>
						<div className='searchResulCol_2'>
							<VideoTitle customWrapperClass='searchResultTitle'>{title}</VideoTitle>
						</div>
						<div className='searchResulCol_3'>
							<span className='playBtnWrapper'>
								<Button handleClick={() => playVideo({ id, title })}>Play</Button>
							</span>
						</div>
					</li>;
			})
		}
	</ul>;