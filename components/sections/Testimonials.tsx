'use client';

import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Jane Doe",
        role: "CEO, Tech Startup",
        testimonial: "TalentMesh Solutions helped us find the perfect team to scale our business. Highly recommend!",
        image: "https://i.pravatar.cc/150?u=jane"
    },
    {
        name: "John Smith",
        role: "HR Manager, Finance Firm",
        testimonial: "The recruitment process was seamless and efficient. We found top talent in no time.",
        image: "https://i.pravatar.cc/150?u=john"
    },
    {
        name: "Emily Johnson",
        role: "Marketing Director, Healthcare Company",
        testimonial: "Their personalized approach made all the difference. We couldn't be happier with our new hires.",
        image: "https://i.pravatar.cc/150?u=emily"
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#262F40] mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Join hundreds of companies building their dream teams with TalentMesh.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((client, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 italic leading-relaxed">"{client.testimonial}"</p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                                    {/* Placeholder avatar if image fails or for simplicity */}
                                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-600 font-bold">
                                        {client.name[0]}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900">{client.name}</h3>
                                    <p className="text-xs text-gray-500">{client.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
