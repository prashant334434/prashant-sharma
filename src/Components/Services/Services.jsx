import React from "react";
import Service from "./Service";
import Title from "../Shared/Title/Title";

const serviceList = [
  {
    id: "01",
    heading: "Landing Page Design",
    subHeading: "Designer",
    para: " I specialize in creating visually appealing and conversion-focused landing pages that captivate users and drive engagement. From eye-catching layouts to seamless navigation, I craft designs that align with your brand and effectively convey your message.",
  },

  {
    id: "02",
    heading: "UI/UX Development",
    subHeading: "UI/UX ",
    para: "Using Figma, I transform your design concepts into functional and responsive websites or applications. With attention to detail and adherence to design guidelines, I ensure a smooth transition from prototype to code, resulting in a polished and user-friendly digital product.",
  },
  {
    id: "03",
    heading: "Web Application Development:",
    subHeading: " Web Development",
    para: "Leveraging my expertise in Node.js, React.js, and JavaScript, I develop robust and scalable web applications tailored to your business needs. From dynamic interfaces to backend functionality, I create solutions that optimize performance and enhance user experience.",
  },
  {
    id: "04",
    heading: " Mobile Application Development",
    subHeading: "App development",
    para: "With proficiency in React Native, I build cross-platform mobile applications that run seamlessly on both iOS and Android devices. I focus on delivering intuitive interfaces, efficient functionality, and native-like performance to provide a standout mobile experience.",
  },
  {
    id: "05",
    heading: " LLM's Tech Consultancy",
    subHeading: "Tech Consultant",
    para: "As a tech consultant, I offer strategic guidance and solutions to help businesses navigate the digital landscape effectively. From technology selection to implementation strategies, I provide expert advice and support to drive innovation and achieve business objectives.",
  },
];
const Services = ({ isHeading }) => {
  return (
    <section
      id="services"
      className={`service__section overhid ${isHeading && "pt-120"}  pb-120`}
    >
      <div className="container">
        {isHeading && (
          <Title
            mainTitle="My Special Service For Your Business Development"
            sortTitle="Services That i Provide"
          />
        )}

        <div className={`service__uniquewrap `}>
          {serviceList.map(({ id, heading, subHeading, para }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
