"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { motion } from "framer-motion";

interface ImagesGalleryProps {
    images: { original: string }[];
}

export default function ImagesGallery({ images }: ImagesGalleryProps) {
    return (
        <PhotoProvider maskOpacity={0.9} bannerVisible={false}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-2">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="relative group rounded-xl overflow-hidden cursor-zoom-in aspect-square"
                    >
                        <PhotoView src={img.original}>
                            <img
                                src={img.original}
                                alt="Gallery Image"
                                loading="lazy"
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500"
                            />
                        </PhotoView>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                            <svg className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                        </div>
                    </motion.div>
                ))}
            </div>
        </PhotoProvider>
    );
}
