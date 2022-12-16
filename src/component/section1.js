import React from "react";

const Section1 = () => {
  return (
    <div className="col">
      <section id="content" style={{margin: 80}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6" >
              <img src="1 .jpg" alt="" style={{height:550,width:550}}/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div>
                <h2>Who We Are</h2>
                <p>
                  {" "}
                  SRI RAJARAJESHWARI BOREWELL &amp; PUMPS a leading borewell
                  drilling company in Bangalore since 1994, was started with the
                  main goal of providing solutions to water scarcity to the
                  people in and around Bangalore.
                </p>
                <p>
                  Our Company is a family run business that has been established
                  for over 35 years and growing forever.Thus, Krishna Borewell
                  became the best borewell contractors for ground water borewell
                  in Bangalore, Karnataka.
                </p>
                <p>
                  With the effectual guidance of Mr.Abc, our team of borewell
                  experts and Professional Geologists have profound expertise in
                  bore well drilling, borewell digging, advanced borehole
                  technology. We have found best source of ground water with
                  more than 45,000+ borewell drilling points for customers in
                  and around Bangalore. We have gained complete customer
                  satisfaction and appreciation from every customer as the best
                  bore well company in Bangalore for borewell digging..
                </p>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <ul className="list list-3">
                      <li>BoreWell Drilling</li>
                      <li>Ground Water Survey</li>
                      <li>TubeWell Drilling</li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <ul className="list list-3">
                      <li>Borewell Camera Scanning</li>
                      <li>All Borewell material Supply</li>
                      <li>Borewell Recharging</li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <ul className="list list-3">
                      <li>Bore Well Cleaning</li>
                      <li>Motor Supply</li>
                      <li>Repairing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
