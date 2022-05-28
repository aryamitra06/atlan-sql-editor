import axios from 'axios';

//@query 
//SELECT * from users;
export const fetchQ1Data = () => async (dispatch) => {
    try {
      const { data } = await axios.get('https://aryamitra06.github.io/projectsjson/dummyjson.json');
      dispatch({ type: 'FETCH_Q1_DATA', payload: data });
    } catch (error) {
      console.log(error.message);
    }
}

//@query 
//SELECT * from users where gender="Male";
export const fetchQ2Data = () => async(dispatch) => {
  try {
    const jsondata = await axios.get('https://aryamitra06.github.io/projectsjson/dummyjson.json')
    var maleOnlyData = jsondata.data.filter( element => element.gender ==="Male")
    dispatch({ type: 'FETCH_Q2_DATA', payload: maleOnlyData });
  } catch (error) {
    console.log(error.message);
  }
}

//@query 
//SELECT * from users where gender="Female";
export const fetchQ3Data = () => async(dispatch) => {
  try {
    const jsondata = await axios.get('https://aryamitra06.github.io/projectsjson/dummyjson.json')
    var femaleOnlyData = jsondata.data.filter( element => element.gender ==="Female")
    dispatch({ type: 'FETCH_Q3_DATA', payload: femaleOnlyData });
  } catch (error) {
    console.log(error.message);
  }
}

//@query 
//SELECT * from users where ip_address="86.228.202.112" OR ip_address="125.47.224.245";
export const fetchQ4Data = () => async(dispatch) => {
  try {
    const jsondata = await axios.get('https://aryamitra06.github.io/projectsjson/dummyjson.json')
    const ipOnlyData1 = jsondata.data.filter( element => element.ip_address ==="86.228.202.112")
    const ipOnlyData2 = jsondata.data.filter( element => element.ip_address ==="125.47.224.245")
    dispatch({ type: 'FETCH_Q4_DATA', payload: ipOnlyData1.concat(ipOnlyData2) });

  } catch (error) {
    console.log(error.message);
  }
}

//@query 
//SELECT * from users where id BETWEEN 401 AND 525;
export const fetchQ5Data = () => async(dispatch) => {
  try {
    const jsondata = await axios.get('https://aryamitra06.github.io/projectsjson/dummyjson.json')
    let arr =[];
    for(let i=401; i<=525; i++){
      let data = jsondata.data.filter( element => element.id ===i)
      arr = arr.concat(data)
    }
    dispatch({ type: 'FETCH_Q5_DATA', payload: arr });
  } catch (error) {
    console.log(error.message);
  }
}
