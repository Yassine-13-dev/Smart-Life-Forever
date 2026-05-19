import { homePageCards } from "@/lib/constants";
import HeroCard from "@/components/home/HeroCard";

export function HeroGrid() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
      {homePageCards.map((card) => (
        <HeroCard key={card.href} {...card} />
      ))}
    </div>
  );
}
