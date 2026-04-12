"use client";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const teamData = {
  ec: [
    { name: "Rahul Kumar", role: "Chair Person", bio: "Graphics Digineer", linkedin: "#" },
    { name: "Arijit Ghosh", role: "Vice Chairperson", bio: "Full stack developer", linkedin: "#" },
    { name: "Subojit Saha", role: "Technical Lead", bio: "Devops", linkedin: "#" },
    { name: "Anushka Chatterjee", role: "Technecal Lead", bio: "Full stack", linkedin: "#" },
  ],
  tech: [
    { name: "Abhi lkjdf;lkgj; dsfajkj", role: "Technical", image: "/team/alex.jpg", bio: "Frontend Developer", linkedin: "#" },
    { name: "Nayab", role: "Technical", image: "/team/sanu.jpg", bio: "ML Engineer", linkedin: "#" },
    { name: "Somya", role: "Technical", image: "/team/sanu.jpg", bio: "Web developer", linkedin: "#" }
  ],
  media: [
    { name: "Anirudh", role: "Graphics Designer", image: "/team/riya.jpg", bio: "Graphics", linkedin: "#" },
  ],
  pr: [
    { name: "Abhijeet", role: "PR", image: "/team/rahul.jpg", bio: "Public Relations ", linkedin: "#" },
  ],
  Content: [
    { name: "Aditya", role: "Content Writter", bio: "Creative Thinker, Tech Enthusiast, Strong Writing Skills ", linkedin: "#" },
  ],
};

const tabs = [
  { key: "ec", label: "EC Council" },
  { key: "tech", label: "Technical" },
  { key: "Content", label: "Content Writers" },
  { key: "media", label: "Media" },
  { key: "pr", label: "Public Relations" },
];

export default function TeamPage() {
  const [active, setActive] = useState("ec");

  return (
    <>
      {/* ── HEADER ── */}
      <header
        className="bg-black text-center w-full px-4 py-5 sm:px-6 sm:py-7 md:px-8 md:py-8"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        <p className="text-[#e84118] text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
          ISTE HIT SC · INNOVATORS
        </p>
        <h1 className="text-[clamp(2.5rem,10vw,5rem)] font-black text-white leading-none uppercase tracking-tighter">
          THE <span className="text-[#e84118]">TEAM</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-2 px-2">
          Meet the team dedicated to advancing innovation, fostering collaboration, and driving sustained growth within the community.
        </p>
      </header>

      <main
        style={{ fontFamily: "'Barlow Condensed', sans-serif", backgroundColor: "#f4f4f0f2" }}
        className="min-h-screen flex flex-col items-center w-full px-4 py-5 sm:px-6 md:px-8"
      >
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 max-w-6xl w-full">

          {/* ── TABS ── */}
          <section className="bg-[#f4f4f0]/90 backdrop-blur-md">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-5">
              {tabs.map((tab) => {
                const isActive = active === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActive(tab.key)}
                    className={`text-sm sm:text-base md:text-lg font-bold tracking-wide uppercase 
                      transition-all duration-300 border-2 border-black
                      px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-2.5
                      ${isActive
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-black/10 hover:border-black"
                      }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </section>

          {/* ── GRID ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 p-4 sm:p-5 md:p-6 lg:p-8">
            {teamData[active as keyof typeof teamData].map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

function MemberCard({ member }: { member: any }) {
  return (
    <div
      className="group relative bg-[#fafafa] border-2 border-black transition-all hover:shadow-2xl p-4 sm:p-6 md:p-8 overflow-hidden"
    >
      <a href={member.linkedin} className="absolute top-3 right-3 sm:top-4 sm:right-4 p-4 sm:p-5" target="_blank">
        <FaLinkedin className="text-xl sm:text-2xl hover:bg-[#e84118] hover:text-white transition-colors" />
      </a>
      <h3 className="text-xl sm:text-2xl font-black uppercase text-black mb-1 pr-8 leading-tight">
        {member.name}
      </h3>
      <span className="text-[#e84118] text-[10px] font-bold tracking-widest uppercase">
        {member.role}
      </span>
      <p className="text-black/60 text-xs sm:text-sm font-medium border-t border-black/10 pt-2 mt-2 italic">
        {member.bio}
      </p>
    </div>
  );
}