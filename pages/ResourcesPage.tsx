import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageBanner from '../components/ui/PageBanner';

const ResourcesPage: React.FC = () => {
  return (
    <div className="bg-background">
      <PageBanner
        title="Resources"
        imageUrl="https://picsum.photos/seed/resources/1920/1080"
        altText="Technical documents"
      />
      <div className="container mx-auto px-6 py-20 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">Content Coming Soon</h2>
          <p className="text-lg text-secondary leading-relaxed max-w-2xl mx-auto">
            We are currently developing a comprehensive resource center which will include technical data sheets, industry articles, and case studies. Please check back later.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ResourcesPage;