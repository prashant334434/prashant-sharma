import React from "react";
import Title from "../Shared/Title/Title";
import WorkProcessCard from "./WorkProcessCard";

const processList = [
  {
    id: 1,
    title: "Understanding Your Vision",
    info: "Discussing goals, audience, scope, and timelines for project alignment.",
    list: [
      "Detailed goal discussions",
      "Audience analysis",
      "Scope definition",
      "Clear timelines",
    ],
  },
  {
    id: 2,
    title: "Crafting Innovative Solutions",
    info: "Designing wireframes, mockups, and responsive code with scalable technologies.",
    list: [
      "Wireframes & mockups",
      "Figma design",
      "Responsive coding",
      "Scalable tech use",
    ],
  },
  {
    id: 3,
    title: "Development and Delivery ",
    info: "Comprehensive testing, deployment aid, post-launch maintenance, and performance monitoring.",
    list: [
      "Agile sprints",
      "User testing",
      "Thorough testing",
      "Post-launch maintenance",
    ],
  },
];
const WorkeProcess = () => {
  return (
    <section className="process__section pt-120 pb-120">
      <div className="container">
        <Title
          mainTitle="Your Dream Website In Just Few Steps"
          sortTitle="Working Process"
        />
        <div className="row g-4">
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkeProcess;
