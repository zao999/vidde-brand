import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="w-full py-24 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-5xl font-medium text-brand-dark tracking-tight">
            {title}
          </h2>
          <div className="h-1.5 w-16 bg-brand-gold mt-8 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="w-full">
            {children}
        </div>
      </div>
    </section>
  );
};