import ProjectCard from "../components/ProjectCard";

const YEAR = new Date().getFullYear();

const technologies = [
  "Python",
  "FastAPI",
  "React",
  "Next.js",
  "AWS",
  "SQL",
  "PostgreSQL",
  "Docker",
  "FME",
  "Git",
  "GitHub",
  "Java",
  "TypeScript",
];

const highlights = [
  { value: "2+", label: "Years Programming" },
  { value: "15+", label: "Projects Built" },
  { value: "6+", label: "Programming Languages" },
  { value: "4", label: "Awards & Honors" },
];

export default function Home() {
  return (
    <main className="container max-w-5xl px-5 pb-28" id="main">
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>

      {/* Sticky navigation */}
      <header className="sticky-nav flex flex-wrap items-center justify-between gap-4 px-1 py-3">
        <div>
          <h1 className="text-3xl font-bold">Lakshay Bansal</h1>
          <p className="text-sm opacity-80">
            Software Engineer · ETL Developer · Backend &amp; Data Engineering
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-4 text-sm"
          aria-label="Primary navigation"
        >
          <a className="navlink" href="#experience">
            Experience
          </a>
          <a className="navlink" href="#skills">
            Skills
          </a>
          <a className="navlink" href="#projects">
            Projects
          </a>
          <a className="navlink" href="#education">
            Education
          </a>
          <a className="navlink" href="#about">
            About
          </a>
          <a className="navlink" href="#contact">
            Contact
          </a>
          <a
            className="navlink"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="mt-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider opacity-70">
          Backend Engineering · Data Engineering · Artificial Intelligence
        </p>

        <h2 className="max-w-4xl text-3xl font-semibold sm:text-5xl">
          <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-200 bg-clip-text text-transparent">
            Software Engineer specializing in backend development, data
            engineering, and intelligent systems.
          </span>
        </h2>

        <p className="section-subtle mt-4 max-w-3xl">
          Computer Science graduate from the University at Albany, Cum Laude,
          and ETL Developer at Levrx Technology. I build scalable backend
          systems, healthcare data pipelines, cloud-based applications, and
          AI-powered software using Python, SQL, FastAPI, React, Next.js, AWS,
          and FME.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>

          <a className="btn" href="#experience">
            View Experience
          </a>

          <a
            className="btn"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>

          <a
            className="btn"
            href="https://github.com/lakshaybansal1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            className="btn"
            href="https://www.linkedin.com/in/lakshay-bansal-274564220"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a className="btn" href="mailto:lakshaybansal655@gmail.com">
            Email Me
          </a>
        </div>
      </section>

      {/* Highlights */}
      <section
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        aria-label="Career highlights"
      >
        {highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-[var(--border)] p-5 text-center"
          >
            <p className="text-3xl font-bold">{item.value}</p>
            <p className="section-subtle mt-1 text-sm">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section id="experience" className="mt-14">
        <h2 className="section-title">Professional Experience</h2>

        <div className="mt-5 rounded-2xl border border-[var(--border)] p-5">
          <div className="flex flex-col justify-between gap-2 sm:flex-row">
            <div>
              <h3 className="text-lg font-semibold">Levrx Technology, Inc.</h3>
              <p className="text-sm font-medium">ETL Developer</p>
              <p className="text-sm opacity-70">Troy, New York</p>
            </div>

            <div className="text-sm sm:text-right">
              <p>
                <strong>Full-Time:</strong> Jun 2026 – Present
              </p>
              <p>
                <strong>Part-Time:</strong> Apr 2026 – May 2026
              </p>
            </div>
          </div>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
            <li>
              Design and maintain production ETL workflows supporting
              healthcare and pharmacy benefit management data.
            </li>
            <li>
              Build data-ingestion and transformation pipelines using SQL,
              Python, FME, AWS S3, and secure file-transfer systems.
            </li>
            <li>
              Develop reusable FME transformers, preprocessors, loaders, and
              automated client-processing workflows that reduce manual work.
            </li>
            <li>
              Troubleshoot production ETL failures, validate healthcare
              datasets, and improve data quality and processing reliability.
            </li>
            <li>
              Collaborate with software engineers and analysts to deliver
              client integrations, backend automation, and scalable data
              solutions.
            </li>
          </ul>
        </div>
      </section>

      {/* Technical skills */}
      <section id="skills" className="mt-14">
        <h2 className="section-title">Technical Skills</h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-[var(--border)] p-4">
            <h3 className="font-semibold">Languages</h3>
            <p className="section-subtle mt-2 text-sm">
              Python, Java, TypeScript, JavaScript, SQL, C, C++
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] p-4">
            <h3 className="font-semibold">Frontend</h3>
            <p className="section-subtle mt-2 text-sm">
              React, Next.js, React Native, Tailwind CSS
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] p-4">
            <h3 className="font-semibold">Backend</h3>
            <p className="section-subtle mt-2 text-sm">
              FastAPI, Flask, Node.js, REST APIs, Authentication
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] p-4">
            <h3 className="font-semibold">Data Engineering</h3>
            <p className="section-subtle mt-2 text-sm">
              ETL, FME, Data Pipelines, Data Transformation, Data Validation,
              Secure File Transfer
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] p-4">
            <h3 className="font-semibold">Databases</h3>
            <p className="section-subtle mt-2 text-sm">
              PostgreSQL, MySQL, MongoDB, Firebase, Supabase
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] p-4">
            <h3 className="font-semibold">Cloud &amp; DevOps</h3>
            <p className="section-subtle mt-2 text-sm">
              AWS, AWS S3, Docker, Kubernetes, Git, GitHub, Vercel, CI/CD,
              Postman
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider opacity-70">
            Featured Technologies
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[var(--border)] px-3 py-1 text-sm"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-14">
        <h2 className="section-title">Selected Projects</h2>

        <p className="section-subtle mt-1">
          Selected work in artificial intelligence, backend development,
          optimization, and full-stack engineering.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <ProjectCard
            title="AI Photo Forensic Detector"
            description="AI-powered digital image forensic platform that analyzes metadata, camera characteristics, and deep-learning predictions to identify potentially manipulated images and generate authenticity reports."
            stack="Python • FastAPI • PyTorch • Next.js • React Native"
            code="https://github.com/FBQuark/photo-forensic-detector"
          />

          <ProjectCard
            title="Labourie — Labor Marketplace"
            description="Full-stack labor marketplace connecting workers with customers through secure authentication, job management, Stripe payments, automated payouts, and platform analytics."
            stack="Next.js • PostgreSQL • Auth.js • Stripe • Tailwind CSS"
            live="https://labourieinusa.netlify.app/"
            code="https://github.com/lakshaybansal1/Labourie"
          />

          <ProjectCard
            title="Package Assignment and Routing System"
            description="Vehicle-routing optimization platform implementing Genetic Algorithms, Ant Colony Optimization, and Simulated Annealing on real-world road-network data."
            stack="Python • Genetic Algorithm • Ant Colony Optimization • Simulated Annealing"
          />

          <ProjectCard
            title="Tran Language Compiler & Interpreter"
            description="Custom programming language implementation featuring lexical analysis, recursive-descent parsing, abstract syntax trees, runtime execution, and unit testing."
            stack="Java • Compilers • Recursive-Descent Parsing • JUnit"
            code="https://github.com/lakshaybansal1/tran-language-spec"
          />

          <ProjectCard
            title="Nimbus AI — Stock Analytics Platform"
            description="AI-powered stock market analytics platform providing investment insights, financial visualizations, strategy evaluation, and portfolio analysis."
            stack="Next.js • Python • Supabase • PostgreSQL • Vercel"
          />

          <ProjectCard
            title="Java CPU & Cache Simulator"
            description="Cycle-accurate processor simulator featuring a custom instruction set architecture, two-pass assembler, memory hierarchy, and multi-level cache simulation."
            stack="Java • Computer Architecture • JUnit • Custom ISA"
            code="https://github.com/lakshaybansal1/java-cpu-simulator"
          />
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mt-14">
        <h2 className="section-title">Education</h2>

        <div className="mt-5 rounded-2xl border border-[var(--border)] p-5">
          <div className="flex flex-col justify-between gap-2 sm:flex-row">
            <div>
              <h3 className="text-lg font-semibold">
                University at Albany, State University of New York
              </h3>

              <p className="text-sm font-medium">
                Bachelor of Science in Computer Science
              </p>

              <p className="text-sm opacity-70">
                Cum Laude · Jan 2024 – May 2026
              </p>
            </div>

            <p className="text-sm sm:text-right">Albany, New York</p>
          </div>

          <div className="mt-4">
            <p className="text-sm font-semibold">Relevant Coursework</p>
            <p className="section-subtle mt-1 text-sm">
              Data Structures, Algorithms, Databases, Operating Systems,
              Computer Networks, Cryptography, Software Engineering, Machine
              Learning, and Artificial Intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Awards and certifications */}
      <section id="achievements" className="mt-14">
        <h2 className="section-title">Awards &amp; Certifications</h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-[var(--border)] p-5">
            <h3 className="font-semibold">Awards &amp; Honors</h3>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
              <li>Cum Laude, University at Albany — May 2026</li>
              <li>Dean&apos;s List, University at Albany — Spring 2026</li>
              <li>
                Runner-Up, Best Computer Science Capstone Project — May 2026
              </li>
              <li>2nd Place, AI2EM Competition — Apr 2024</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[var(--border)] p-5">
            <h3 className="font-semibold">Certifications</h3>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
              <li>Stanford University — Algorithms</li>
              <li>Stanford University — Introduction to Statistics</li>
              <li>IBM — Introduction to Artificial Intelligence</li>
              <li>IBM — Introduction to Hardware and Operating Systems</li>
              <li>Great Learning — SQL for Data Science</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mt-14">
        <h2 className="section-title">About</h2>

        <p className="section-subtle mt-3 max-w-3xl">
          I am a software engineer passionate about building scalable backend
          systems, cloud-based applications, intelligent automation, and
          data-driven solutions. My experience spans healthcare ETL systems,
          AI-powered applications, algorithmic software, and full-stack
          development.
        </p>

        <p className="section-subtle mt-3 max-w-3xl">
          I enjoy solving challenging engineering problems involving
          large-scale data processing, backend architecture, cloud computing,
          API development, automation, and machine learning.
        </p>

        <p className="mt-3 text-sm opacity-80">
          Interested In: Backend Engineering, Data Engineering, Distributed
          Systems, Cloud Computing, Artificial Intelligence, and Full-Stack
          Development
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-14">
        <h2 className="section-title">Contact</h2>

        <p className="section-subtle mt-3 max-w-3xl">
          Open to Software Engineering, Backend Engineering, Data Engineering,
          and Full-Stack Development opportunities.
        </p>

        <div className="section-subtle mt-4 space-y-2">
          <p>
            Email:{" "}
            <a
              href="mailto:lakshaybansal655@gmail.com"
              className="underline"
            >
              lakshaybansal655@gmail.com
            </a>
          </p>

          <p>
            Phone:{" "}
            <a className="underline" href="tel:+15182290731">
              +1 (518) 229-0731
            </a>
          </p>

          <p>
            GitHub:{" "}
            <a
              href="https://github.com/lakshaybansal1"
              target="_blank"
              className="underline"
              rel="noopener noreferrer"
            >
              github.com/lakshaybansal1
            </a>
          </p>

          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/lakshay-bansal-274564220"
              target="_blank"
              className="underline"
              rel="noopener noreferrer"
            >
              linkedin.com/in/lakshay-bansal-274564220
            </a>
          </p>

          <p>
            Resume:{" "}
            <a
              href="/resume.pdf"
              target="_blank"
              className="underline"
              rel="noopener noreferrer"
            >
              View portfolio resume
            </a>
          </p>

          <p>Location: Albany, New York</p>
        </div>
      </section>

      <footer className="mt-14 border-t border-[var(--border)] pt-4 text-xs opacity-70">
        <p>Designed and built by Lakshay Bansal</p>
        <p className="mt-1">© {YEAR} Lakshay Bansal. All rights reserved.</p>
      </footer>
    </main>
  );
}