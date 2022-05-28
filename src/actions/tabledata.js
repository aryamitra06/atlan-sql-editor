import axios from 'axios';

export const fetchQ1Data = () => async (dispatch) => {
    try {
      const { data } = await axios.get('https://aryamitra06.github.io/projectsjson/dummyjson.json');
      dispatch({ type: 'FETCH_Q1_DATA', payload: data });
    } catch (error) {
      console.log(error.message);
    }
}

export const fetchQ2Data = () => async(dispatch) => {
  try {
    const jsondata = await axios.get('https://aryamitra06.github.io/projectsjson/dummyjson.json')
    var maleOnlyData = jsondata.data.filter( element => element.gender ==="Male")
    dispatch({ type: 'FETCH_Q2_DATA', payload: maleOnlyData });
  } catch (error) {
    console.log(error.message);
  }
}

export const fetchQ3Data = () => async(dispatch) => {
  try {
    const jsondata = await axios.get('https://aryamitra06.github.io/projectsjson/dummyjson.json')
    var femaleOnlyData = jsondata.data.filter( element => element.gender ==="Female")
    dispatch({ type: 'FETCH_Q3_DATA', payload: femaleOnlyData });
  } catch (error) {
    console.log(error.message);
  }
}