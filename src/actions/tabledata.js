import axios from 'axios';

export const fetchData = () => async (dispatch) => {
    try {
      const { data } = await axios.get('https://aryamitra06.github.io/projectsjson/dummyjson.json');
      dispatch({ type: 'FETCH_DATA', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  }