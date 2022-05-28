const tabledata = (data = [], action) => {
    switch (action.type) {
        case 'FETCH_Q1_DATA':
            return action.payload;
        case 'FETCH_Q2_DATA':
            return action.payload;
        case 'FETCH_Q3_DATA':
            return action.payload;
        case 'FETCH_Q4_DATA':
            return action.payload;
        case 'FETCH_Q5_DATA':
            return action.payload;
        default:
            return data;
    }
}

export default tabledata;