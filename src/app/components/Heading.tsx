// src/app/components/heading.tsx
import React from 'react';
import "@/app/styles/heading.css"

interface PropsType {
  title: string;
}

const Heading: React.FC<PropsType> = ({ title }) => {
  return (
    <div className='text-center text-4xl pb-8'>
      <p className='border-b-4 inline-block pb-2'>{title}</p>
    </div>
  );
};

export default Heading;
