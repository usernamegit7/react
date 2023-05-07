import {React, useEffect} from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';

const Fetch = () => {
  

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => console.log(json))
        
        }, []);
        
        useEffect(() => {
            axios.get("https://jsonplaceholder.typicode.com/todos")
              .then((response) => console.log(response.data));
            }, []);

            useEffect(() => {
                (async () => {
                  try {
                    const result = await axios.get(
            "https://jsonplaceholder.typicode.com/todos")
                    console.log(result.data);
                  } catch (error) {
                    console.error(error);
                  }
                })()
              })

  return (
    <>
    
    <Button variant="contained"
    href="https://mui.com/material-ui/getting-started/overview/"
    target="_blank"
    rel="noreferrer"
    >Material UI</Button>
    
    </>
  )
}

export default Fetch