"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import AlbumCard from "@/components/ui/gallery/AlbumCard";
import ImagesGallery from "@/components/ui/gallery/ImageGallery";
import { fetchAlbums, Album } from "@/hooks/useFetchAlbums";
import Navbar from "@/components/Navbar";

import { Providers } from "@/components/providers";

function GalleryContent() {
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

    const { data: albums, isLoading } = useQuery({
        queryKey: ["albums"],
        queryFn: fetchAlbums,
        staleTime: 1000 * 60 * 5,
    });

    return (
        <div className="min-h-screen bg-neutral-950 text-white relative selection:bg-emerald-500/30">
            <Navbar />
            {/* Ambient Background & Grid */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[60vw] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none opacity-30 mix-blend-screen" />

            <div className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto z-10 w-full">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <span className="text-sm font-medium tracking-wide text-gray-300">Our Memories</span>
                    </motion.div>
                    <motion.h1
                        className="text-5xl md:text-7xl font-bricolage font-medium tracking-tighter text-white leading-[0.9] mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Past Experiences
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        A visual journey through our past events, conventions, seminars, and memorable workshops.
                    </motion.p>
                </div>

                {isLoading && (
                    <div className="flex flex-col items-center justify-center min-h-[40vh]">
                        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4" />
                        <p className="text-gray-400 font-medium">Loading memories...</p>
                    </div>
                )}

                {!isLoading && albums && albums.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        <p>No albums available at the moment.</p>
                    </div>
                )}

                <motion.div
                    className="flex flex-wrap justify-center gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <AnimatePresence>
                        {albums?.map((album: Album, index: number) => (
                            <motion.div
                                key={album.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelectedAlbum(album)}
                            >
                                <AlbumCard
                                    id={String(album.id)}
                                    title={album.title}
                                    coverImage={album.images[0]?.imageUrl || ""}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Custom Modal for Album Inspection */}
            <AnimatePresence>
                {selectedAlbum && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
                        onClick={() => setSelectedAlbum(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0f0f0f] border border-white/10 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative"
                        >
                            <div className="absolute top-4 right-4 z-50">
                                <button
                                    onClick={() => setSelectedAlbum(null)}
                                    className="p-3 bg-black/50 hover:bg-black border border-white/10 rounded-full text-white transition-colors backdrop-blur-md"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="p-8 pb-4 border-b border-white/5">
                                <h2 className="text-3xl font-bold text-white pr-12">
                                    {selectedAlbum.title}
                                </h2>
                                <p className="text-gray-400 mt-2">{selectedAlbum.images.length} photos</p>
                            </div>

                            <div className="p-6 overflow-y-auto w-full custom-scrollbar flex-1 relative">
                                <ImagesGallery images={selectedAlbum.images.map(img => ({ original: img.imageUrl }))} />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function GalleryPage() {
    return (
        <Providers>
            <GalleryContent />
        </Providers>
    );
}
