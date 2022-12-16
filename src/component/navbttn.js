import React from 'react'

const Navbttn = (props) => {
  return (

    <div style={{background:"#99BF38",
    color:"white",
    width:100,
    height:50,
    paddingLeft:5,
    paddingRight:5,
    paddingTop:10 ,
    borderRadius:10,
    justifyContent:'center',
    display:'flex', 
    fontWeight: 'bold'}}>
      {props.name}
    </div>
  )
}

export default Navbttn

