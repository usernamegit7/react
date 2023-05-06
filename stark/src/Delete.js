import {React,useState} from 'react'

const Delete = () => {

    const [fruits, setFruits] =useState([
        'A', 'B', 'C', 'D'
    ])

    const deletethis = (a) => {
        setFruits(b => {
          return b.filter(letter => letter !== a)
        })
      }

  return (
    <>
    <div>Delete</div>
    <ul>
        {
            fruits.map( (letter) => {
                return(
                    <li key={letter}>
                        <span>{letter}</span>
                        <button onClick={() => deletethis(letter)}>Delete</button>
                    </li>
                )
            })
        }
    </ul>
    </>
  )
}

export default Delete