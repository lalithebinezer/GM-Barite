import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageBanner from '../components/ui/PageBanner';
import CertificationBar from '../components/ui/CertificationBar';

const timelineEvents = [
  {
    year: '2005',
    title: 'The Foundation',
    description: 'GM Barite was established with a clear vision: to set a new standard for quality and efficiency in the mineral processing industry of Andhra Pradesh.',
  },
  {
    year: '2008',
    title: 'Technological Leap',
    description: 'We invested in state-of-the-art German crushing technology, a move that doubled our production capacity and significantly enhanced particle size consistency.',
  },
  {
    year: '2012',
    title: 'Partnership with APMDC',
    description: 'A landmark strategic alliance was forged with the Andhra Pradesh Mineral Development Corporation (APMDC), granting us access to premium-grade raw barite deposits and solidifying our market position.',
  },
  {
    year: '2016',
    title: 'Quality Assured',
    description: 'Achieved the prestigious ISO 9001:2015 certification, a testament to our unwavering commitment to world-class quality management systems.',
  },
  {
    year: '2021',
    title: 'Expanding Horizons',
    description: 'Inaugurated a dedicated micronization unit, allowing us to cater to high-tech industries by producing ultra-fine barite for specialized applications in plastics, pharmaceuticals, and coatings.',
  },
  {
    year: 'Today',
    title: 'Industry Leadership',
    description: 'As a leader in the field, we continue to innovate, focusing on sustainable practices, customer satisfaction, and delivering purity in every particle.',
  },
];


const AboutPage: React.FC = () => {
  return (
    <div className="bg-background">
      <PageBanner
        title="About GM Barite"
        imageUrl="https://picsum.photos/seed/aboutbanner/1920/1080"
        altText="Mining Operation"
      />

      <div className="container mx-auto px-6 py-20">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">Our Heritage, Our Strength</h2>
              <p className="text-lg text-primary leading-relaxed mb-4">
                Our manufacturing unit is strategically located at Mangampeta, Kadapa, Andhra Pradesh, India, a region renowned for its rich barite deposits. We are backed by the <span className="font-semibold">Andhra Pradesh Mineral Development Corporation (APMDC)</span>, which owns and operates the Mangampeta mine.
              </p>
              <p className="text-secondary leading-relaxed">
                The Mangampeta deposit is the largest single barite deposit in the world, estimated to contain over 74 million tonnes. This mine alone contributes approximately 90% of the barite production in Andhra Pradesh and is the leading barite mine globally. This direct access to a world-class resource ensures an unparalleled, consistent supply of high-quality raw material for our clients.
              </p>
            </div>
            <div>
              <img 
                src="https://picsum.photos/seed/factory/600/400" 
                alt="Processing Plant" 
                className="rounded-lg shadow-2xl w-full border border-border"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="my-20">
          <CertificationBar />
        </AnimatedSection>

        <AnimatedSection>
            <div className="my-20">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-16">
                Our Journey: A Timeline of Growth
                </h2>
                <div className="relative container mx-auto px-6">
                    <div className="absolute left-8 md:left-1/2 -ml-0.5 w-1 h-full bg-border"></div>
                    <div className="relative space-y-12">
                        {timelineEvents.map((event, index) => (
                        <div key={index} className="relative flex items-center md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-16 md:w-auto">
                              <div className="absolute bg-accent w-6 h-6 rounded-full border-4 border-background shadow-md z-10 left-[22px] md:left-1/2 -ml-3"></div>
                            </div>
                            <div className="w-full md:w-[calc(50%-2rem)] bg-surface p-6 rounded-lg shadow-xl border border-border transform group-odd:md:text-right group-hover:-translate-y-1 transition-transform duration-300 ml-12 md:ml-0">
                                <p className="text-sm font-semibold text-accent mb-1">{event.year}</p>
                                <h3 className="mb-2 font-bold text-primary text-xl font-serif">{event.title}</h3>
                                <p className="text-sm leading-relaxed text-secondary">{event.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-surface rounded-lg shadow-xl my-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="p-8 md:p-12">
                    <h2 className="text-3xl font-bold font-serif text-primary mb-4">Global Market Presence</h2>
                    <p className="text-secondary leading-relaxed">
                        Our strategic location and partnership with APMDC enable us to be a dominant force in the global barite market. India is a leading exporter of barytes, and we are at the forefront of this effort, supplying high-grade materials to key markets worldwide. Our robust logistics network ensures reliable and timely delivery for our international clients, solidifying our reputation as a trusted global partner.
                    </p>
                </div>
                <div className="h-64 lg:h-full">
                    <img 
                        src="https://picsum.photos/seed/logistics/600/400" 
                        alt="Global Logistics" 
                        className="w-full h-full object-cover rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none"
                        loading="lazy"
                        width="600"
                        height="400"
                    />
                </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center my-20">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <h3 className="text-2xl font-bold font-serif text-primary mb-2">Quality</h3>
                <p className="text-secondary">Unyielding commitment to the highest standards of purity and consistency in our products.</p>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold font-serif text-primary mb-2">Integrity</h3>
                <p className="text-secondary">Conducting business with transparency, honesty, and respect for our partners and the environment.</p>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold font-serif text-primary mb-2">Innovation</h3>
                <p className="text-secondary">Continuously investing in technology and processes to improve efficiency and product excellence.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default AboutPage;