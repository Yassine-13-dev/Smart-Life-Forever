"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const contactSchema = z.object({
  name: z.string().min(2, "Veuillez entrer votre nom."),
  email: z.string().email("Veuillez entrer une adresse email valide."),
  subject: z.string().min(5, "Veuillez entrer un sujet."),
  message: z.string().min(10, "Veuillez entrer un message plus détaillé."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactFormValues) {
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Erreur serveur");
      }

      setStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
            Nom
          </label>
          <Input id="name" type="text" {...register("name")} placeholder="Votre nom" />
          {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
            Email
          </label>
          <Input id="email" type="email" {...register("email")} placeholder="Votre email" />
          {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">
          Sujet
        </label>
        <Input id="subject" type="text" {...register("subject")} placeholder="Sujet du message" />
        {errors.subject && <p className="mt-2 text-sm text-red-600">{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={6}
          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          placeholder="Votre message ici"
        />
        {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      {status === "success" && <p className="text-sm text-green-600">Message envoyé avec succès.</p>}
      {status === "error" && <p className="text-sm text-red-600">Échec de l'envoi. Veuillez réessayer.</p>}

      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Envoi..." : "Envoyer le message"}
      </Button>
    </form>
  );
}
