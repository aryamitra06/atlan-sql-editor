const query = (query = "", action) => {
    switch (action.type) {
        case 'QUERY':
            return action.payload;
        default:
            return query;
    }
}

export default query;