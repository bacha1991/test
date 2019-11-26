import React, { useReducer, useEffect } from "react";

const ADD_TO_HISTORY = 'addToHistory';
const REMOVE_FROM_HISTORY = 'removeFromHistory';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
    	return [action.payload.id, ...state];
	case REMOVE_FROM_HISTORY:
    	return state.reduce((memo, id) => action.payload.id === id
    		? memo
    		: [...memo, id], []);
    default:
      return state;
  }
};

const getHistoryFromStorage = () => JSON.parse(sessionStorage.getItem('history'));
const setHistoryToStorage = data => sessionStorage.setItem('history', JSON.stringify(data));

export default ({ activeVideo }) => {
	const initialState = getHistoryFromStorage() || [];
	const [history, dispatch] = useReducer(reducer, initialState);
	const playVideo = id => dispatch({ type: ADD_TO_HISTORY, payload: {id} });
	const removeVideo = id => dispatch({ type: REMOVE_FROM_HISTORY, payload: {id} });

	useEffect(() => {
		activeVideo && playVideo(activeVideo);
	}, [activeVideo]);

	useEffect(() => {
		setHistoryToStorage(history);
	}, [history]);

	return <h2>
		Watch History
		<ul>
			{
				history.map(id => <li key={id}>
					<span>{id}</span>
					<button onClick={() => removeVideo(id)}>Delete</button>
				</li>)
			}
		</ul>
	</h2>
};