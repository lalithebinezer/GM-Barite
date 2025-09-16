import React, { useState } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageBanner from '../components/ui/PageBanner';
import { mockProducts } from '../data/mockData';
import Spinner from '../components/ui/Spinner';

const Stepper: React.FC<{ currentStep: number; steps: string[] }> = ({ currentStep, steps }) => {
    return (
        <div className="flex items-start justify-center">
            {steps.map((label, index) => {
                const stepNumber = index + 1;
                const isCompleted = stepNumber < currentStep;
                const isActive = stepNumber === currentStep;
                return (
                    <React.Fragment key={label}>
                        <div className="flex flex-col items-center text-center w-24">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                                isCompleted ? 'bg-accent border-accent text-white' : ''
                                } ${
                                isActive ? 'bg-surface border-accent ring-4 ring-accent/20' : ''
                                } ${
                                !isCompleted && !isActive ? 'bg-surface border-border' : ''
                                }`}
                            >
                                {isCompleted ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                                ) : (
                                <span className={`font-bold text-lg ${isActive ? 'text-accent' : 'text-secondary'}`}>{stepNumber}</span>
                                )}
                            </div>
                            <p className={`mt-2 text-xs font-semibold w-full break-words ${isActive || isCompleted ? 'text-primary' : 'text-secondary'}`}>{label}</p>
                        </div>
                        {index < steps.length - 1 && (
                            <div className={`flex-1 h-1 mt-5 transition-colors duration-300 ${isCompleted ? 'bg-accent' : 'bg-border'}`}></div>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};


const ContactPage: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formState, setFormState] = useState({
        // Step 1
        fullName: '',
        email: '',
        companyName: '',
        country: '',
        // Step 2
        product: mockProducts[0].name,
        quantity: '',
        quantityUnit: 'MT',
        packaging: 'Jumbo Bags (1.5 MT)',
        // Step 3
        shippingTerms: 'FOB',
        destinationPort: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({...prevState, [name]: value}));
    }

    const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 3) {
            nextStep();
            return;
        }
        setIsSubmitting(true);
        console.log('RFQ submitting:', formState);
        setTimeout(() => {
            console.log('RFQ submitted:', formState);
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 2500); // Simulate network request
    }

  return (
    <div className="bg-background">
      <PageBanner
        title="Request a Quote"
        imageUrl="https://picsum.photos/seed/contactbanner/1920/1080"
        altText="Global logistics"
      />

      <div className="container mx-auto px-6 py-20">
        <AnimatedSection>
            <div className="max-w-4xl mx-auto bg-surface p-8 rounded-2xl shadow-2xl border border-border">
                {isSubmitted ? (
                    <div className="text-center py-12 animate-fade-in">
                        <h2 className="text-3xl font-bold font-serif text-primary mb-4">Thank You!</h2>
                        <p className="text-secondary leading-relaxed">Your Request for Quote has been received. Our team will review the details and get back to you with a comprehensive proposal shortly.</p>
                    </div>
                ) : (
                    <>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold font-serif text-primary text-center mb-6">Streamlined RFQ Process</h2>
                            <Stepper currentStep={step} steps={['Company Details', 'Product Requirements', 'Logistics']} />
                        </div>
                    
                        <form onSubmit={handleSubmit}>
                            {step === 1 && (
                                <div className="space-y-6 animate-fade-in">
                                    <h3 className="text-xl font-semibold font-serif text-primary border-b border-border pb-2">Step 1: Your Information</h3>
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                                        <input type="text" name="fullName" id="fullName" required value={formState.fullName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-border rounded-md shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"/>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                        <input type="email" name="email" id="email" required value={formState.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-border rounded-md shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"/>
                                    </div>
                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                                        <input type="text" name="companyName" id="companyName" required value={formState.companyName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-border rounded-md shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"/>
                                    </div>
                                    <div>
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                                        <input type="text" name="country" id="country" required value={formState.country} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-border rounded-md shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"/>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6 animate-fade-in">
                                    <h3 className="text-xl font-semibold font-serif text-primary border-b border-border pb-2">Step 2: Product Requirements</h3>
                                     <div>
                                        <label htmlFor="product" className="block text-sm font-medium text-gray-700">Select Product</label>
                                        <select name="product" id="product" required value={formState.product} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-border rounded-md shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent">
                                            {mockProducts.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                                        </select>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-grow">
                                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                                            <input type="number" name="quantity" id="quantity" required value={formState.quantity} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-border rounded-md shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"/>
                                        </div>
                                        <div>
                                            <label htmlFor="quantityUnit" className="block text-sm font-medium text-gray-700">Unit</label>
                                            <select name="quantityUnit" id="quantityUnit" required value={formState.quantityUnit} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-border rounded-md shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent">
                                                <option>MT</option>
                                                <option>KG</option>
                                                <option>LBS</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="packaging" className="block text-sm font-medium text-gray-700">Packaging Requirements</label>
                                        <select name="packaging" id="packaging" required value={formState.packaging} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-border rounded-md shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent">
                                            <option>Jumbo Bags (1.5 MT)</option>
                                            <option>50 KG Bags</option>
                                            <option>25 KG Bags</option>
                                            <option>Loose/Bulk</option>
                                        </select>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6 animate-fade-in">
                                     <h3 className="text-xl font-semibold font-serif text-primary border-b border-border pb-2">Step 3: Logistics &amp; Additional Details</h3>
                                     <div className="flex gap-4">
                                         <div className="flex-grow">
                                            <label htmlFor="shippingTerms" className="block text-sm font-medium text-gray-700">Incoterms</label>
                                            <select name="shippingTerms" id="shippingTerms" required value={formState.shippingTerms} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-border rounded-md shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent">
                                                <option>FOB (Free On Board)</option>
                                                <option>CIF (Cost, Insurance, Freight)</option>
                                                <option>EXW (Ex Works)</option>
                                            </select>
                                         </div>
                                         <div className="flex-grow">
                                            <label htmlFor="destinationPort" className="block text-sm font-medium text-gray-700">Destination Port</label>
                                            <input type="text" name="destinationPort" id="destinationPort" value={formState.destinationPort} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-border rounded-md shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"/>
                                         </div>
                                     </div>
                                      <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Information</label>
                                        <textarea name="message" id="message" rows={4} value={formState.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-border rounded-md shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
                                    </div>
                                </div>
                            )}
                            
                            <div className="mt-8 flex justify-between">
                                {step > 1 ? (
                                    <button 
                                        type="button" 
                                        onClick={prevStep} 
                                        disabled={isSubmitting}
                                        className="bg-transparent border border-border text-primary font-bold py-2 px-6 rounded-md shadow-sm transition-colors duration-300 hover:bg-background disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Back
                                    </button>
                                ) : (
                                    <span></span> // Placeholder for alignment
                                )}
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="bg-accent text-white font-serif font-bold py-2 px-6 rounded-md shadow-md transition-all duration-300 hover:bg-accent-dark hover:scale-105 flex items-center justify-center disabled:bg-accent-dark/50 disabled:cursor-not-allowed min-w-[120px]"
                                >
                                    {isSubmitting ? (
                                        <Spinner className="text-white" />
                                    ) : (
                                        step === 3 ? 'Submit RFQ' : 'Next Step'
                                    )}
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ContactPage;