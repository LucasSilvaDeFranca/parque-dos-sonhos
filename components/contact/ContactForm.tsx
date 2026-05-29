"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: FormData) => {
    try {
      // No backend yet — falls back to opening WhatsApp pre-filled.
      const lines = [
        `Olá! Meu nome é ${data.name}.`,
        ``,
        `${data.message}`,
        ``,
        `📞 ${data.phone}`,
        `✉️ ${data.email}`,
      ];
      const text = encodeURIComponent(lines.join("\n"));
      window.open(
        `${CONTACT.whatsapp.href}?text=${text}`,
        "_blank",
        "noopener,noreferrer"
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const fieldClass =
    "w-full px-5 py-4 bg-white border rounded-2xl text-pds-graphite text-[0.97rem] placeholder:text-pds-mist transition-colors focus:outline-none";
  const okBorder = "border-pds-line focus:border-pds-amber";
  const errBorder = "border-pds-fire/60";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-[0.78rem] uppercase tracking-[0.18em] font-semibold text-pds-stone mb-2"
          >
            Nome *
          </label>
          <input
            id="name"
            type="text"
            placeholder="Seu nome completo"
            className={`${fieldClass} ${errors.name ? errBorder : okBorder}`}
            {...register("name", { required: "Nome é obrigatório" })}
          />
          {errors.name && (
            <p className="mt-2 flex items-center gap-1.5 text-pds-fire text-[0.78rem]">
              <AlertCircle size={12} /> {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-[0.78rem] uppercase tracking-[0.18em] font-semibold text-pds-stone mb-2"
          >
            Telefone *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            className={`${fieldClass} ${errors.phone ? errBorder : okBorder}`}
            {...register("phone", { required: "Telefone é obrigatório" })}
          />
          {errors.phone && (
            <p className="mt-2 flex items-center gap-1.5 text-pds-fire text-[0.78rem]">
              <AlertCircle size={12} /> {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-[0.78rem] uppercase tracking-[0.18em] font-semibold text-pds-stone mb-2"
        >
          E-mail *
        </label>
        <input
          id="email"
          type="email"
          placeholder="seu@email.com"
          className={`${fieldClass} ${errors.email ? errBorder : okBorder}`}
          {...register("email", {
            required: "E-mail é obrigatório",
            pattern: { value: /^\S+@\S+$/i, message: "E-mail inválido" },
          })}
        />
        {errors.email && (
          <p className="mt-2 flex items-center gap-1.5 text-pds-fire text-[0.78rem]">
            <AlertCircle size={12} /> {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[0.78rem] uppercase tracking-[0.18em] font-semibold text-pds-stone mb-2"
        >
          Mensagem *
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Conta pra gente: data desejada, número de pessoas, atividades de interesse..."
          className={`${fieldClass} resize-none ${
            errors.message ? errBorder : okBorder
          }`}
          {...register("message", { required: "Mensagem é obrigatória" })}
        />
        {errors.message && (
          <p className="mt-2 flex items-center gap-1.5 text-pds-fire text-[0.78rem]">
            <AlertCircle size={12} /> {errors.message.message}
          </p>
        )}
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          <Send size={18} strokeWidth={1.8} />
          {isSubmitting ? "Enviando..." : "Enviar mensagem"}
        </Button>

        {status === "success" && (
          <p className="mt-4 flex items-center gap-2 text-pds-green text-[0.92rem]">
            <CheckCircle2 size={16} />
            Abrindo WhatsApp com sua mensagem... Caso não abra, fale conosco
            diretamente.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 flex items-center gap-2 text-pds-fire text-[0.92rem]">
            <AlertCircle size={16} />
            Algo deu errado. Tente novamente ou fale direto pelo WhatsApp.
          </p>
        )}

        <p className="mt-4 text-[0.78rem] text-pds-stone">
          Ao enviar, você será redirecionado para o WhatsApp da nossa central de
          reservas com sua mensagem pronta.
        </p>
      </div>
    </form>
  );
}
