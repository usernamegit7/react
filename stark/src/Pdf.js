import React from 'react';
import doc from './Files/doc.pdf'
import q from './Files/q.jpeg';

const Pdf = () => {
  return (
    <>
    
    
    <embed
    src={doc}
    type="application/pdf"
    height={300}
    width={500}
  />
  <img src={q} alt="pic" height={200} width={200}/>
  <img src={require('./Files/q.jpeg')} alt="pic" height={200} width={200}/>
    </>
  )
}

export default Pdf