const tabledata = (data = [], action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return action.payload;
        default:
            return data;
    }
}

export default tabledata;