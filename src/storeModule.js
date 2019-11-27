export const getHistoryFromStorage = () => JSON.parse(sessionStorage.getItem('history')) || [];
export const setHistoryToStorage = data => sessionStorage.setItem('history', JSON.stringify(data));
export const getLastFromHistory = () => getHistoryFromStorage()[0];
