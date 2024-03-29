import Link from "next/link";
import React from "react";

// choose data 
const choose_data = {
title: "Founder",
sub_title: "Meet Our Founder",
des: <>Shahrukh Nadeem is an "Expert Generalist" where his forte lies in Business 
   Strategy, Channels development, Market Planning, Research, Product 
   Development and Entrepreneurship.</>,
  experiences_years: "15",


}
const {title,sub_title, des, experiences_years} = choose_data

// choose list data
const choose_list_data = [
  {
    list: "Creatorpreneur",
  },
  {
    list: "Teacher | Trainer | Author",
  },
  {
    list: "Startup CEO",
  },
  {
    list: "Speaker",
  },
];
const ChooseArea = ({style_about, style_2}) => {
  return (
    <>
      <section
        className={`choose-area bg-bottom ${style_about ? "pb-120" : "grey-bg"} ${style_2 ? "pt-120 pb-90" : ""} wow fadeInUp`}
        data-wow-duration=".8s"
        data-wow-delay=".4s"
        style={{ backgroundImage: style_about ? null : `url(/assets/img/bg/shape-bg-1.png)`  }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6 col-md-12">
              <div className="tp-choose-content mb-30">
                <div className="section-title mb-25">
                  <span className="tp-sub-title-box mb-15">{title}</span>
                  <h2 className="tp-section-title mb-20">
                   {sub_title}
                  </h2>
                  <p>
                    {des}
                  </p>
                </div>
                <div className="tp-choose-list tp-choose-bg mb-60">
                  <ul>
                    {choose_list_data.map((item, i) => (
                      <li key={i}>
                        <div className="tp-list-bg">
                          <i className="fa-light fa-check"></i>
                          {item.list}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="choose-btn">
                  <Link href="/instructor-profile" className="tp-btn">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-12">
              <div className="tp-choose-img tp-choose-img-2 p-relative mb-30 mr-50 text-end">
                <img src="/assets/img/about/ceo.png" alt="choose-img" />
                <div className="tpchoose-img-text tp-chose-shape d-none d-md-block">
                  <ul>
                    <li>
                      <i>{experiences_years}+</i>
                      <p>Years Experiences</p>
                    </li>
                    <li>
                      <i className="fa-light fa-check"></i>
                      <p>Strategic Visionary</p>
                    </li>
                    <li>
                      <p>Total Students</p>
                      <img
                        src="/assets/img/icon/choose-2-shape.png"
                        alt="choose-shape"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseArea;
