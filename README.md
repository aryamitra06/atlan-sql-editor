
# Task - Atlan Frontend Engineer
# SQL Editor
A Redux based web application built in ReactJS that executes predefined SQL queries over a table `users` to display the result to user. 
## Overview
Users can type their SQL query in the input field or can `copy to clipboard` a query from accordion. After hitting the `RUN` button result will be immediately displayed from a `JSON "users" data` using `axios` (GET) and it changes state of the applicaton according to each query with the `Redux state management` to Data Grid section. 
It contains users' data according to queries. Data Grid provides `pagination` as well as `rows per page` features by default.

## Dependencies
    "@emotion/react": "^11.9.0",
    "@emotion/styled": "^11.8.1",
    "@mui/icons-material": "^5.8.0",
    "@mui/material": "^5.8.1",
    "@mui/x-data-grid": "^5.11.1",
    "axios": "^0.27.2",
    "react-hot-toast": "^2.2.0",
    "react-redux": "^8.0.2",
    "redux": "^4.2.0",
    "redux-thunk": "^2.4.1",
## Predefined Queries
`SELECT * from users;`

`SELECT * from users where gender="Male";`

`SELECT * from users where gender="Female";`

`SELECT * from users where ip_address="86.228.202.112" OR ip_address="125.47.224.245";`

`SELECT * from users where id BETWEEN 401 AND 525;`

## Features
- Standard Interface: React MaterialUI made this app very easy to use with simple prototype to represent.
- Redux State Management: Redux is used for state management to execute queries and keeping the application lightweight and blazing fast.
- Responsive Design: This app is completely responsive for all devices https://search.google.com/test/mobile-friendly/result?id=2cCkImBBeOWPp_Ea_nq5Bg

## Performance 
- GTMetrix

![gt](https://user-images.githubusercontent.com/79497113/170854451-2449c11b-d061-4fb2-be37-3f43287e23f7.png)

- Chrome Lighhouse

![light](https://user-images.githubusercontent.com/79497113/170854470-8324b1c3-ac6d-4bfb-9eff-19e001408205.png)

- Pingdom

![pingdom](https://user-images.githubusercontent.com/79497113/170854479-8dc6a7bc-9885-4b94-8b2a-2766dac4a740.png)

## Optimisations
- Redux: As per the official documentation of React Redux, `React Redux in particular is heavily optimized to cut down on unnecessary re-renders.` I tried to management all the query cases of SQL using Redux. It also makes codebase very attractive and improves readability.
- Pagination: MUI pagination allows to fetch data accordingly to user. That means API doesn't immediately fetch all data at a time which saves internet data and improves user experience.

## Deployment
Deployed using Netlify. Check the link: https://atlan-task-sql-editor.netlify.app/

## Screenshots
![image](https://user-images.githubusercontent.com/79497113/170876230-60a34478-6c6e-467e-9670-69d6c54e0b90.png)

![image](https://user-images.githubusercontent.com/79497113/170876292-6b38059d-f9d5-44c3-82df-816115d569c8.png)
