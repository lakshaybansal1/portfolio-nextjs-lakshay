// components/ProjectCard.tsx
"use client";

import { ExternalLink, Github } from "lucide-react";
import type { MouseEvent } from "react";

type Props = {
  title: string;
  description: string;
  /** Use " • " between items */
  stack: string;
  live?: string;
  code?: string;
};

export default function ProjectCard({ title, description, stack, live, code }: Props) {
  const tags = stack.split("•").map(s => s.trim()).filter(Boolean);

  function onMouseMove(e: MouseEvent<HTMLElement>) {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <article className="project-card group relative overflow-hidden rounded-2xl" onMouseMove={onMouseMove}>
      {/* soft gradient rim */}
      <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(at_0%_0%,#7aa2ff,transparent_25%,#74e0ff_60%,transparent_85%)] opacity-20 blur-[6px]" />
      {/* glass body */}
      <div className="relative card">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-1 text-sm text-gray-300/90">{description}</p>

        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map(t => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
        )}

        <div className="mt-4 flex gap-2 text-sm">
          {live && (
            <a className="btn btn-primary inline-flex items-center gap-2" href={live} target="_blank" rel="noreferrer">
              <ExternalLink size={16} /> Live
            </a>
          )}
          {code && (
            <a className="btn inline-flex items-center gap-2" href={code} target="_blank" rel="noreferrer">
              <Github size={16} /> Code
            </a>
          )}
        </div>
      </div>

      {/* spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(200px 200px at var(--mx) var(--my), rgba(122,162,255,.15), transparent 60%)" }}
      />
    </article>
  );
}
