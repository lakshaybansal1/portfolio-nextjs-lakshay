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
          <p className="text-sm opacity-80">
            B.S. Computer Science @ University at Albany (SUNY) — Expected May 2026
          </p>
        </div>
        <nav className="flex gap-4 text-sm">
          <a className="navlink" href="#projects">Projects</a>
          <a className="navlink" href="#experience">Education</a>
          <a className="navlink" href="#about">About</a>
          <a className="navlink" href="#contact">Contact</a>
          <a className="navlink" href="/resume.pdf" target="_blank" rel="noopener">Resume</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="mt-10">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-200">
            Machine Learning & AI-focused Computer Science student.
          </span>
        </h2>
        <p className="mt-2 section-subtle max-w-2xl">
          I build end-to-end machine learning and data-driven systems, with interests in Machine Learning,
          Natural Language Processing, and Computer Vision. Currently seeking undergraduate research
          opportunities in ML and NLP.
        </p>
        <div className="mt-5 flex gap-3">
          <a className="btn btn-primary" href="#projects">View Projects</a>
          <a className="btn" href="mailto:lbansal@albany.edu">Email Me</a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-12">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtle mt-1">Selected projects in AI, systems, and full-stack development.</p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {/* Nimbus AI */}
          <ProjectCard
            title="Nimbus AI — Quantitative Stock Analytics"
            description="AI-driven backtesting and analytics platform using Monte-Carlo simulation for strategy evaluation and PnL forecasting."
            stack="Python • Machine Learning • Monte-Carlo • PostgreSQL • Supabase • Vercel Edge"
          />

          {/* Face Recognition Attendance System */}
          <ProjectCard
            title="Face Recognition Attendance System"
            description="Deep learning–based real-time face recognition system for automated attendance marking with a full ML pipeline and Firebase-backed data storage."
            stack="Python • Deep Learning • Computer Vision • OpenCV • Firebase • Tkinter • Pandas"
            code="https://github.com/LakshayBansal/Face-Recognition-Attendance-System"
          />

          {/* Labourie */}
          <ProjectCard
            title="Labourie — Short-Term Labor Marketplace"
            description="Two-sided platform matching local workers to urgent gigs with escrowed payments, identity verification, and admin analytics."
            stack="Next.js • Prisma • PostgreSQL • Auth.js • Stripe • Tailwind"
            live="https://labourieinusa.netlify.app/"
            code="https://github.com/lakshaybansal1/Labourie"
          />

          {/* Systems Projects */}
          <ProjectCard
            title="Java CPU & Cache Simulator"
            description="Cycle-accurate 32-bit RISC CPU with fetch-decode-execute pipeline, two-pass assembler, and L1/L2 cache simulation."
            stack="Java • Computer Architecture • JUnit • Custom ISA"
            code="https://github.com/lakshaybansal1/java-cpu-simulator"
          />

          <ProjectCard
            title="Tran Language Interpreter"
            description="Lexer → Parser → AST → Interpreter pipeline with semantic analysis and comprehensive unit testing."
            stack="Java • Compilers • Recursive Descent Parsing"
            code="https://github.com/lakshaybansal1/tran-language-spec"
          />

          <ProjectCard
            title="Word-Guessing Game (C Web Server)"
            description="Multi-threaded POSIX sockets HTTP server hosting a live word-guessing game with memory-safe cleanup."
            stack="C • Systems Programming • pthreads • Sockets"
            code="https://github.com/lakshaybansal1/word-guess-game"
          />
        </div>
      </section>

      {/* Education */}
      <section id="experience" className="mt-12">
        <h2 className="section-title">Education & Highlights</h2>
        <ul className="mt-2 list-disc pl-5 text-sm">
          <li>
            <strong>B.S. in Computer Science</strong>, University at Albany, SUNY — Jan 2024 – May 2026 (Expected)
          </li>
          <li>
            <strong>Award:</strong> 2nd Place, AI2EM Hackathon — University at Albany (Apr 2024)
          </li>
          <li>
            <strong>Core:</strong> Machine Learning, Artificial Intelligence, Algorithms, Statistics, Operating Systems, DBMS, Computer Networks
          </li>
        </ul>
      </section>

      {/* About */}
      <section id="about" className="mt-12">
        <h2 className="section-title">About</h2>
        <p className="mt-2 section-subtle max-w-3xl">
          I am an undergraduate Computer Science student graduating in May 2026 with a strong interest in
          Machine Learning, Natural Language Processing, and Artificial Intelligence research. My work focuses
          on building end-to-end machine learning systems, computer vision pipelines, and performance-minded
          systems projects. I enjoy working on research-oriented problems involving real-world data,
          model evaluation, and experimentation.
        </p>
        <p className="mt-3 text-sm opacity-80">
          Research Interests: Machine Learning, NLP, Computer Vision, Multimodal Data, AI for Education
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-12">
        <h2 className="section-title">Contact</h2>
        <div className="mt-3 section-subtle space-y-2">
          <p>
            Email: <a href="mailto:lbansal@albany.edu" className="underline">lbansal@albany.edu</a> ·{" "}
            GitHub: <a href="https://github.com/lakshaybansal1" target="_blank" className="underline" rel="noreferrer">@lakshaybansal1</a> ·{" "}
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
