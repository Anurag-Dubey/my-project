import React from 'react'

const Top = (props) => {
  return (
    <div style={{position:'relative',width:"100vw",marginTop:50}}> 
      <img src="/background.jpg" />
      <div style={{position:"absolute", color:"white" ,top:10,left:150,opacity:.9,fontWeight:"bold",fontSize:100}}>{props.name}</div>
    </div>
  )
}

export default Top
