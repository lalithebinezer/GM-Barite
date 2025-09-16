import React, { useState, useEffect, useMemo } from 'react';
import type { Product } from '../types';
import { mockProducts } from '../data/mockData';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageBanner from '../components/ui/PageBanner';
import Spinner from '../components/ui/Spinner';
import Accordion from '../components/ui/Accordion';

const ProductsPage: React.FC = () => {
    // State for the immediate value of the filter inputs
    const [gradeFilter, setGradeFilter] = useState<string>('all');
    const [sgFilter, setSgFilter] = useState<string>('all');

    // State for the debounced filter values that will be used for filtering
    const [debouncedGradeFilter, setDebouncedGradeFilter] = useState<string>(gradeFilter);
    const [debouncedSgFilter, setDebouncedSgFilter] = useState<string>(sgFilter);

    const [loadingTds, setLoadingTds] = useState<number | null>(null);
    const [expandedProductId, setExpandedProductId] = useState<number | null>(null);

    const toggleDetails = (productId: number) => {
        setExpandedProductId(prevId => (prevId === productId ? null : productId));
    };

    // useEffect to debounce the filter inputs
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedGradeFilter(gradeFilter);
            setDebouncedSgFilter(sgFilter);
        }, 300); // 300ms debounce delay

        // Cleanup function to clear timeout if filters change before delay
        return () => {
            clearTimeout(handler);
        };
    }, [gradeFilter, sgFilter]);

    const filteredProducts = useMemo(() => {
        return mockProducts.filter(product => {
            const gradeMatch = debouncedGradeFilter === 'all' || product.grade === debouncedGradeFilter;
            const sgMatch = debouncedSgFilter === 'all' || 
                (debouncedSgFilter === '4.2+' && parseFloat(product.specificGravity) >= 4.2) || 
                (debouncedSgFilter === '4.1-4.2' && parseFloat(product.specificGravity) >= 4.1 && parseFloat(product.specificGravity) < 4.2) || 
                (debouncedSgFilter === '<4.1' && parseFloat(product.specificGravity) < 4.1);
            return gradeMatch && sgMatch;
        });
    }, [debouncedGradeFilter, debouncedSgFilter]); // Re-run filter logic only when debounced values change

    const uniqueGrades = ['all', ...Array.from(new Set(mockProducts.map(p => p.grade)))];
    
    const handleDownloadTds = (productId: number) => {
        setLoadingTds(productId);
        setTimeout(() => {
            // In a real app, this would trigger a file download.
            console.log(`Downloading TDS for product ${productId}`);
            setLoadingTds(null);
        }, 2000); // Simulate 2-second download
    };


  return (
    <div className="bg-background">
      <PageBanner
        title="Our Products"
        imageUrl="https://picsum.photos/seed/productbanner/1920/1080"
        altText="Close-up of minerals"
      />

      <div className="container mx-auto px-6 py-20">
        <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">High-Quality Barite Mineral Powder</h2>
                <p className="text-lg text-primary leading-relaxed">
                    Barite (BaSO₄), also known as 'heavy spar', is a naturally occurring barium sulphate mineral prized for its high density (4.5 g/cm³). We produce a comprehensive range of Barite powders, meticulously processed to meet the exacting specifications of various industries.
                </p>
            </div>
        </AnimatedSection>
        
        <AnimatedSection>
            <div className="bg-surface p-6 rounded-lg shadow-xl mb-12 border border-border">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <span className="font-semibold text-primary">Filter by:</span>
                    <div className="flex-grow w-full md:w-auto">
                        <label htmlFor="grade-filter" className="sr-only">Grade</label>
                        <select id="grade-filter" value={gradeFilter} onChange={e => setGradeFilter(e.target.value)} className="w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-accent">
                            {uniqueGrades.map(grade => <option key={grade} value={grade}>{grade === 'all' ? 'All Grades' : grade}</option>)}
                        </select>
                    </div>
                    <div className="flex-grow w-full md:w-auto">
                        <label htmlFor="sg-filter" className="sr-only">Specific Gravity</label>
                        <select id="sg-filter" value={sgFilter} onChange={e => setSgFilter(e.target.value)} className="w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-accent">
                            <option value="all">All Specific Gravity</option>
                            <option value="4.2+">4.20 SG & Higher</option>
                            <option value="4.1-4.2">4.10 - 4.19 SG</option>
                            <option value="<4.1">Below 4.10 SG</option>
                        </select>
                    </div>
                </div>

                {/* Desktop Table View */}
                <div className="hidden md:block mt-6">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="p-3 font-semibold text-primary border-b-2 border-border">Product Name</th>
                                <th className="p-3 font-semibold text-primary border-b-2 border-border">Grade</th>
                                <th className="p-3 font-semibold text-primary border-b-2 border-border">Specific Gravity</th>
                                <th className="p-3 font-semibold text-primary border-b-2 border-border">Particle Size</th>
                                <th className="p-3 font-semibold text-primary border-b-2 border-border text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.map(product => (
                                <React.Fragment key={product.id}>
                                    <tr className="hover:bg-background transition-colors">
                                        <td className="p-3 border-b border-border font-serif font-bold text-primary">{product.name}</td>
                                        <td className="p-3 border-b border-border text-secondary">{product.grade}</td>
                                        <td className="p-3 border-b border-border text-secondary">{product.specificGravity}</td>
                                        <td className="p-3 border-b border-border text-secondary">{product.particleSize}</td>
                                        <td className="p-3 border-b border-border text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button 
                                                    onClick={() => toggleDetails(product.id)}
                                                    className="bg-transparent border border-border text-primary font-bold text-sm py-2 px-4 rounded-md shadow-sm transition-colors duration-300 hover:bg-background"
                                                    aria-expanded={expandedProductId === product.id}
                                                >
                                                    {expandedProductId === product.id ? 'Hide Details' : 'Show Details'}
                                                </button>
                                                <button 
                                                    onClick={() => handleDownloadTds(product.id)}
                                                    disabled={loadingTds !== null}
                                                    className="bg-transparent border border-border text-primary font-bold text-sm py-2 px-4 rounded-md shadow-sm transition-colors duration-300 hover:bg-background flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px] h-[38px]"
                                                >
                                                    {loadingTds === product.id ? <Spinner className="text-primary" /> : 'Download TDS'}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    {expandedProductId === product.id && (
                                        <tr className="bg-background/50">
                                            <td colSpan={5} className="p-4 border-b border-border">
                                                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 bg-surface p-4 rounded-md border border-border">
                                                    <div>
                                                        <h4 className="font-bold font-serif text-primary mb-2">Chemical Purity</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-secondary text-sm">
                                                            {product.chemicalPurity.map((item, index) => <li key={index}>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold font-serif text-primary mb-2">Primary Applications</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-secondary text-sm">
                                                            {product.applications.map((item, index) => <li key={index}>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden mt-6 space-y-4">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="p-4 border border-border rounded-lg shadow-md bg-surface">
                             <h3 className="font-serif font-bold text-lg text-primary mb-2">{product.name}</h3>
                             <p className="text-secondary text-sm"><span className="font-semibold text-primary">Grade:</span> {product.grade}</p>
                             <p className="text-secondary text-sm"><span className="font-semibold text-primary">SG:</span> {product.specificGravity}</p>
                             <p className="text-secondary text-sm"><span className="font-semibold text-primary">Fineness:</span> {product.particleSize}</p>
                             <div className="mt-4 border-t border-border pt-2">
                                <Accordion title="Chemical Purity">
                                    <ul className="list-disc list-inside">
                                        {product.chemicalPurity.map((item, index) => <li key={index}>{item}</li>)}
                                    </ul>
                                </Accordion>
                                <Accordion title="Applications">
                                     <ul className="list-disc list-inside">
                                        {product.applications.map((item, index) => <li key={index}>{item}</li>)}
                                    </ul>
                                </Accordion>
                             </div>
                             <button 
                                onClick={() => handleDownloadTds(product.id)}
                                disabled={loadingTds !== null}
                                className="mt-4 w-full bg-transparent border border-border text-primary text-sm font-bold py-2 px-4 rounded-md shadow-sm transition-colors duration-300 hover:bg-background flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed h-[38px]"
                            >
                                {loadingTds === product.id ? <Spinner className="text-primary" /> : 'Download TDS'}
                             </button>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
        
        <AnimatedSection>
            <div className="my-20">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-12">Industrial Applications & Uses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
                        <h3 className="font-bold font-serif text-xl text-primary mb-2">🛢️ Oil & Gas Well Drilling</h3>
                        <p className="text-sm text-secondary">The primary use (over 88% of production). As a non-corrosive, non-toxic weighting agent in drilling 'mud', it controls pressure, prevents blowouts, and lubricates the drill bit.</p>
                    </div>
                    <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
                        <h3 className="font-bold font-serif text-xl text-primary mb-2">🎨 Industrial Filler</h3>
                        <p className="text-sm text-secondary">Used in paints and plastics to add density and in automobile brake pads and paint primers for gloss and protection.</p>
                    </div>
                    <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
                        <h3 className="font-bold font-serif text-xl text-primary mb-2">🧪 Chemical Industry</h3>
                        <p className="text-sm text-secondary">The main source of barium for creating various essential barium compounds used in manufacturing processes worldwide.</p>
                    </div>
                    <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
                        <h3 className="font-bold font-serif text-xl text-primary mb-2">🛡️ Radiation Shielding</h3>
                        <p className="text-sm text-secondary">Effectively blocks X-ray and gamma-ray emissions, used in high-density concrete for shielding in hospitals and nuclear facilities.</p>
                    </div>
                     <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
                        <h3 className="font-bold font-serif text-xl text-primary mb-2">💊 Medical Applications</h3>
                        <p className="text-sm text-secondary">Ultrapure barite is a safe, X-ray-opaque contrast medium for CT scans and examinations of the gastrointestinal tract.</p>
                    </div>
                     <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
                        <h3 className="font-bold font-serif text-xl text-primary mb-2">💎 Glass Manufacturing</h3>
                        <p className="text-sm text-secondary">Acts as a flux in glass production, enhancing the brilliance and clarity of the final product.</p>
                    </div>
                </div>
            </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default ProductsPage;