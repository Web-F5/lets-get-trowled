import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

// ── Custom block type components ────────────────────────────────

const RedFlagBlock = ({ value }: { value: { text: string } }) => (
  <div className="my-6 flex items-start gap-3 px-5 py-4 rounded-xl border border-amber-400 bg-amber-50">
    <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
    <p className="text-amber-900 text-base leading-relaxed m-0">{value.text}</p>
  </div>
);

const TipBoxBlock = ({ value }: { value: { text: string } }) => (
  <div className="my-6 flex items-start gap-3 px-5 py-4 rounded-xl border-l-4 border-brand-accent bg-brand-sand">
    <svg className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
    <p className="text-brand-dark text-base leading-relaxed m-0">{value.text}</p>
  </div>
);

const ChecklistItemBlock = ({ value }: { value: { text: string } }) => (
  <div className="flex items-start gap-3 my-2">
    <svg className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <p className="text-brand-charcoal/80 text-base leading-relaxed m-0">{value.text}</p>
  </div>
);

const QAItemBlock = ({ value }: { value: { question: string; answer: string; index?: number } }) => (
  <div className="my-6 rounded-xl border border-brand-sand overflow-hidden">
    <div className="bg-brand-dark px-5 py-3">
      <p className="font-display font-bold text-brand-accent text-sm uppercase tracking-widest m-0">
        {value.index ? `Question ${value.index}` : "Q"}
      </p>
      <p className="font-display text-xl font-bold text-white m-0 mt-1">{value.question}</p>
    </div>
    <div className="px-5 py-4 bg-white">
      <p className="text-brand-charcoal/80 leading-relaxed m-0">{value.answer}</p>
    </div>
  </div>
);

// ── Component map ───────────────────────────────────────────────

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-brand-charcoal/80 text-lg leading-relaxed mb-5">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-dark mt-12 mb-4 pb-3 border-b-2 border-brand-accent leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-2xl font-bold text-brand-dark mt-8 mb-3 leading-snug">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-display text-xl font-bold text-brand-dark mt-6 mb-2">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 pl-6 border-l-4 border-brand-accent bg-brand-sand rounded-r-xl py-4 pr-4">
        <p className="text-brand-dark text-lg italic leading-relaxed m-0">{children}</p>
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="my-5 space-y-2 list-none pl-0">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-5 space-y-2 list-none pl-0">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-brand-charcoal/80 text-base leading-relaxed">
        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="flex items-start gap-3 text-brand-charcoal/80 text-base leading-relaxed">
        <span className="font-display font-bold text-brand-accent flex-shrink-0 leading-none mt-0.5">—</span>
        <span>{children}</span>
      </li>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-brand-dark">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-brand-charcoal/90">{children}</em>
    ),
    underline: ({ children }) => (
      <span className="underline decoration-brand-accent decoration-2 underline-offset-2">{children}</span>
    ),
    "strike-through": ({ children }) => (
      <span className="line-through opacity-60">{children}</span>
    ),
    code: ({ children }) => (
      <code className="font-mono text-sm bg-brand-sand text-brand-dark px-1.5 py-0.5 rounded">{children}</code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-brand-dark underline decoration-brand-accent decoration-2 underline-offset-2 hover:text-brand-accent transition-colors"
      >
        {children}
      </a>
    ),
  },

  types: {
    image: ({ value }) => {
      const url = value?.asset?.url ?? value?.asset?._ref;
      if (!url) return null;
      return (
        <figure className="my-10">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={url}
              alt={value.alt ?? "Blog image"}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-sm text-brand-charcoal/50 mt-3 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    redFlag:       RedFlagBlock,
    tipBox:        TipBoxBlock,
    checklistItem: ChecklistItemBlock,
    qaItem:        QAItemBlock,
  },
};

// ── Renderer ────────────────────────────────────────────────────

export default function PortableTextRenderer({ content }: { content: PortableTextBlock[] }) {
  return (
    <div className="max-w-none">
      <PortableText value={content} components={components} />
    </div>
  );
}
