import {React,useState} from 'react'

const Info = () => {
    const [readmore, setReadmore] = useState(false);

    const togglemore = () => {
        setReadmore(!readmore)
    }


  return (
    <>
    <div>------Info Compo------</div>
    <p>Read More/Less</p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint numquam
        quia delectus quo vero quod iusto corrupti illum accusamus odit hic ut
        ab minus eveniet, corporis ullam tempora debitis iure. Repellat,
        molestias
      </p>
      {
        readmore && (
            <p>
                sapiente exercitationem odio quia, animi eos distinctio tempora, ipsum
          hic vitae modi eum nostrum id perspiciatis impedit dolores.
            </p>
        )
      }
      <button onClick={togglemore}>{
        readmore ? "Read less" : "Read More"
      }</button>
    </>
  )
}

export default Info