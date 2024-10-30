# useEffect - run a function based on a second parameter

- very commonly used to fetch data from an API
- first parameter is a function that you want to run
  - if you need to use async/await, DO NOT make the function that we passed in async
  - instead, create a new function inside the function argument that is async and invoke it
- second parameter is an array
  - if it is empty, the function will only run one time
  - the array can take in the name of state variables and it will run the function every time the state variable changes