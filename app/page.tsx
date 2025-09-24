// app/page.tsx
import ProjectCard from "../components/ProjectCard";

const YEAR = new Date().getFullYear();

export default function Home() {
  return (
    <main className="container max-w-5xl px-5 pb-28" id="main">
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>

      {/* Sticky, blurred nav */}
      <header className="sticky-nav flex flex-wrap items-center justify-between gap-4 px-1 py-3">
        <div>
          <h1 className="text-3xl font-bold">Lakshay Bansal</h1>
          <p className="text-sm opacity-80">B.S. Computer Science @ University at Albany (SUNY) — Expected May 2026</p>
        </div>
        <nav className="flex gap-4 text-sm">
          <a className="navlink" href="#projects">Projects</a>
          <a className="navlink" href="#experience">Experience</a>
          <a className="navlink" href="#about">About</a>
          <a className="navlink" href="#contact">Contact</a>
          <a className="navlink" href="/resume.pdf" target="_blank" rel="noopener">Resume</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="mt-10">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-200">
            Back-end & full-stack developer who ships.
          </span>
        </h2>
        <p className="mt-2 section-subtle max-w-2xl">
          I build reliable, fast applications across the stack (Java/Node/React) and love systems work
          like CPU & cache simulators and interpreters. Looking for an internship where I can contribute
          to backend services and developer tooling.
        </p>
        <div className="mt-5 flex gap-3">
          <a className="btn btn-primary" href="#projects">View Projects</a>
          <a className="btn" href="mailto:lbansal@albany.edu">Email Me</a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-12">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtle mt-1">A few things I’ve built recently.</p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {/* Real-world */}
          <ProjectCard
            title="Nimbus AI — Stock Market Analytics"
            description="AI-assisted backtesting and fundamentals dashboard with watchlists, strategy notebooks, and Monte-Carlo PnL runs."
            stack="Next.js • TypeScript • Supabase/Postgres • Python • Backtesting • Vercel Edge"
            live="https://nimbus.example.com"   // TODO: replace with your real URL
            code="https://github.com/lakshaybansal1/nimbus" // TODO: adjust if private
          />
          <ProjectCard
            title="Labourie — Short-Term Labor Marketplace"
            description="Two-sided platform matching local workers to urgent gigs. Escrowed payments, identity verification, ratings, and admin analytics."
            stack="Next.js • Prisma • PostgreSQL • Auth.js • Stripe • Tailwind"
            live="https://labourie.example.com" // TODO: replace with your real URL
            code="https://github.com/lakshaybansal1/labourie"
          />

          {/* Existing */}
          <ProjectCard
            title="Java CPU & Cache Simulator"
            description="Cycle-accurate 32-bit RISC CPU with fetch-decode-execute pipeline, 2-pass assembler, and L1/L2 caches with cycle accounting."
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
            title="Word-Guessing Game (C Web Server)"
            description="Multi-threaded POSIX sockets HTTP server hosting a live word-guessing game with graceful shutdown and memory-safe cleanup."
            stack="C • pthreads • Sockets"
            code="https://github.com/lakshaybansal1/word-guess-game"
          />
        </div>
      </section>

      {/* Education */}
      <section id="experience" className="mt-12">
        <h2 className="section-title">Education & Highlights</h2>
        <ul className="mt-2 list-disc pl-5 text-sm">
          <li><strong>B.S. in Computer Science</strong>, University at Albany, SUNY — Jan 2024 – May 2026 (Expected)</li>
          <li><strong>Award:</strong> 2nd Place, AI2EM Hackathon — University at Albany (Apr 2024)</li>
          <li><strong>Core:</strong> Algorithms, Operating Systems, DBMS, Networks, Software Engineering, Automata, Assembly</li>
        </ul>
      </section>

      {/* About */}
      <section id="about" className="mt-12">
        <h2 className="section-title">About</h2>
        <p className="mt-2 section-subtle max-w-3xl">
          I enjoy turning ideas into production-ready software and writing clean, tested code. My recent focus:
          back-end services (Node/Express, Java/Spring) and performance-minded systems projects.
        </p>
      </section>

      {/* Contact */}
      {/* Contact */}
<section id="contact" className="mt-12">
  <h2 className="section-title">Contact</h2>
  <div className="mt-3 section-subtle space-y-2">
    <p>
      Email: <a href="mailto:lbansal@albany.edu" className="underline">lbansal@albany.edu</a> ·
      GitHub: <a href="https://github.com/lakshaybansal1" target="_blank" className="underline" rel="noreferrer">@lakshaybansal1</a> ·
      LinkedIn: <a href="https://www.linkedin.com/in/lakshay-bansal-275456220/" target="_blank" className="underline" rel="noreferrer">/in/lakshay-bansal-275456220</a>
    </p>
    <p>
      Phone: <a className="underline" href="tel:+15182290731">+1 (518) 229-0731</a>
    </p>
    <p>
      Address:{" "}
      <a
        className="underline"
        target="_blank"
        rel="noreferrer"
        href="https://maps.google.com/?q=604+Western+Ave,+Albany,+NY+12203"
      >
        604 Western Ave, Albany, NY 12203
      </a>
    </p>
  </div>
</section>

     
     
      <footer className="mt-12 border-t border-[var(--border)] pt-4 text-xs opacity-70">
        © {YEAR} Lakshay Bansal
      </footer>
    </main>
  );
}
