
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import CourseArea from "./course-area";
import CourseDetailsArea from "./course-details-area";

const CourseDetails = () => {
  return (
    <>
      <Breadcrumb title="Workshop Details" subtitle="Workshop Details" isDbbl="Workshop" />
      <CourseDetailsArea />
      {/* <CourseArea /> */}
      <CounterArea />
    </>
  );
};

export default CourseDetails;
