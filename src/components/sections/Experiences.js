import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "MSE Software Engineering",
    years: "2016 - 2019",
    content: "Arizona State University",
  },
  {
    id: 2,
    title: "BS Computer Science",
    years: "2012 - 2016",
    content: "Arizona State University",
  },
  {
    id: 3,
    title: "IBM Data Science Certificate",
    years: "2022 - Present",
    content: "Coursera",
  },
  {
    id: 4,
    title: "Ruby on Rails Certificate",
    years: "2022 - Present",
    content: "Udemy",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Senior Software Engineer @ Trainual",
    years: "May 2022 - Present",
    content:
      "Collaborate in a fast growing startup environment to provide quality software solutions, focused on creating Growth for the team",
  },
  {
    id: 2,
    title: "Software Product Engineer @ Intel",
    years: "Sep 2020 - May 2022",
    content:
      "Design and implement software solutions that allow for in-depth analysis of Intel demand and products helping to save billions of dollars across the company",
  },
  {
    id: 3,
    title: "Lead Software Engineer @ Intel",
    years: "May 2019 - Aug 2020",
    content:
      "Designed, implemented, and maintained scalable software solutions that provide data analytics and enhanced business functionality for the Assembly Test and Technology Development Factory",
  },
  {
    id: 4,
    title: "Software Engineer @ Intel",
    years: "May 2014 - Apr 2019",
    content:
      "Technical Owner of Enterprise Auditing Application designed and built with Angular, NodeJs and SAP HANA Services to ensure secure and performant SAP Systems across the IT Landscape",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
