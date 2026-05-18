import { HeroGrid } from "@/components/home/HeroGrid";
import { homeIntro } from "@/lib/constants";

export default function Home() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
      <div className="mb-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.36em] text-sky-700">
          {homeIntro.eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {homeIntro.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
          {homeIntro.description}
        </p>
      </div>

      <HeroGrid />
    </section>
  );
}
