import { calendarEvents, pageHeaders } from "@/lib/constants";

export default function CalendarPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-sky-700">{pageHeaders.calendar.label}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {pageHeaders.calendar.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
          {pageHeaders.calendar.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {calendarEvents.map((event) => (
          <article key={event.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{event.title}</h2>
            <p className="mt-2 text-slate-600">{event.description}</p>
            <p className="mt-4 text-sm text-slate-500">{event.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
