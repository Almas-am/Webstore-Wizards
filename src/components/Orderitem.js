import React from 'react'
const Orderitem = (props) => {
    
   const {orders} = props;
   
  return (
    <div style={{padding:20}}>
      <div style={{textAlign:"center"}}><h1>{orders.title}</h1></div>
       <div>
        <ul>
          <li>
            <strong>Size:{orders.size}</strong>
          </li>
          <li>
            <strong>Collar:{orders.collar}</strong> 
          </li>
          <li>
            <strong>Sleeve:{orders.sleeve}</strong>
          </li>
          <li>
            <strong>Primary Colour:{orders.primary_colour}</strong>
          </li>
          <li>
            <strong>Secondary Colour:{orders.secondary_colour}</strong> 
          </li>
        </ul>
        </div> 
    </div>
  )
}

export default Orderitem
