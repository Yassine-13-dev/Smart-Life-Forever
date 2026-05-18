import { contactInfo, footerText } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{footerText.title}</p>
          <p className="mt-2 text-sm text-slate-400">{footerText.description}</p>
        </div>
        <div className="space-y-2 text-sm text-slate-400">
          <p>
            <span className="font-semibold text-slate-100">Email :</span> {contactInfo.email}
          </p>
          <p>
            <span className="font-semibold text-slate-100">Téléphone :</span> {contactInfo.phone}
          </p>
          <p>{contactInfo.address}</p>
        </div>
      </div>
    </footer>
  );
}
