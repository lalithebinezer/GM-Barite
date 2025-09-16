import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageBanner from '../components/ui/PageBanner';
import { mockCertifications } from '../data/mockData';
import type { Certification } from '../types';
import CertificationBar from '../components/ui/CertificationBar';

const CertificationCard: React.FC<{ cert: Certification }> = ({ cert }) => (
    <div className="bg-surface rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl border border-border">
        <div className="relative">
            <img 
                src={cert.imageUrl} 
                alt={cert.name} 
                className="w-full h-48 object-cover"
                loading="lazy"
                width="500"
                height="300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        <div className="p-6 text-center">
            <h3 className="text-xl font-bold font-serif text-primary mb-1">{cert.name}</h3>
            <p className="text-sm text-secondary mb-4">Issued by: {cert.issuer}</p>
            <a 
                href={cert.documentUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-transparent border border-border text-primary font-bold py-2 px-4 rounded-md shadow-sm transition-colors duration-300 hover:bg-background"
            >
                View Certificate
            </a>
        </div>
    </div>
);

const QualityPage: React.FC = () => {
  return (
    <div className="bg-background">
      <PageBanner
        title="Quality & Compliance"
        imageUrl="https://picsum.photos/seed/qualitybanner/1920/1080"
        altText="Quality inspection"
      />

      <div className="container mx-auto px-6 py-20">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">Our Unwavering Commitment to Excellence</h2>
            <p className="text-lg text-primary leading-relaxed">
              Quality is the bedrock of our operations. We adhere to the most stringent national and international standards to ensure that every particle of barite we produce meets the precise specifications required by our clients. Our certifications are a testament to our dedication to quality, safety, and environmental responsibility.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-20">
          <CertificationBar />
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-12">Our Official Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockCertifications.map((cert) => (
              <CertificationCard key={cert.id} cert={cert} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default QualityPage;