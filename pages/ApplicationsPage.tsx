import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageBanner from '../components/ui/PageBanner';
import Accordion from '../components/ui/Accordion';

const ApplicationsPage: React.FC = () => {
  return (
    <div className="bg-background">
      <PageBanner
        title="Product Applications & Grades"
        imageUrl="https://picsum.photos/seed/applications/1920/1080"
        altText="Industrial applications of barite"
      />
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">Barite Tailored for Every Industry</h2>
            <p className="text-lg text-primary leading-relaxed">
              Barite's versatility stems from its unique properties. We categorize our products based on their end-use, ensuring each grade meets the precise physical and chemical specifications demanded by different industries. Explore how our barite is engineered for performance, from high-pressure drilling environments to high-purity medical applications.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="space-y-16">
            {/* Oil & Gas */}
            <AnimatedSection>
                <div className="p-8 rounded-xl shadow-2xl bg-surface border border-border">
                    <h3 className="text-2xl md:text-3xl font-bold font-serif text-primary mb-6 flex items-center gap-4">
                        <span className="text-4xl">🛢️</span>
                        <span>Oil & Gas Well Drilling Grade</span>
                    </h3>
                    <p className="mb-6 text-primary">The primary use, consuming over 88% of world barite production. It acts as a non-corrosive, non-toxic weighting agent in drilling 'mud' to control pressure, prevent blowouts, and lubricate the drill bit.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-background p-4 rounded-lg border border-border h-full">
                            <Accordion title="Key Specifications">
                               <p><strong>Specific Gravity (SG):</strong> Min 4.15 g/cm³, with 4.20 g/cm³ required for offshore drilling. Meets API Spec 13A.</p>
                               <p><strong>Fineness:</strong> Min 97% passes through a 75-micron (200-mesh) sieve.</p>
                               <p><strong>Chemical Purity:</strong> Min 90% BaSO₄. Soluble metals like Calcium limited to 250 ppm max.</p>
                            </Accordion>
                        </div>
                        <div className="bg-background p-4 rounded-lg border border-border h-full">
                           <Accordion title="Performance">
                                <p>Passes API performance tests, ensuring its addition to standard bentonite suspension results in an apparent viscosity not exceeding 50 centipoise. Does not interfere with magnetic measurements in the borehole.</p>
                            </Accordion>
                        </div>
                         <div className="bg-background p-4 rounded-lg border border-border h-full">
                           <Accordion title="APMDC Grades">
                               <p><strong>A Grade:</strong> SG of 4.20 or higher (avg 4.25).</p>
                               <p><strong>B Grade:</strong> Minimum SG of 4.10.</p>
                               <p><strong>C, D, W Grades:</strong> Lower density products, typically &gt;3.90 SG.</p>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
            
            {/* Chemical Industry */}
            <AnimatedSection>
                <div className="p-8 rounded-xl shadow-2xl bg-surface border border-border">
                    <h3 className="text-2xl md:text-3xl font-bold font-serif text-primary mb-6 flex items-center gap-4">
                        <span className="text-4xl">🧪</span>
                        <span>Chemical Industry Grade</span>
                    </h3>
                    <p className="mb-6 text-primary">Serves as the main source of barium for the chemical industry, used in the preparation of various essential barium compounds.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="bg-background p-4 rounded-lg border border-border h-full">
                           <Accordion title="Grade 1 - Quality A">
                               <p><strong>Purity:</strong> Min 97.0% BaSO₄.</p>
                               <p><strong>Iron (Fe):</strong> 0.10% max.</p>
                               <p><strong>Soluble Matter:</strong> 0.02% max.</p>
                               <p>Ideal for high-purity chemical synthesis.</p>
                            </Accordion>
                        </div>
                        <div className="bg-background p-4 rounded-lg border border-border h-full">
                           <Accordion title="Grade 1 - Quality B">
                               <p><strong>Purity:</strong> Min 90.0% BaSO₄.</p>
                               <p><strong>Iron (Fe):</strong> 1.5% max.</p>
                               <p>A cost-effective solution for general chemical processes.</p>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
            
            {/* Other Industries - Grid Layout */}
            <AnimatedSection>
                <h3 className="text-3xl font-bold font-serif text-primary text-center mb-12">Diverse Industrial Applications</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Filler & Extender */}
                    <div className="p-6 rounded-xl shadow-xl bg-surface border border-border flex flex-col">
                        <h3 className="text-2xl font-bold font-serif text-primary mb-4 flex items-center gap-3">
                            <span className="text-3xl">🎨</span>
                            <span>Industrial Filler & Extender</span>
                        </h3>
                        <p className="text-secondary flex-grow">Used for its high density and chemical inertness in paints, plastics, and rubber. Specific applications include automobile brake pads and paint primers for gloss and protection.</p>
                        <div className="mt-4 bg-background p-4 rounded-md text-sm border border-border">
                            <p className="text-secondary"><strong className="text-primary">Key Specs:</strong> High brightness/whiteness, low oil absorption, fine grain size (~2-3 μm).</p>
                        </div>
                    </div>

                    {/* Radiation Shielding */}
                    <div className="p-6 rounded-xl shadow-xl bg-surface border border-border flex flex-col">
                        <h3 className="text-2xl font-bold font-serif text-primary mb-4 flex items-center gap-3">
                            <span className="text-3xl">🛡️</span>
                            <span>Radiation Shielding</span>
                        </h3>
                        <p className="text-secondary flex-grow">Effectively blocks X-ray and gamma-ray emissions. Used as an aggregate in high-density concrete for shielding in hospitals, nuclear power plants, and research facilities.</p>
                         <div className="mt-4 bg-background p-4 rounded-md text-sm border border-border">
                            <p className="text-secondary"><strong className="text-primary">Form:</strong> Crushed and screened to sizes from 4.75mm to 3.75cm.</p>
                        </div>
                    </div>
                    
                    {/* Medical Grade */}
                    <div className="p-6 rounded-xl shadow-xl bg-surface border border-border flex flex-col">
                        <h3 className="text-2xl font-bold font-serif text-primary mb-4 flex items-center gap-3">
                            <span className="text-3xl">💊</span>
                            <span>Medical Grade</span>
                        </h3>
                        <p className="text-secondary flex-grow">Ultrapure barite serves as a safe, X-ray-opaque contrast medium for CT scans and examinations of the gastrointestinal tract.</p>
                        <div className="mt-4 bg-background p-4 rounded-md text-sm border border-border">
                            <p className="text-secondary"><strong className="text-primary">Key Specs:</strong> Ultrapure quality. Often supplied in micronised (ultra-fine) form.</p>
                        </div>
                    </div>

                    {/* Glass Manufacturing */}
                    <div className="p-6 rounded-xl shadow-xl bg-surface border border-border flex flex-col">
                        <h3 className="text-2xl font-bold font-serif text-primary mb-4 flex items-center gap-3">
                            <span className="text-3xl">💎</span>
                            <span>Glass Manufacturing</span>
                        </h3>
                        <p className="text-secondary flex-grow">Acts as a flux in glass production, enhancing the brilliance, clarity, and workability of the final product.</p>
                         <div className="mt-4 bg-background p-4 rounded-md text-sm border border-border">
                            <p className="text-secondary"><strong className="text-primary">Key Specs:</strong> Requires strict limits on contaminant minerals or elements that could discolor glass.</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage;