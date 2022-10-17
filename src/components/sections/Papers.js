import React from "react";
import { Link } from "react-router-dom";
import { allPapers } from "../../data";
import Pagetitle from "../elements/Pagetitle";
import Paper from "../elements/Paper";

function Papers() {
  return (
    <section id="papers">
      <div className="container">
        <Pagetitle title="Technical Papers" />
        <div className="row blog-wrapper">
          {allPapers.slice(0, 3).map((paperItem) => (
            <div className="col-md-4" key={paperItem.id}>
              <Paper paperData={paperItem} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="spacer" data-height="30"></div>
          <Link to="/papers" className="btn btn-default">
            Show all papers
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Papers;
