import { ContactForm } from "@/components/contact/ContactForm";
import { contactInfo, pageHeaders } from "@/lib/constants";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-sky-700">{pageHeaders.contact.label}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {pageHeaders.contact.title}
        </h1>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
        <ContactForm />
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-slate-700">{pageHeaders.contact.description}</p>
          <div className="mt-8 space-y-4 text-slate-600">
            <div>
              <p className="font-semibold text-slate-900">Email</p>
              <p>{contactInfo.email}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Téléphone</p>
              <p>{contactInfo.phone}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Adresse</p>
              <p>{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
