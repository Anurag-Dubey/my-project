import React from 'react'
import Card from './card'
import Top from './top'

function Services() {
  return (
    <div>
        <Top name="Services"/>
      <div className='container'>
      <div className='row'>
      <div className='col-4'><Card heading="Hand Bore" icon="Hand-Bore.jpg" text="Filterpoint Wells, Hand bore wells, Calyx wells and Rotary Wells are diffent types of Tube wells. Filterpoint Wells are done in the costal areas ranging from 10 ft – 40 ft. Hand bore are manually drilled tube well which may range from 20 – 200 ft. in depth and 4- 8 in diameter"/></div>
      <div className='col-4'><Card heading="Horizontal Bore" icon="Horizontal-Bore.jpg" text="A horizontal boring machine or horizontal boring mill is a machine tool which bores holes in a horizontal direction. There are three main types — Table, planer and floor. The table type is the most common, and as it is the most versatile, it is also known as the universal type.A horizontal boring machine has its work spindle parallel to the ground and work table. Typically there are 3 linear axes in which the tool head and part move. Convention dictates that the main axis that drives the part towards the work spindle is the Z axis, with a cross-traversing X axis and a vertically-traversing Y axis. The work spindle is referred to as the C axis and, if a rotary table is incorporated, its centre line is the B axis. Horizontal boring machines are often heavy-duty industrial machines used for roughing out large components but there are high-precision models too. Modern machines use advanced CNC control systems and techniques."/></div>
      <div className='col-4'><Card heading="Mini Vehicle Bore" icon="Mini-Vehicle-Bore.jpg" text="Mini Vehicles are used to dig bore wells in places where heavy trucks cannot go."/></div>
      </div>
      </div>
    </div>
  )
}

export default Services
