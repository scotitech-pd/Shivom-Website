import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft } from 'lucide-react';

type HeroChip = {
  label: string;
  value: string;
};

type HeroImage = {
  src: string;
  alt: string;
};

type PageAction = {
  href: string;
  label: string;
};

type CalloutTone = 'blue' | 'green' | 'amber' | 'slate';

type CardItem = {
  title: string;
  description?: string;
  meta?: string;
};

type TimelineItem = {
  label: string;
  title: string;
  description?: string;
};

type DocumentItem = {
  title: string;
  description?: string;
  href?: string;
  hrefLabel?: string;
};

export function PageShell({
  section,
  title,
  description,
  chips = [],
  heroImage,
  heroAside,
  backHref = '/',
  backLabel = 'Back to Home',
  primaryAction,
  secondaryAction,
  children,
}: {
  section: string;
  title: string;
  description: string;
  chips?: HeroChip[];
  heroImage?: HeroImage;
  heroAside?: ReactNode;
  backHref?: string;
  backLabel?: string;
  primaryAction?: PageAction;
  secondaryAction?: PageAction;
  children: ReactNode;
}) {
  const showHeroAside = heroImage || heroAside;

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#eff6ff_0%,#f8fafc_18%,#ffffff_52%,#f8fafc_100%)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-sky-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-sky-400/30 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-blue-50 transition hover:bg-white/15"
          >
            <ChevronLeft size={16} />
            {backLabel}
          </Link>

          <div
            className={`grid gap-8 rounded-[2rem] border border-white/12 bg-white/8 p-8 shadow-[0_32px_90px_-36px_rgba(15,23,42,0.9)] backdrop-blur-sm md:p-10 ${
              showHeroAside ? 'lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-end' : ''
            }`}
          >
            <div>
              <p className="mb-4 inline-flex rounded-full bg-sky-400/15 px-4 py-2 text-sm font-semibold tracking-[0.18em] text-sky-100 uppercase">
                {section}
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100 md:text-lg">
                {description}
              </p>

              {chips.length > 0 && (
                <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:max-w-3xl xl:grid-cols-4">
                  {chips.map((chip) => (
                    <div
                      key={`${chip.label}-${chip.value}`}
                      className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 shadow-lg shadow-slate-950/10"
                    >
                      <p className="text-xs font-semibold tracking-[0.16em] text-blue-200 uppercase">
                        {chip.label}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">{chip.value}</p>
                    </div>
                  ))}
                </div>
              )}

              {(primaryAction || secondaryAction) && (
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {primaryAction && (
                    <Link
                      href={primaryAction.href}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-950 transition hover:bg-blue-50"
                    >
                      {primaryAction.label}
                      <ArrowRight size={16} />
                    </Link>
                  )}
                  {secondaryAction && (
                    <Link
                      href={secondaryAction.href}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                    >
                      {secondaryAction.label}
                    </Link>
                  )}
                </div>
              )}
            </div>

            {heroImage ? (
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/20 p-3 shadow-2xl">
                <div className="relative h-72 overflow-hidden rounded-[1.15rem] md:h-80">
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 34rem, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                </div>
              </div>
            ) : null}

            {!heroImage && heroAside ? (
              <div className="rounded-[1.75rem] border border-white/10 bg-white/8 p-6 shadow-lg shadow-slate-950/20">
                {heroAside}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {children}
      </div>
    </div>
  );
}

export function PageSection({
  title,
  eyebrow,
  description,
  children,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.28)] backdrop-blur sm:p-8 lg:p-10">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-blue-700 uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-bold text-slate-950 md:text-3xl">{title}</h2>
        {description ? (
          <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
        ) : null}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function AccentList({
  items,
  columns = 1,
}: {
  items: CardItem[];
  columns?: 1 | 2 | 3;
}) {
  const columnClass =
    columns === 3 ? 'lg:grid-cols-3' : columns === 2 ? 'md:grid-cols-2' : 'grid-cols-1';

  return (
    <div className={`grid gap-4 ${columnClass}`}>
      {items.map((item) => (
        <div
          key={`${item.title}-${item.meta ?? ''}`}
          className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm"
        >
          {item.meta ? (
            <p className="text-sm font-semibold tracking-[0.14em] text-blue-700 uppercase">
              {item.meta}
            </p>
          ) : null}
          <h3 className="mt-1 text-lg font-semibold text-slate-950">{item.title}</h3>
          {item.description ? (
            <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function BorderList({
  items,
  columns = 1,
}: {
  items: CardItem[];
  columns?: 1 | 2;
}) {
  return (
    <div className={`grid gap-4 ${columns === 2 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
      {items.map((item) => (
        <div
          key={`${item.title}-${item.meta ?? ''}`}
          className="rounded-r-2xl border-l-4 border-blue-700 bg-blue-50/70 px-5 py-4"
        >
          <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
          {item.meta ? <p className="mt-2 text-sm font-semibold text-blue-800">{item.meta}</p> : null}
          {item.description ? (
            <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function Checklist({
  items,
  columns = 1,
}: {
  items: string[];
  columns?: 1 | 2 | 3;
}) {
  const columnClass =
    columns === 3 ? 'lg:grid-cols-3' : columns === 2 ? 'md:grid-cols-2' : 'grid-cols-1';

  return (
    <div className={`grid gap-3 ${columnClass}`}>
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
        >
          <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
            ✓
          </span>
          <p className="text-sm leading-7 text-slate-700">{item}</p>
        </div>
      ))}
    </div>
  );
}

export function Timeline({
  items,
}: {
  items: TimelineItem[];
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={`${item.label}-${item.title}`}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <p className="text-sm font-semibold tracking-[0.14em] text-blue-700 uppercase">
            {item.label}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-950">{item.title}</h3>
          {item.description ? (
            <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function Callout({
  tone = 'blue',
  title,
  children,
}: {
  tone?: CalloutTone;
  title: string;
  children: ReactNode;
}) {
  const toneClasses: Record<CalloutTone, string> = {
    blue: 'border-blue-200 bg-blue-50/80',
    green: 'border-emerald-200 bg-emerald-50/80',
    amber: 'border-amber-200 bg-amber-50/80',
    slate: 'border-slate-200 bg-slate-50/90',
  };

  return (
    <div className={`rounded-[1.5rem] border p-6 shadow-sm ${toneClasses[tone]}`}>
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <div className="mt-3 text-sm leading-7 text-slate-700">{children}</div>
    </div>
  );
}

export function DocumentGrid({
  items,
}: {
  items: DocumentItem[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => {
        const content = (
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
            <p className="text-sm font-semibold tracking-[0.14em] text-blue-700 uppercase">
              Document
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-950">{item.title}</h3>
            {item.description ? (
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
            ) : null}
            {item.href ? (
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-800">
                {item.hrefLabel ?? 'Open document'}
                <ArrowRight size={15} />
              </p>
            ) : null}
          </div>
        );

        if (item.href) {
          return (
            <a key={item.title} href={item.href} target="_blank" rel="noreferrer">
              {content}
            </a>
          );
        }

        return <div key={item.title}>{content}</div>;
      })}
    </div>
  );
}

