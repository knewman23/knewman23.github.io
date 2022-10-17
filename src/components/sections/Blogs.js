import React from "react";
import { Link } from "react-router-dom";
import Blog from "../elements/Blog";
import Pagetitle from "../elements/Pagetitle";

const allBlogs = [
  {
    id: 1,
    title: "Linear Regression with TensorFlow on TimeSeries Data",
    image: "images/blog/ml.webp",
    filesource: "../../blogs/linear-regression.md",
    date: "22 September, 2018",
    author: "Krys",
    category: "Machine Learning",
  },
  {
    id: 2,
    title: "Common Misconceptions About Payment",
    image: "images/blog/2.svg",
    filesource: "../../blogs/common-misconceptions-about-payment.md",
    date: "07 February, 2020",
    author: "Bolby",
    category: "Tutorial",
  },
  {
    id: 3,
    title: "3 Things To Know About Startup Business",
    image: "images/blog/3.svg",
    filesource: "../../blogs/things-to-know-about-startup-business.md",
    date: "06 February, 2020",
    author: "Bolby",
    category: "Business",
  },
];

function Blogs() {
  return (
    <section id="blog">
      <div className="container">
        <Pagetitle title="Latest Posts" />
        <div className="row blog-wrapper">
          {allBlogs.map((blogItem) => (
            <div className="col-md-4" key={blogItem.id}>
              <Blog blogData={blogItem} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="spacer" data-height="30"></div>
          <Link to="/blogs" className="btn btn-default">
            Show all blogs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
