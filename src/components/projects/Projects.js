import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Electronic Voting Machine"
          des="An innovative project that simulates an electronic voting machine, designed to securely handle votes with ease, ensuring accuracy and transparency in the voting process. It focuses on security features and real-time vote tallying."
          src={projectOne}
        />
        <ProjectsCard
          title="Club Hub - Event Calendar"
          des="A dynamic event management platform designed for clubs, where users can schedule, track, and promote events. It offers a responsive calendar interface to streamline event planning and notifications."
          src={projectTwo}
        />
        <ProjectsCard
          title="RFM Model-based Customer Segmentation"
          des="A data science project that focuses on customer segmentation using Recency, Frequency, and Monetary (RFM) analysis, combined with clustering, classification, and Buy 'Til You Die (BTYD) models to predict customer behavior."
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects;
