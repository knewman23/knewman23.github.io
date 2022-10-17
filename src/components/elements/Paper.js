import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

function Paper({ paperData }) {
  const { id, category, title, date, author, image, filesource, urlTitle } =
    paperData;

  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="blog-item rounded bg-white shadow-dark">
        <div className="thumb">
          <a href="!#">
            <span className="category">{category}</span>
          </a>
          <Link to={`paper/${urlTitle}`}>
            <img src={image} alt="paper-title" />
          </Link>
        </div>
        <div className="details">
          <h4 className="my-0 title">
            <Link to={`paper/${urlTitle}`}>
              {title.substring(0, 45) + "..."}
            </Link>
          </h4>
          <ul className="list-inline meta mb-0 mt-2">
            <li className="list-inline-item">{date}</li>
            <li className="list-inline-item">{author}</li>
          </ul>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Paper;
