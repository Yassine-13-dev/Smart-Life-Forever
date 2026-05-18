import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface HeroCardProps {
  title: string;
  description: string;
  href: string;
}

export function HeroCard({ title, description, href }: HeroCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="flex h-52 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-100 via-slate-100 to-slate-200 px-6 text-center">
        <p className="text-lg font-semibold text-slate-600">{title}</p>
      </div>
      <div className="space-y-4 p-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
          <p className="mt-3 text-slate-600">{description}</p>
        </div>
        <div>
          <Button as="link" href={href} className="w-full sm:w-auto">
            En savoir plus
          </Button>
        </div>
      </div>
    </Card>
  );
}
