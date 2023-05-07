import {React, useEffect, useState} from 'react'
import axios from 'axios'

const Fetch1 = () => {
  const [names, setNames] = useState([])
  const [alb, setAlb] = useState([])


  //fetch data on button click. -------

  const albu = async () => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/albums`)
       
       console.log(result.data)
       setAlb(result.data)
   }

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
    <button onClick={albu}>Fetch Albums</button>
    {
      alb.map( (al) => (<h6 key={al.id}>{al.title}</h6>))
    }
    </>
  )
}

export default Fetch1