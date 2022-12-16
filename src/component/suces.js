import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Suces = () => {
  return (
    

      <div style={{ marginLeft:150,width:500,marginBottom:100}}>
        <div><h4>Hand Bore</h4>
            <ProgressBar variant="success" now={40}/></div>
            <div><h4>Horizontal Bore</h4><ProgressBar variant="info" now={20} /></div>
      <div><h4>Mini Vehicle Bore</h4><ProgressBar variant="warning" now={60} /></div>
      <div><h4>Filter Pipe</h4><ProgressBar variant="danger" now={80} /></div>
      
    </div>
  )
}

export default Suces;
