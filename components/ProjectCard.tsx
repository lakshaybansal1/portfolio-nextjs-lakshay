type Props = {
  title: string;
  description: string;
  stack: string;
  live?: string;
  code?: string;
};
export default function ProjectCard({ title, description, stack, live, code }: Props) {
  return (
    <article className="card">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm opacity-80">{description}</p>
      <p className="mt-2 text-xs opacity-60">{stack}</p>
      <div className="mt-3 flex gap-3 text-sm">
        {live && <a className="btn" href={live} target="_blank" rel="noreferrer">Live</a>}
        {code && <a className="btn" href={code} target="_blank" rel="noreferrer">Code</a>}
      </div>
    </article>
  );
}
