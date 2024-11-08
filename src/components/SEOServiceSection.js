import React from 'react';

const servicesData = [
  {
    imgSrc: 'https://www.techmagnate.com/files/2021/09/menuicon1.png',
    title: 'Search Engine Optimization',
    description:
      'From SEO Audit to SEO Strategy to On-page SEO to Link Building, as a Top SEO Agency, Techmagnate offers the best Search Engine Optimization (SEO) services if you want to get to the top of Google Search results and stay there.',
    link: 'https://www.techmagnate.com/seo-services.html',
    linkText: 'Get Top Ranking',
  },
  {
    imgSrc: 'https://www.techmagnate.com/files/2021/09/menuicon3.png',
    title: 'Pay Per Click',
    description:
      'As one of only 60 Google Premier Partners in India, we are amongst the best of the best when it comes to generating leads and driving sales via PPC services.',
    link: 'https://www.techmagnate.com/ppc-services-company-india.html',
    linkText: 'Increase Leads / Sales',
  },
  {
    imgSrc: 'https://www.techmagnate.com/files/2021/11/menuicon5.png',
    title: 'Website Designing and Development',
    description:
      'First impressions are very important & we can get that deal sealed for you right away. As your website design company, we work in a consultative manner, serving as your advisors, designers and developers.',
    link: 'https://www.techmagnate.com/website-designing-development.html',
    linkText: 'Upgrade Your Design',
  },
  {
    imgSrc: 'https://www.techmagnate.com/files/2021/11/menuicon2.png',
    title: 'Online Reputation Management',
    description:
      'Your reputation builds your brand; allow the SEO experts at Techmagnate to monitor, protect and build your online reputation.',
    link: 'https://www.techmagnate.com/online-reputation-management.html',
    linkText: 'BUILDING YOUR REPUTATION',
  },
  {
    imgSrc: 'https://www.techmagnate.com/files/2021/11/Ecommerce-Solutions.png',
    title: 'Ecommerce Solutions',
    description:
      'We combine our expertise in design, hosting, search engine marketing, analytics and conversion optimization to offer ecommerce solutions that ensure your sales keep growing month on month.',
    link: 'https://www.techmagnate.com/ecommerce-solutions.html',
    linkText: 'GROW YOUR SALES',
  },
  {
    imgSrc: 'https://www.techmagnate.com/files/2021/11/App-Store-Optimization.png',
    title: 'App Store Optimization',
    description:
      'Get your App ranked at the top for your target keywords on the Play Store and Apple Store. Enhance App visibility and multiply download numbers.',
    link: 'https://www.techmagnate.com/app-store-optimization-services.html',
    linkText: 'INCREASE DOWNLOAD',
  },
  // Add more service items as needed
];

const SEOServiceSection = () => {
  return (
    <section className="seoServices" id="seo-service">
      <div className="container">
        <div className="sectionHeading">
          <h1 className="heading">
            SEO Services Company &amp; Digital Marketing Agency in India
          </h1>
          <p>
            Techmagnate is India’s top digital marketing and SEO services company. From
            conceptualization to final-stage execution, we implement the entire digital
            marketing strategy. Though we adopt a 360° approach to digital marketing, our
            expertise lies in SEO services – from Enterprise SEO to local SEO, from App SEO
            to Video SEO and everything in between. With 15 years as leaders in SEO in
            India, we are on a mission to deliver transformational growth to 250 customers
            in 2025. If you’re serious about your digital performance, you've found the
            right partner. We’ll help you meet your marketing objectives and help your
            business achieve the growth you've always wanted.
          </p>
        </div>
        <div className="row">
          {servicesData.map((service, index) => (
            <div key={index} className="col-md-4 seoServicesBox">
              <div className="serviceImg">
                <img src={service.imgSrc} alt={service.title} />
              </div>
              <div className="seoservice-title">{service.title}</div>
              <p>{service.description}</p>
              <a href={service.link} className="getTopRankBtn">
                {service.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOServiceSection;
