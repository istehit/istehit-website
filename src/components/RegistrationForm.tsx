"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RegistrationForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        githubUrl: "",
        linkedinUrl: "",
        collegeName: "",
        year: "",
        experienceLevel: "",
        agreeToCodeOfConduct: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
        }, 1500);
    };

    if (isSuccess) {
        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 text-center"
            >
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Registration Successful!</h3>
                <p className="text-gray-400 mb-6">Thank you for registering for Open Source 101. We've sent a confirmation email with further details.</p>
                <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                >
                    Register Another
                </button>
            </motion.div>
        );
    }

    return (
        <div className="min-h-screen bg-transparent text-white w-full">
            <div className="grid lg:grid-cols-2 min-h-screen w-full">
                {/* Left Panel */}
                <div className="relative hidden lg:flex flex-col justify-center p-12 xl:p-16 overflow-hidden">
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
                            <span className="text-sm font-semibold text-white">ISTE HIT-SC Presents</span>
                        </div>

                        <h1 className="text-5xl xl:text-6xl font-bold mb-6 text-white leading-tight">Open Source 101</h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">Hello Aspiring Contributors!</p>

                        <div className="space-y-6 text-gray-300">
                            <p className="text-base leading-relaxed">
                                Open source 101 is not just a coding event—it is a culture of collaboration where ideas grow through
                                shared contributions. This Open Source Event organised by ISTE HIT-SC opens the door to hands-on
                                innovation, collaborative development, and practical learning shaped by real project environments.
                            </p>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hidden xl:block">
                                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                                    <span className="text-2xl">🚀</span> Why Join?
                                </h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex items-start gap-3">
                                        <span className="text-white mt-1">▸</span>
                                        <span>Industry-style workflows and prior experiences (like GSoC)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white mt-1">▸</span>
                                        <span>Hands-on work on live projects</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white mt-1">▸</span>
                                        <span>Mentorship from seniors & project admins</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white mt-1">▸</span>
                                        <span>Learn by contributing, grow by collaborating</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Form */}
                <div className="flex items-center justify-center p-6 lg:p-12 w-full">
                    <div className="w-full max-w-md">
                        <div className="lg:hidden mb-8 text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-xs font-semibold text-white">ISTE HIT-SC</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white">Open Source 101</h2>
                        </div>

                        {/* Form Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-center text-white">Register Now</h3>

                            <form onSubmit={onSubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Full Name *</label>
                                    <input
                                        required
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Email *</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@email.com"
                                            className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Phone *</label>
                                        <input
                                            required
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91..."
                                            className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">GitHub URL *</label>
                                    <input
                                        required
                                        type="url"
                                        name="githubUrl"
                                        value={formData.githubUrl}
                                        onChange={handleChange}
                                        placeholder="https://github.com/username"
                                        className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">College</label>
                                        <input
                                            name="collegeName"
                                            value={formData.collegeName}
                                            onChange={handleChange}
                                            placeholder="Your University"
                                            className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Year</label>
                                        <select
                                            name="year"
                                            value={formData.year}
                                            onChange={handleChange}
                                            className="w-full bg-[#111] border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all appearance-none"
                                        >
                                            <option value="" disabled>Select</option>
                                            <option value="1st Year">1st Year</option>
                                            <option value="2nd Year">2nd Year</option>
                                            <option value="3rd Year">3rd Year</option>
                                            <option value="4th Year">4th Year</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <label className="flex items-start gap-3 p-4 rounded-xl border border-white/10 hover:border-green-500/30 cursor-pointer transition-all duration-300 group bg-white/[0.02]">
                                        <input
                                            required
                                            type="checkbox"
                                            name="agreeToCodeOfConduct"
                                            checked={formData.agreeToCodeOfConduct}
                                            onChange={handleChange}
                                            className="mt-1 w-5 h-5 rounded border border-white/20 bg-transparent cursor-pointer accent-green-500"
                                        />
                                        <span className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                                            I agree to the Code of Conduct and commit to participating positively. *
                                        </span>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading || !formData.agreeToCodeOfConduct}
                                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-semibold rounded-xl h-12 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                                >
                                    {isLoading ? "Processing..." : "Register Now"}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
