import {React, useEffect} from 'react'
import axios from 'axios'

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
    <div>Fetch</div>
    
    </>
  )
}

export default Fetch