import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";

const aboutContent = {
	name: "Krys",
	avatarImage: "/images/avatar2.png",
	content:
		"I'm an Arizona native and Senior Software Engineer with almost a decade of experience designing software. I love spending time with my wife, Sabrina, and three dogs, Nova, Hudson, and Mitsy.",
	content2:
		"Outside of coding you can probably find me working on our 1929 Ford hot rod, trying new craft beers or training Brazilian Jiu Jitsu.",
	content3:
		"Some of my favorite hobbies include drawing, 3D printing, camping, and playing guitar.",
};

function getRandInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

const counterData = [
	{
		id: 2,
		title: "Cups of Coffee",
		count: getRandInteger(5670, 7000),
		icon: "icon icon-cup",
	},
	{
		id: 1,
		title: "Bugs Found",
		count: getRandInteger(1989, 3000),
		icon: "icon fas fa-bug",
	},
	{
		id: 3,
		title: "Slack Messages",
		count: getRandInteger(2827, 5000),
		icon: "icon fab fa-slack",
	},
	{
		id: 4,
		title: "Stack Overflow Searches",
		count: getRandInteger(2000, 5000),
		icon: "icon fab fa-stack-overflow",
	},
];

function About() {
	return (
		<section id="about">
			<div className="container">
				<Pagetitle title="About Me" />
				<div className="row">
					<div className="col-6 col-sm-4 col-md-3 mx-auto">
						<div className="text-center text-md-left">
							<img src={aboutContent.avatarImage} alt={aboutContent.name} />
						</div>
						<div className="spacer d-md-none d-lg-none" data-height="30"></div>
					</div>

					<div className="col-md-9 triangle-left-md triangle-top-sm">
						<div className="rounded bg-white shadow-dark padding-30">
							<div className="row">
								<div className="col-md-12">
									<p>{aboutContent.content}</p>
									<p>{aboutContent.content2}</p>
									<p>{aboutContent.content3}</p>
									<div
										className="spacer d-md-none d-lg-none"
										data-height="30"
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="spacer" data-height="70"></div>
				<div className="row fix-spacing">
					{counterData.map((counter) => (
						<div key={counter.id} className="col-md-3 col-sm-6">
							<TrackVisibility once>
								<Counter counterItem={counter} />
							</TrackVisibility>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default About;
