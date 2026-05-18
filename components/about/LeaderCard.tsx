import { leaderProfile } from "@/lib/constants";

export function LeaderCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-700">{leaderProfile.title}</p>
        <h2 className="text-2xl font-semibold text-slate-900">{leaderProfile.name}</h2>
        <p className="text-slate-600 leading-7">{leaderProfile.description}</p>
      </div>
    </div>
  );
}
