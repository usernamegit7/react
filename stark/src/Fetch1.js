import {React, useEffect, useState} from 'react'
import axios from 'axios'

const Fetch1 = () => {
  const [names, setNames] = useState([])

    useEffect(() => {
      const fetchitems = async () => {
       const result = await axios.get("https://jsonplaceholder.typicode.com/users")
          // .then((response) => console.log(response.data));
          console.log(result.data)
          setNames(result.data)
      }
      fetchitems()
        }, []);

  return (
    <>
    <div>Fetch1</div>
    {
      names.map( (nam) => (<h6 key={nam.id}>{nam.name}</h6>))
    }
    </>
  )
}

export default Fetch1