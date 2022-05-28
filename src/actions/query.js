export const setQ = (query) => (dispatch) => {
    try {
      dispatch({ type: 'QUERY', payload: query });
    } catch (error) {
      console.log(error.message);
    }
}