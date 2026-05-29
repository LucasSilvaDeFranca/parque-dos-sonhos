import { Plus } from "lucide-react";
import { FAQ } from "@/lib/content/faq";

/**
 * Lista de perguntas frequentes em accordion nativo (<details>).
 * Sem JS — totalmente acessível por padrão (toggle por teclado + screen reader).
 */
export function FAQList() {
  return (
    <div className="space-y-3">
      {FAQ.map((item, i) => (
        <details
          key={item.question}
          className="group rounded-2xl border border-pds-line bg-white open:bg-pds-cream open:border-pds-amber/60 open:shadow-sm transition-colors"
        >
          <summary className="flex items-start gap-4 px-5 sm:px-7 py-5 cursor-pointer list-none select-none">
            <span className="font-display text-pds-stone text-[0.78rem] tabular-nums pt-[0.2rem] w-7 flex-shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 font-display text-pds-green-darkest text-[1.05rem] sm:text-[1.12rem] leading-snug pr-3">
              {item.question}
            </span>
            <span
              aria-hidden
              className="flex-shrink-0 w-9 h-9 rounded-full bg-pds-cream group-open:bg-pds-amber group-open:text-white text-pds-fire flex items-center justify-center transition-all"
            >
              <Plus
                size={18}
                strokeWidth={2}
                className="transition-transform duration-300 group-open:rotate-45"
              />
            </span>
          </summary>
          <div className="px-5 sm:px-7 pb-6 pl-[4.5rem] sm:pl-[4.75rem] space-y-3 text-pds-graphite/85 text-[0.96rem] leading-relaxed">
            {item.answer.map((para, j) => (
              <p key={j}>{para}</p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
