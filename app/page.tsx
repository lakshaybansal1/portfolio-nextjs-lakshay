import ProjectCard from "../components/ProjectCard";
import "./globals.css";

export default function Home() {
  return (
    <main className="container max-w-5xl p-6" id="main">
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <h1 className="text-3xl font-bold">Lakshay Bansal</h1>
          <p className="text-sm opacity-80">B.S. Computer Science @ University at Albany (SUNY) — Expected May 2026</p>
        </div>
        <nav className="flex gap-4 text-sm">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" target="_blank" rel="noopener">Resume</a>
        </nav>
      </header>

      <section id="hero" className="mt-8">
        <h2 className="text-2xl font-semibold">Back-end & full‑stack developer who ships.</h2>
        <p className="mt-2 text-sm opacity-80 max-w-2xl">
          I build reliable, fast applications across the stack (Java/Node/React) and love systems work
          like CPU & cache simulators and interpreters. Looking for an internship where I can contribute
          to backend services and developer tooling.
        </p>
        <div className="mt-4 flex gap-3">
          <a className="btn" href="#projects">View Projects</a>
          <a className="btn" href="mailto:lbansal@albany.edu">Email Me</a>
        </div>
      </section>

      <section id="projects" className="mt-10">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <ProjectCard
            title="Java CPU & Cache Simulator"
            description="Cycle-accurate 32‑bit RISC CPU with fetch‑decode‑execute pipeline, 2‑pass assembler, and L1/L2 caches with cycle accounting."
            stack="Java • JUnit • Custom ISA"
            code="https://github.com/lakshaybansal1/java-cpu-simulator"
          />
          <ProjectCard
            title="Tran Language Interpreter"
            description="Lexer → Parser → AST → Interpreter pipeline with detailed error reporting (line/column), token lookahead, and full JUnit suite."
            stack="Java • Recursive Descent Parsing"
            code="https://github.com/lakshaybansal1/tran-language-spec"
          />
          <ProjectCard
            title="Word‑Guessing Game (C Web Server)"
            description="Multi‑threaded POSIX sockets HTTP server hosting a live word‑guessing game with graceful shutdown and memory‑safe cleanup."
            stack="C • pthreads • Sockets"
            code="https://github.com/lakshaybansal1/word-guess-game"
          />
        </div>
      </section>

      <section id="experience" className="mt-10">
        <h2 className="text-2xl font-semibold">Education & Highlights</h2>
        <ul className="mt-2 list-disc pl-5 text-sm">
          <li><strong>B.S. in Computer Science</strong>, University at Albany, SUNY — Jan 2024 – May 2026 (Expected)</li>
          <li><strong>Award:</strong> 2nd Place, AI2EM Hackathon — University at Albany (Apr 2024)</li>
          <li><strong>Core Courses:</strong> Algorithms, Operating Systems, DBMS, Networks, Software Engineering, Automata, Assembly</li>
        </ul>
      </section>

      <section id="about" className="mt-10">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-2 text-sm opacity-80 max-w-3xl">
          I enjoy turning ideas into production‑ready software and writing clean, tested code. My recent focus
          has been backend services (Node/Express, Java/Spring) and performance‑minded systems projects.
        </p>
      </section>

      <section id="contact" className="mt-10">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-sm opacity-80">
          Email: <a href="mailto:lbansal@albany.edu" className="underline">lbansal@albany.edu</a> · 
          GitHub: <a href="https://github.com/lakshaybansal1" target="_blank" className="underline" rel="noreferrer">@lakshaybansal1</a> · 
          LinkedIn: <a href="https://www.linkedin.com/in/lakshay-bansal-274564220" target="_blank" className="underline" rel="noreferrer">/in/lakshay-bansal-274564220</a>
        </p>
      </section>

      <footer className="mt-10 border-t border-[var(--border)] pt-4 text-xs opacity-70">
        © {new Date().getFullYear()} Lakshay Bansal
      </footer>
    </main>
  );
}
