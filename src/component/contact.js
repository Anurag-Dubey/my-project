import React from 'react'
import {ImPhone} from "react-icons/im"
import {MdMail} from "react-icons/md"
function Contact() {
  return (
           <section className="contactInfo" style={{background:"#99BF38"}}>
				<div className="container" style={{display:'block',height:50}}>
					
						<div className="contact-area" style={{float:'right',marginTop:8}}>
							<ul style={{listStyleType:"none" }}>
								<li style={{display:'inline'}}><ImPhone style={{color:'white',marginRight:5}} />9845464653,  9538220508</li>
								<li style={{display:'inline'}}><MdMail style={{color:'white',marginRight:5,marginLeft:15}}/>rrborewells@gmail.com</li>
							</ul>
						</div>
					</div>
			</section>
  )
}

export default Contact
