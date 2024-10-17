import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaFutbol, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
      <Card
  title="AI/ML"
  des="I like to follow the latest trends in Artificial Intelligence and Machine Learning, focusing on advancements in neural networks, deep learning, and their real-world applications."
  icon={<FaFutbol />}
/>

<Card
  title="Web Development"
  des="I build responsive and dynamic websites using the MERN stack (MongoDB, Express, React, Node.js), focusing on creating seamless user experiences and modern UI designs."
  icon={<AiFillAppstore />}
/>

<Card
  title="Backend Developer"
  des="I develop efficient and scalable backend systems, and occasionally create user-friendly graphical user interfaces (GUIs) using Python's Tkinter library for desktop applications."
  icon={<SiProgress />}
/>
      
      </div>
    </section>
  );
}

export default Features