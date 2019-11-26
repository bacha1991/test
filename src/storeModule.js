export const getHistoryFromStorage = () => JSON.parse(sessionStorage.getItem('history'));
export const setHistoryToStorage = data => sessionStorage.setItem('history', JSON.stringify(data));
export const getLastFromHistory = () => {
	const history = getHistoryFromStorage() || [];
	return history[0];
}; 
