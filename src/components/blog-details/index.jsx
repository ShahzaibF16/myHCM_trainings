
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import PostboxBlogDetails from "./postbox-blog-details";
import Blog_1 from "./the_future_of_work_adapting_training_services_to_changing_trends";

const BlogDetails = () => {
  return (
    <>
      <Breadcrumb title="Blog Details" subtitle="Blog Details" isDbbl="Blog" />
      <Blog_1 />
      <CounterArea />
    </>
  );
};

export default BlogDetails;
