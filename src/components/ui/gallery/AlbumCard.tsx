"use client";

import React from "react";
import { motion } from "framer-motion";

interface AlbumCardProps {
    id: string;
    title: string;
    coverImage: string;
}

export default function AlbumCard({ id, title, coverImage }: AlbumCardProps) {
    return (
        <motion.div 
            whileHover={{ y: -8 }}
            className="group relative bg-neutral-900 border border-white/10 rounded-2xl pb-4 shadow-xl overflow-hidden cursor-pointer w-[280px] sm:w-[300px] transition-all duration-500 hover:border-white/20"
        >
            <div className="relative w-full h-[180px] overflow-hidden">
                <img
                    src={coverImage}
                    alt={title}
                    className="w-full h-full object-cover rounded-t-2xl transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            </div>
            <div className="flex justify-between items-center mt-4 px-5">
                <h2 className="text-lg font-bricolage text-white group-hover:text-emerald-400 transition-colors tracking-tight">{title}</h2>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors border border-white/10">
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </div>
        </motion.div>
    );
}
