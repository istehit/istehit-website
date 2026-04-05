"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";

type FilterCategory = "all" | "workshops" | "conventions";

export default function EventsSection() {
  const [filter, setFilter] = useState<FilterCategory>("all");
  const gridRef = useRef<HTMLDivElement>(null);

  const handleFilter = useCallback((category: FilterCategory) => {
    setFilter(category);
  }, []);

  // Re-observe scroll animations after filter changes
  useEffect(() => {
    if (!gridRef.current) return;
    const elements = gridRef.current.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => el.classList.add("animate"));
  }, [filter]);

  const showOpenSource = filter === "all" || filter === "workshops";
  const showConvention = filter === "all" || filter === "conventions";
  const showIdeathon = filter === "all" || filter === "workshops";
  const isConventionOnly = filter === "conventions";

  return (
    <section
      id="events"
      className="relative py-24 md:py-32 bg-neutral-950 text-white overflow-hidden selection:bg-emerald-500/30"
    >
      {/* Ambient Background & Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[60vw] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none opacity-30 mix-blend-screen" />

      <div className="md:px-12 z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl relative animate-on-scroll">
            <div className="absolute -left-4 md:-left-8 top-1 bottom-1 w-1 bg-gradient-to-b from-emerald-500 to-transparent opacity-50" />
            <div className="flex items-center gap-3 mb-4 text-emerald-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-spin"
                style={{ animationDuration: "3s" }}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400/80">
                Event Calendar 2024-2025
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bricolage font-medium tracking-tighter text-white leading-[0.9]">
              Flagship
              <span className="text-white/20 font-light"> Events.</span>
            </h2>
          </div>

          {/* Filter Controls */}
          <div className="relative group animate-on-scroll delay-100">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative flex items-center p-1.5 rounded-full bg-neutral-900/90 border border-white/10 backdrop-blur-xl shadow-2xl">
              <FilterButton
                active={filter === "all"}
                onClick={() => handleFilter("all")}
                icon="solar:widget-add-linear"
                label="All Events"
              />
              <FilterButton
                active={filter === "workshops"}
                onClick={() => handleFilter("workshops")}
                icon="solar:cpu-linear"
                label="Workshops"
              />
              <FilterButton
                active={filter === "conventions"}
                onClick={() => handleFilter("conventions")}
                icon="solar:book-bookmark-linear"
                label="Conventions"
              />
            </div>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-12 gap-6 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            showOpenSource ? "md:h-[800px]" : "md:h-[600px]"
          }`}
        >
          {/* Card 1: Open Source 101 */}
          {showOpenSource && (
            <div className="group relative md:col-span-8 md:row-span-2 rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:border-white/20 origin-left animate-on-scroll delay-200">
              <div className="absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ea262fd9-14f0-4917-be69-86fd3b302ccd_1600w.webp"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0"
                  alt="Tech Event"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              </div>

              <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur border border-white/10 rounded-full text-xs uppercase tracking-widest font-mono text-white/80">
                    Flagship Event
                  </span>
                  <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs uppercase tracking-widest font-mono text-emerald-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Registration Open
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
                <div className="max-w-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-[8rem] md:text-[12rem] font-bricolage font-semibold text-white/5 absolute -top-32 md:-top-40 -left-6 pointer-events-none select-none tracking-tighter">
                    101
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bricolage font-medium text-white mb-4 relative tracking-tight">
                    Open Source 101
                  </h3>
                  <p className="text-white/70 text-lg font-light leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                    Industry-style workflows, live project contributions, and
                    expert mentorship. Start your journey into the world of
                    open-source development.
                  </p>
                  <div className="flex items-center gap-8 pt-6 border-t border-white/10 text-xs font-mono text-white/40 uppercase tracking-widest">
                    <div>
                      <span className="block text-white mb-1">Benefits</span>
                      MAR Points
                    </div>
                    <div>
                      <span className="block text-white mb-1">Format</span>
                      Practical / Live
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <Link
                        href="/opensource101"
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors bg-white/5 backdrop-blur-md"
                      >
                        <iconify-icon
                          icon="solar:arrow-right-linear"
                          width="20"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right Column Stack */}
          <div
            className={`${
              isConventionOnly ? "md:col-span-12" : "md:col-span-4"
            } md:row-span-2 flex flex-col gap-6 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]`}
          >
            {/* Card 2: Annual Convention */}
            {showConvention && (
              <div className="group relative flex-1 rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:border-white/20 origin-top animate-on-scroll delay-300">
                <div className="absolute inset-0 z-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ee3841e8-ef6d-45b3-9f33-9df069f9708a_1600w.webp"
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                    alt="Auditorium"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                </div>

                <div className="absolute top-6 right-6 z-20">
                  <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
                    <span className="font-bricolage text-sm font-medium">
                      02
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_10px_rgb(245,158,11)]" />
                      <span className="text-xs uppercase text-amber-400 tracking-widest font-mono">
                        10 Apr 2025
                      </span>
                    </div>
                    <h3 className="text-3xl font-bricolage font-medium text-white mb-2 tracking-tight">
                      Annual Convention
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Gathering at SN Bose Auditorium to celebrate technical
                      achievements, Alumni connect, and networking.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Card 3: IDEATHON */}
            {showIdeathon && (
              <div className="group relative flex-1 rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:border-white/20 origin-bottom animate-on-scroll delay-400">
                <div className="absolute inset-0 z-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68494c15-da1d-47aa-a9ac-b6ee8c9286cc_800w.webp"
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                    alt="Ideathon"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                </div>

                <div className="absolute top-6 right-6 z-20">
                  <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
                    <span className="font-bricolage text-sm font-medium">
                      03
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_10px_rgb(245,158,11)]" />
                      <span className="text-xs uppercase text-amber-400 tracking-widest font-mono">
                        11 Apr 2025
                      </span>
                    </div>
                    <h3 className="text-3xl font-bricolage font-medium text-white mb-2 tracking-tight">
                      IDEATHON
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      National Ideathon challenging students to build innovative
                      solutions over intensive brainstorming sessions.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Action */}
        <div className="mt-20 flex justify-center">
          <Link
            href="#events"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs font-mono text-white/60 hover:text-white hover:bg-white/5 transition-all uppercase tracking-widest border border-transparent hover:border-white/10"
          >
            View All Events
            <iconify-icon
              icon="solar:arrow-right-linear"
              width="16"
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FilterButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: string;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
        active
          ? "bg-white text-neutral-950 shadow-lg shadow-white/5 scale-105"
          : "text-white/50 hover:text-white hover:bg-white/5"
      }`}
    >
      <iconify-icon icon={icon} width="16" />
      {label}
    </button>
  );
}
