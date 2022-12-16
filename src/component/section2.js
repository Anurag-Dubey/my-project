import { React, useState } from "react";
import { AiFillBell, AiFillHtml5 } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { FaCompressAlt } from "react-icons/fa";
import "./style.css";

function Section2() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <ul className="col-6" role="tablist" style={{listStyle:"none"}}>
            <li className="">
              <button style={{fontSize:30,fontWeight:"bold",width:600, height:100,border:"none"}}
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                <AiFillBell style={{marginRight:20}} />
                Borewell Drilling
              </button>
            </li>
            <li className="">
              <button style={{fontSize:30,fontWeight:"bold",width:600, height:100 ,border:"none"}}
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                <AiFillHtml5 />
                Borewell Groundwater Survey
              </button>
            </li>
            <li className="">
              <button style={{fontSize:30,fontWeight:"bold",width:600, height:100, border:"none"}}
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                <BiCodeAlt />
                Borewell Point Identification
              </button>
            </li>
            <li className="">
              <button style={{fontSize:30,fontWeight:"bold",width:600, height:100,border:"none"}}
                className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(4)}
              >
                <FaCompressAlt />
                Borewell drilling method
              </button>
            </li>
          </ul>

          <div className="col-6 ">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <h3>Borewell Drilling</h3>
              <p>
                RR Borewells team of borewell experts have been working in the
                borewell industry for more than three decades and found exact
                borewell point with continuous groundwater supply for more than
                60,000 customers in and around Bangalore..
              </p>
              <p>
                Borewell drilling methods can be well-categorized based on the
                borewell drilling machines. Depending on the purpose of borewell
                drilling work and the soil and rock formation of the ground on
                which borewell drilling work has to be done, the borewell team
                decides on the drilling method
              </p>
            </div>
            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <h3>Borewell Groundwater Survey</h3>
              <p>
                The permeable layers beneath the underground will help us detect
                the water content below the ground. Presence of Groundwater
                depends on the topography, soil condition, fauna and geological
                location..
              </p>
              <p>
                Professional Geologists of Krishna Borewell have excellent
                knowledge and understanding the Geology of the earth’s surface,
                the climatic conditions and then the sources of underground
                water. The source of underground water can be from lakes, rivers
                or streams..
              </p>
            </div>
            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <h3>Borewell Point Identification</h3>
              <p>
                Borewell point identification can be done with the traditional
                method as well as the scientific method. The borewell point
                identification is well-known with other terms such as borewell
                point marking, borewell point selection, geologist survey,
                borewell drilling point, coconut borewell point marking system
                and other such terms
                <br />
                <br />
              </p>
              <p>
                <b>
                  How Groundwater Survey is Performed for Borewell Drilling
                  Point Identification in Bangalore?
                </b>
              </p>
              <p>
                Water dowsing method is used to identify the underground water
                which makes use of Y shaped stick, coconuts, pendulum and other
                devices. We add on to hydrologic surveys to determine the depth
                and extent of different water bearing We identify the structural
                weaknesses of the earth’s surface by geophysical surveys
                involving airborne electromagnetic or seismic refraction
                methods. In certain cases, we map the topography and identify
                permeable layers. Other scientific methods that are used for
                borewell point identification include vertical electrical
                sounding, electromagnetic induction survey, gravity sensing
                method, electro-seismic method, proton magnetometer groundwater
                inspection, etc
              </p>
            </div>
            <div
              className={
                toggleState === 4 ? "content  active-content" : "content"
              }
            >
              <h3>Borewell drilling method</h3>
              <p>
                Borewell drilling method is decided based on the water source –
                whether it’s a pressurized or unpressurized source of water. The
                casing of the pipe also decides about the type of borewell
                drilling – whether water well or tubewell.
              </p>
              <p>
                Borewell drilling process involves main use of motor and a pump
                inside a pipe. This pipe is drilled up to the level of
                underground water. Now the discharge pipe of pump and electrical
                connections to it are brought up to the ground level. Now when
                motor starts to operate, this pushes the underground water to
                the water tank level above the ground. This quality borewell
                water is used for various water requirements..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
