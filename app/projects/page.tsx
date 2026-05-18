import { pageHeaders, projectsList } from "@/lib/constants";

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-sky-700">{pageHeaders.projects.label}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {pageHeaders.projects.title}
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsList.map((project) => (
          <div key={project.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{project.title}</h2>
            <p className="mt-3 text-slate-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
