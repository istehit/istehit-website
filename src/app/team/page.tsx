"use client";
import { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";

interface Member {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  image?: string;
  isEC?: boolean;
}

interface TeamData {
  ec: Member[];
  tech: Member[];
  content: Member[];
  graphic: Member[];
  pr: Member[];
  photo: Member[];
  video: Member[];
  [key: string]: Member[];
}

const EMPTY_TEAM: TeamData = {
  ec: [],
  tech: [],
  content: [],
  graphic: [],
  pr: [],
  photo: [],
  video: [],
};

const tabs = [
  { key: "ec", label: "Executive Council" },
  { key: "tech", label: "Technical Team" },
  { key: "content", label: "Content Writers" },
  { key: "graphic", label: "Graphic Designers" },
  { key: "photo", label: "Photographers" },
  { key: "video", label: "Video Editors" },
  { key: "pr", label: "Public Relations" },
];

const domainMap: Record<string, string> = {
  "EC": "ec",
  "Technical": "tech",
  "Content Writer": "content",
  "Graphic Designer": "graphic",
  "Public Relation": "pr",
  "Photographer": "photo",
  "Video Editor": "video",
};

export default function TeamPage() {
  const [active, setActive] = useState("ec");
  const [teamData, setTeamData] = useState<TeamData>(EMPTY_TEAM);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const activeTab = tabs.find((t) => t.key === active)!;

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

          {/* ── DROPDOWN SELECTOR ── */}
          <section style={{ paddingTop: "1rem", paddingBottom: "0.5rem", position: "relative", zIndex: 60 }}>
            <div className="flex justify-end">
              <div className="relative" style={{ minWidth: "260px" }}>

                {/* Trigger button */}
                <button
                  id="team-dropdown-btn"
                  onClick={() => setDropdownOpen((o) => !o)}
                  className="w-full flex items-center justify-between border-2 border-black bg-black font-extrabold uppercase tracking-widest
                   text-sm sm:text-base text-white hover:text-orange-500 transition-colors duration-200 cursor-pointer"
                  style={{
                    padding: "0.65rem 1rem",
                  }}
                >
                  <span>{activeTab.label}</span>
                  {/* Chevron */}
                  <svg
                    style={{
                      width: "18px",
                      height: "18px",
                      marginLeft: "0.75rem",
                      flexShrink: 0,
                      transition: "transform 0.25s",
                      transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {/* Dropdown list */}
                {dropdownOpen && (
                  <ul
                    className="absolute left-0 w-full z-50"
                    style={{
                      top: "calc(100% + 2px)",
                      border: "2px solid #000",
                      backgroundColor: "#fff",
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      boxShadow: "4px 4px 0px #000",
                    }}
                  >
                    {tabs.map((tab) => (
                      <li key={tab.key}>
                        <button
                          onClick={() => { setActive(tab.key); setDropdownOpen(false); }}
                          className="w-full text-left font-bold uppercase tracking-wider text-sm transition-all duration-150"
                          style={{
                            padding: "0.6rem 1rem",
                            backgroundColor: active === tab.key ? "#e84118" : "transparent",
                            color: active === tab.key ? "#fff" : "#000",
                            borderBottom: "1px solid rgba(0,0,0,0.08)",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) => {
                            if (active !== tab.key) {
                              (e.currentTarget as HTMLElement).style.backgroundColor = "#f5f5f5";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (active !== tab.key) {
                              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                            }
                          }}
                        >
                          {tab.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Close dropdown when clicking outside */}
            {dropdownOpen && (
              <div
                className="fixed inset-0 z-40"
                onClick={() => setDropdownOpen(false)}
              />
            )}
          </section>

          {/* ── SECTION HEADING ── */}
          {!loading && !error && (
            <div
              className="flex items-center gap-4"
              style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem", marginTop: "0.5rem" }}
            >
              <div style={{ width: "4px", height: "2.5rem", backgroundColor: "#e84118", flexShrink: 0 }} />
              <div>
                <h2 className="font-black uppercase leading-none tracking-wider text-2xl sm:text-4xl text-black">
                  {activeTab.label}
                </h2>
              </div>
            </div>
          )}

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
              className={active === "ec"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              }
              style={{ padding: "1.5rem" }}
            >
              {teamData[active].length === 0 ? (
                <p className="col-span-full text-center font-bold uppercase text-[rgba(0,0,0,0.4)] tracking-widest"
                  style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
                  No members found in this category.
                </p>
              ) : (
                teamData[active].map((member, index) => (
                  <MemberCard key={`${active}-${member.name}-${index}`} member={member} />
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
  const linkedin = entry["LinkedIn Account Link"]?.trim() || "https://www.linkedin.com/company/iste-hit-sc/";
  const sheetImage = entry["Image"]?.trim();
  const isEC = entry["Domain"]?.trim()?.toLowerCase() === "ec";

  let image = "";
  if (sheetImage && (sheetImage.includes("cloudinary.com") || sheetImage.startsWith("http"))) {
    image = sheetImage;
  }


  return {
    name: entry["Name"]?.trim() ?? "Unknown",
    role: isEC ? (entry["POSTS"]?.trim() ?? "Executive Council") : (entry["Domain"]?.trim() ?? ""),
    bio: entry["Few Key Words Describing Yourself"]?.trim() ?? "",
    linkedin: linkedin,
    image: image,
    isEC: isEC,
  };
}

function MemberCard({ member }: { member: Member }) {
  const [hovered, setHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(member.image || null);

  // Extract initials
  const initials = member.name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (member.isEC) {
    return (
      <div
        className="group relative flex flex-col bg-white border-2 border-gray-500 hover:border-[#e84218e2] rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer overflow-hidden w-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* ── Image area ── */}
        <div className="relative w-full aspect-4/5 bg-linear-to-br from-[#ffffff] to-[#e8eff7b2] overflow-hidden">
          {/* ── Decorative dot grid (top-right) ── */}
          <div className="absolute top-4 right-4 z-10 grid grid-cols-2 gap-[6px]">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-[5px] h-[5px] rounded-full bg-[#606163b5]" />
            ))}
          </div>

          {/* ── blob behind portrait ── */}
          <div
            className="absolute bottom-[-5%] left-[-5%] w-[75%] h-[85%] rounded-tr-[60px]  bg-[#b7cafa57] transition-transform duration-500 group-hover:scale-105"
          />

          {/* ── Portrait image or initials ── */}
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.1]"
              onError={() => setImgSrc(null)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center select-none">
              <span className="text-5xl font-black text-[#ff7300] tracking-widest">{initials}</span>
            </div>
          )}

          {/* ── Floating LinkedIn icon ── */}
          <a
            href={member.linkedin}
            className="absolute bottom-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center 
              shadow-[0_2px_10px_rgba(0,0,0,0.12)] hover:scale-110 active:scale-95 transition-all z-20 text-[#1a1a1a] hover:text-[#e84118]"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <FaLinkedin className={`text-lg scale-[1.25]}`} />
          </a>
        </div>

        {/* ── Info section ── */}
        <div className="flex flex-col" style={{ padding: "1rem" }}>
          <h3 className={`font-bold text-[1.2rem] leading-tight tracking-tight transition-colors duration-300 ${hovered ? "text-[#e84118]" : "text-[#1a1a1a]"}`}>
            {member.name}
          </h3>
          <span className={`font-semibold  uppercase bold text-sm tracking-wide ${hovered ? "text-[#1a1a1a]" : "text-[#e84118]"}`} style={{ marginTop: "0.15rem" }}>
            {member.role}
          </span>
        </div>

        {/* ── BIO ── */}
        {member.bio && (
          <div
            className="flex items-start gap-3 mx-3 mb-3"
            style={{ padding: "0 1rem 1.2rem" }}
          >
            <p className="text-[#201f1f] text-sm tracking-wide font-normal line-clamp-2">
              <span className="text-[#e84118] font-black text-sm leading-none">&ldquo;</span>
              {member.bio}
              <span className="text-[#e84118] font-black text-sm leading-none">&rdquo;</span>
            </p>

          </div>
        )}
      </div>
    );
  }

  // Non-EC member template
  return (
    <div
      className="relative overflow-hidden transition-all duration-300 bg-[#fafafa] cursor-pointer flex flex-col justify-between h-full"
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

      <div className="relative flex items-center gap-4 px-5 py-4 w-full max-w-md">
        {/* Profile Image */}
        <div className={`h-20 w-20 shrink-0 overflow-hidden rounded-full bg-[#e2e5e9] ${hovered ? "scale-[1.2]" : "scale-[1]"} transition-transform duration-500`}>
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={member.name}
              className={`h-full w-full object-cover `}
              onError={() => setImgSrc(null)}
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <span className="text-3xl font-black text-[#ff7300]">
                {initials}
              </span>
            </div>
          )}
        </div>

        {/* ── Content ── */}
        <div style={{ position: "relative", zIndex: 1 }} className="flex flex-col h-full justify-between">
          <div>
            <h3
              className={`font-black uppercase leading-tight transition-colors duration-300 text-xl ${hovered ? "text-[#e84118]" : "text-black"}`}
              style={{ marginBottom: "0.25rem", paddingRight: "1.5rem" }}
            >
              {member.name}
            </h3>
            <span className={`font-bold uppercase text-sm tracking-wider transition-colors duration-300 ${hovered ? "text-black" : "text-[#e84118]"}`}>
              {member.role}
            </span>
          </div>
          <p
            className="font-medium italic text-[rgba(0,0,0,0.8)] transition-colors duration-300 text-sm border-t-2 border-[rgba(0,0,0,0.1)] line-clamp-3 md:line-clamp-2"
            style={{ paddingTop: "0.5rem", marginTop: "0.5rem" }}
          >
            {member.bio}
          </p>
        </div>

        {/* ── LinkedIn icon ── */}
        <a href={member.linkedin}
          className="absolute right-0 top-0 z-50"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-xl sm:text-2xl hover:text-[#e84118] transition-colors" />
        </a>
      </div>
    </div>
  );
}