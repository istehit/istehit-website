"use client";
import { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";

interface Member {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
}

interface TeamData {
  ec: Member[];
  tech: Member[];
  creative: Member[];
  pr: Member[];
  media: Member[];
  [key: string]: Member[];
}

const EMPTY_TEAM: TeamData = {
  ec: [],
  tech: [],
  creative: [],
  pr: [],
  media: [],
};

const tabs = [
  { key: "ec", label: "Executive Council" },
  { key: "tech", label: "Tech Team" },
  { key: "creative", label: "Creative Team" },
  { key: "media", label: "Media Team" },
  { key: "pr", label: "PR Team" },
];

const domainMap: Record<string, string> = {
  "EC": "ec",
  "Technical": "tech",
  "Content Writer": "creative",
  "Graphic Designers": "creative",
  "Public Relations": "pr",
  "Photographers": "media",
  "Video Editors": "media",
};

export default function TeamPage() {
  const [active, setActive] = useState("ec");
  const [teamData, setTeamData] = useState<TeamData>(EMPTY_TEAM);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const res = await fetch("/api/sheets");
        if (!res.ok) throw new Error("Failed to fetch team data");
        const raw = await res.json();

        const grouped: TeamData = { ...EMPTY_TEAM };

        for (const entry of raw) {
          const domainRaw = entry["Domain"]?.trim();
          const domainKey = domainMap[domainRaw] ?? null;
          if (!domainKey) continue;

          const member = mapMember(entry);

          const alreadyExists = grouped[domainKey].some(m => m.name === member.name);
          if (!alreadyExists) {
            grouped[domainKey].push(member);
          }
        }

        setTeamData(grouped);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTeam();
  }, []);

  return (
    <>
      {/* ── HEADER ── */}
      <header
        className="bg-black text-center w-full text-BarlowCondensed"
        style={{
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <p className="text-[#e84118] font-bold uppercase mb-2 text-xs sm:text-lg tracking-widest">
          ISTE HIT SC · INNOVATORS
        </p>
        <h1 className="text-white font-black uppercase leading-none text-4xl sm:text-7xl tracking-wider">
          THE <span className="text-[#e84118]">TEAM</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base font-semibold"
          style={{ marginTop: "0.5rem", paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>
          Meet the team dedicated to advancing innovation, fostering collaboration, and driving sustained growth within the community.
        </p>
      </header>

      <main
        className="min-h-screen flex flex-col items-center w-full text-BarlowCondensed bg-[#f4f4f0f2]"
        style={{
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div className="min-h-screen flex flex-col w-full gap-6 max-w-6xl">

          {/* ── TABS ── */}
          <section className="bg-[rgba(244,244,240,0.9)]" style={{ paddingTop: "1rem" }}>
            <div className="flex flex-wrap justify-center gap-2">
              {tabs.map((tab) => {
                const isActive = active === tab.key;
                const isHovered = hoveredTab === tab.key;

                return (
                  <button
                    key={tab.key}
                    onClick={() => setActive(tab.key)}
                    onMouseEnter={() => setHoveredTab(tab.key)}
                    onMouseLeave={() => setHoveredTab(null)}
                    className="font-extrabold uppercase transition-all duration-300 text-sm sm:text-lg tracking-wider"
                    style={{
                      border: `2px solid ${isActive ? "black" : isHovered ? "#e84118" : "black"}`,
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      paddingLeft: "0.75rem",
                      paddingRight: "0.75rem",
                      backgroundColor: isActive ? "#000" : "#fff",
                      color: isActive ? "#fff" : isHovered ? "#e84118" : "#000",
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </section>

          {/* ── LOADING ── */}
          {loading && (
            <p className="text-center font-bold animate-pulse text-[rgba(0,0,0,0.6)] tracking-widest"
              style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
              Loading Team Members...
            </p>
          )}

          {/* ── ERROR ── */}
          {error && (
            <p className="text-center font-bold uppercase text-[#e84118] tracking-widest"
              style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
              Error: {error}
            </p>
          )}

          {/* ── GRID ── */}
          {!loading && !error && (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              style={{ padding: "1.5rem" }}
            >
              {teamData[active].length === 0 ? (
                <p className="col-span-full text-center font-bold uppercase text-[rgba(0,0,0,0.4)] tracking-widest"
                  style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
                  No members found in this category.
                </p>
              ) : (
                teamData[active].map((member, index) => (
                  <MemberCard key={index} member={member} />
                ))
              )}
            </div>
          )}

        </div>
      </main>
    </>
  );
}

function mapMember(entry: Record<string, string>): Member {
  return {
    name: entry["Name"]?.trim() ?? "Unknown",
    role: entry["Domain"]?.toLowerCase() === ("ec")
      ? entry["POSTS"]?.trim()
      : (entry["Domain"]?.trim()) ?? "",
    bio: entry["Few Key Words Describing Yourself"]?.trim() ?? "",
    linkedin: entry["LinkedIn Account Link"]?.trim() || "https://www.linkedin.com/company/iste-hit-sc/",
  };
}

function MemberCard({ member }: { member: Member }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden transition-all duration-300 bg-[#fafafa] cursor-pointer"
      style={{
        border: `2px solid ${hovered ? "#e84118" : "black"}`,
        padding: "1.5rem",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      {/* ── Diagonal flash layer ── */}
      <div className={`absolute top-[-60%] left-[-10%] w-[50%] h-[220%] bg-[rgba(232,65,24,0.12)]
        rotate-12 transition-transform duration-800 ease-in-out z-0 pointer-events-none
        ${hovered ? "translate-x-[280%]" : "-translate-x-full"}`}
      />

      {/* ── LinkedIn icon ── */}

      <a href={member.linkedin}
        className="absolute top-2 right-2 z-2"
        style={{ paddingTop: "1rem", paddingRight: "0.75rem" }}
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="text-xl sm:text-2xl hover:text-[#e84118] transition-colors" />
      </a>

      {/* ── Content ── */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h3
          className={`font-black uppercase leading-tight transition-colors duration-300 text-xl ${hovered ? "text-[#e84118]" : "text-black"}`}
          style={{marginBottom: "0.25rem", paddingRight: "1.5rem"}}
        >
          {member.name}
        </h3>
        <span className="font-bold uppercase text-sm tracking-wider text-[#ec6543] transition-colors duration-300">
          {member.role}
        </span>
        <p
          className="font-medium italic text-[rgba(0,0,0,0.8)] transition-colors duration-300 text-sm border-t-2 border-[rgba(0,0,0,0.1)]"
          style={{paddingTop: "0.5rem", marginTop: "0.5rem"}}
        >
          {member.bio}
        </p>
      </div>

    </div>
  );
}