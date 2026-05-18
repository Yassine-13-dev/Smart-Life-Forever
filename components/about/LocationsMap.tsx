import { locations } from "@/lib/constants";

export function LocationsMap() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm uppercase tracking-[0.3em] text-sky-700">Implantations</p>
      <h2 className="mt-3 text-2xl font-semibold text-slate-900">Nos villes</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {locations.map((location) => (
          <div key={location} className="rounded-2xl bg-slate-50 px-4 py-3 text-slate-700">
            {location}
          </div>
        ))}
      </div>
    </div>
  );
}
