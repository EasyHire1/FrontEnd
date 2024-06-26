import React from 'react';
import { ReasonToRender } from '../interfaces/interfaces';



const ReasonsToUseList: React.FC = () => {

  const reasonsToRender : ReasonToRender[] = [
    {
        title: 'Access to a Curated Talent Pool',
     img: '', 
     text: 'Access a diverse range of candidates with specialized skills in areas like software development, data science, cybersecurity, and more'
    }, 
    {
        title: 'Advanced Search',
    img: '', 
    text: 'Use detailed filters to narrow down candidates by experience, education, certifications, and more.'
   }, 
   {
    title: 'Time and Cost Efficiency',
   img: '', 
   text: 'Save on recruitment costs with our affordable subscription plans tailored to your needs.'
  }, 
  {
    title: 'Streamlined Hiring Process',
  img: '', 
  text: ' Directly communicate with candidates through our platform, making the hiring process seamless and efficient.'
 }, 
 {
    title: 'Automated Scheduling',
 img: '', 
 text: 'Schedule interviews and follow-ups with ease using our built-in calendar and reminder system'
 },
  {
    title: 'Supportive Community and Resources',
  img: '', 
  text: 'Connect with other recruiters and industry experts to share insights and strategies'
  },

]

  return (
    <div>
        <div>
        {reasonsToRender.map(reason => (
         <div key={reason.title}>
        <h3>{reason.img} {reason.title}</h3>
        <p>{reason.text}</p>
      </div>
    ))}
     </div>
  </div>
  );
};

export default ReasonsToUseList;