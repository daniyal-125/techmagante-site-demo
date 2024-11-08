import React from 'react';
import image1 from '../assets/seo-dod.jpg';
import './SEOService.css';
import ServiceSidebar from '../components/ServiceSidebar';



function SEOService() {
  return (
    <>  
    <section className="pageHeader">
      <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="textbl mrgenbt">
                <div class="leftcontent">
					<h1>India’s Largest SEO Services Company</h1>
                    <p class="mb24">We’re a team of 300+ SEO experts working with the largest brands in India towards one clear goal: achieving business growth online.</p>
                    <a class="book-bnr-btn" href="#frm">Talk to Our Experts </a>
					 <a class="services-btn" href="#seo-service">Our Services</a>
				 </div>
                 <div class="rightbanner cust-services test">
					<img class="lazy entered lazyloaded" alt="Search Engine Optimization" src={image1}/>
				</div>
               </div>
            </div>
        </div>
      </div>
    </section>
        <div class="breadCrumbRow">
            <div class="container"> 
                <ul>
            <li><a href="https://www.techmagnate.com">Home</a></li>
                <li>SEO Services</li>   
                </ul> 
            </div>
        </div>
        <div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-sm-8 leftContainer">
        <div class="moreRow">
          <h2>Customized and Targeted SEO Services for a Stronger Search Engine Presence</h2>
          <ul>
          <li>Timely pivots to accommodate algorithm updates and industry trends</li>
          <li>Customized SEO plans to address the unique needs of your business</li>
          <li>Detailed and precise projections for ensuring our clients’ success</li>
          <li>Dedicated teams for your account management</li>
          <li>Transparent reporting and seamless communication</li>
          </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 rightContainer">
        <ServiceSidebar/>
        </div>
      </div>
        
    </div>
</>
  );
}

export default SEOService;
