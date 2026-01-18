"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, PhoneCall } from 'lucide-react';

interface FaqItem {
    question: string;
    answer: string;
}

const faqData: FaqItem[] = [
    {
        question: "What should I bring to my first appointment?",
        answer: "For your first visit, please bring a valid ID, your insurance card, any current medications or a list of them, and any relevant medical records."
    },
    {
        question: "How do I schedule an appointment?",
        answer: "You can schedule an appointment by calling our office directly or using our online booking system available on the website."
    },
    {
        question: "What insurance plan do you accept?",
        answer: "We accept most major insurance plans. Please contact our billing department to verify your specific coverage."
    },
    {
        question: "Can I get a prescription refill without an appointment?",
        answer: "Prescription refills usually require an office visit to ensure proper monitoring, but some exceptions apply for chronic conditions."
    },
    {
        question: "What should I expect during my first visit?",
        answer: "During your first visit, we will conduct a comprehensive health assessment, review your medical history, and discuss your health goals."
    },
    {
        question: "How are treatment plans customized for individual needs?",
        answer: "Our doctors tailor treatment plans based on your specific diagnostic results, lifestyle factors, and personal preferences."
    }
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // Prothomti default open thakbe

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className='bg-[#f4f6ff] rounded-[40px]  py-20 mx-7.5 px-6'>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left Side: Content & Emergency Contact */}
                    <div className="lg:w-5/12">
                        <div className="flex items-center gap-2 text-[#7367f0] font-medium mb-4">
                            <span className="text-xl">🩺</span>
                            <span className="text-sm tracking-wide">Frequently Asked Questions</span>
                        </div>
                        <h2 className="text-[#0a1d37] text-4xl md:text-5xl font-bold leading-tight mb-8">
                            Helping you understand healthcare
                        </h2>
                        <p className="text-gray-500 mb-10 text-lg">
                            Here to make your experience as seamless as possible—explore answers to common questions about our services, policies, and patient care.
                        </p>

                        {/* Emergency Card */}
                        <div className="bg-[#f9faff] p-8 rounded-[30px] flex items-center gap-6 shadow-sm border border-gray-100">
                            <div className="bg-white p-4 rounded-2xl shadow-md">
                                <PhoneCall className="text-[#4d5edb]" size={32} />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm font-medium mb-1">We always take care of your smile</p>
                                <h4 className="text-[#0a1d37] text-xl font-bold mb-1">24/7 Emergency</h4>
                                <p className="text-[#4d5edb] font-bold text-lg">659-888-696589</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Accordion */}
                    <div className="lg:w-7/12 flex flex-col">
                        {faqData.map((item, index) => (
                            <div key={index} className="border-b border-gray-100 last:border-0">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full py-6 flex justify-between items-center text-left transition-all group"
                                >
                                    <span className={`text-xl font-semibold ${openIndex === index ? 'text-[#4d5edb]' : 'text-[#0a1d37]'} group-hover:text-[#4d5edb]`}>
                                        {item.question}
                                    </span>
                                    {openIndex === index ? (
                                        <ChevronUp className="text-[#4d5edb]" size={24} />
                                    ) : (
                                        <ChevronDown className="text-gray-400 group-hover:text-[#4d5edb]" size={24} />
                                    )}
                                </button>

                                {/* Animated Answer Section */}
                                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-gray-500 text-lg leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FaqSection;