import React, { useState, useEffect } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { CTA, Footer} from '../components';
import { experiences, skills } from '../constants';

import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);



  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{' '}
        <span className='red-gradient_text font-semibold drop-shadow'>
          {' '}
          Neeraj
        </span>{' '}
        👋
      </h1>

     

      <div className='mt-10 flex flex-col gap-3 text-improved'>
        <p className='leading-relaxed text-xl'>
          <strong>Software Engineer | Tech Enthusiast</strong>
        </p>
        <p className='leading-relaxed text-lg'>
          As a seasoned Software and Web Developer, my journey in technology has been driven by an unwavering passion for innovation and a commitment to excellence. With a Postgraduate Degree in Computer and Information Science from Auckland University of Technology and an undergraduate degree in Electronics and Communication from VIT University, Vellore, I have honed my expertise across a spectrum of tech domains.
        </p>
        <p className='leading-relaxed text-lg'>
          Throughout my career, I've embraced roles that challenged and expanded my skill set. From pioneering cutting-edge software solutions to fortifying cybersecurity defenses, I've not only adapted to the evolving tech landscape but also actively shaped it. My technical acumen spans across full-stack development, network engineering, and integrating robust security measures into complex systems.
        </p>
        <p className='leading-relaxed text-lg'>
          In the dynamic fields of Artificial Intelligence, Machine Learning, Cloud Computing, and Blockchain, I have contributed to projects that pushed the boundaries of what's possible, delivering tangible improvements in data analysis and system efficiencies. My work has been marked by a 'never say die' attitude, whether it's navigating the competitive currents of the industry or leading my teams through high-stake projects. Beyond my technical contributions, I'm poised to embark on the freelance journey, leveraging my diverse skillset to provide bespoke solutions to global clients. With each project, I bring not just years of experience, but a relentless drive to exceed expectations and a forward-thinking mindset that anticipates the needs of tomorrow.
        </p>
      </div>

      <div className='mt-12 flex'>
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FFB833'];
            const color = colors[index % colors.length];
            return (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: color, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                icon={
                  <div
                    className='flex justify-center items-center w-full h-full'
                    style={{ backgroundColor: color, borderRadius: '50%' }}
                  >
                  </div>
                }
                contentStyle={{
                  borderBottom: '18px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/100 font-normal pl-1 text-md'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className='border-slate-200' />

      <CTA />
      <Footer />
    </section>
  );
};

export default About;
