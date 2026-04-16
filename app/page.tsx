"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Videography",
    description:
      "From wedding films to brand reels, we capture moments that hold weight. Delivered with restraint, cut to last.",
  },
  {
    num: "02",
    title: "Photography",
    description:
      "Still frames that carry the atmosphere of a room. Weddings, editorial, events — shot with intention.",
  },
  {
    num: "03",
    title: "Cinematography",
    description:
      "For projects that demand more. Music videos, short films, and commercial productions handled with a director's eye.",
  },
];

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 lg:px-20 pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1
            className="font-serif text-ink leading-none"
            style={{
              fontSize: "clamp(4.5rem, 13vw, 13rem)",
              lineHeight: "0.92",
              letterSpacing: "-0.02em",
            }}
          >
            Mirza
            <br />
            video
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <p className="font-sans text-xs tracking-widest uppercase text-grey">
            Birmingham-based &mdash; Filming across the UK
          </p>
          <Link
            href="/gallery"
            className="nav-link font-sans text-xs tracking-widest uppercase text-ink self-start md:self-auto"
          >
            View our work
          </Link>
        </motion.div>

        <div className="mt-12 hairline" />
      </section>

      {/* Intro */}
      <section id="about" className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-3xl">
          <FadeUp>
            <p
              className="font-serif text-ink leading-snug"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
            >
              We make films and photographs for people with something worth
              documenting. Weddings, brands, artists, events — across Birmingham
              and the whole of the UK.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="font-sans text-sm text-grey mt-6 leading-relaxed max-w-xl">
              Mirzavideo was founded on a single belief: that honest,
              well-crafted imagery outlasts trends. We work quietly, move with
              precision, and deliver work that holds up ten years from now.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 md:px-12 lg:px-20 py-8 md:py-16">
        <FadeUp>
          <p className="font-sans text-xs tracking-widest uppercase text-grey mb-12">
            Services
          </p>
        </FadeUp>

        <div>
          {services.map((service, i) => (
            <FadeUp key={service.num} delay={i * 0.1}>
              <div className="hairline py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 group cursor-default">
                <div className="md:col-span-1">
                  <span className="font-sans text-xs text-grey">{service.num}</span>
                </div>
                <div className="md:col-span-4">
                  <h3
                    className="font-serif text-ink group-hover:italic transition-all duration-300"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                  >
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="font-sans text-sm text-grey leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
          <div className="hairline" />
        </div>
      </section>

      {/* Featured Work Grid */}
      {/* TODO: Replace picsum placeholders with real Mirzavideo portfolio images */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <FadeUp>
          <div className="flex items-baseline justify-between mb-12">
            <p className="font-sans text-xs tracking-widest uppercase text-grey">
              Selected Work
            </p>
            <Link
              href="/gallery"
              className="nav-link font-sans text-xs tracking-widest uppercase text-ink"
            >
              All Work
            </Link>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <FadeUp delay={0.05}>
            <div className="relative aspect-[3/4] overflow-hidden bg-grey-light">
              <Image
                src="https://picsum.photos/seed/mirza10/800/1100"
                alt="Mirzavideo portfolio — wedding film"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="relative aspect-video overflow-hidden bg-grey-light">
                <Image
                  src="https://picsum.photos/seed/mirza22/1200/800"
                  alt="Mirzavideo portfolio — brand video"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="relative aspect-square overflow-hidden bg-grey-light">
                <Image
                  src="https://picsum.photos/seed/mirza44/800/800"
                  alt="Mirzavideo portfolio — event photography"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="col-span-2 md:col-span-1">
              <div className="relative aspect-[3/2] md:aspect-[3/4] overflow-hidden bg-grey-light">
                <Image
                  src="https://picsum.photos/seed/mirza33/900/1200"
                  alt="Mirzavideo portfolio — cinematography"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="col-span-2">
              <div className="relative aspect-[16/7] overflow-hidden bg-grey-light">
                <Image
                  src="https://picsum.photos/seed/mirza55/1400/600"
                  alt="Mirzavideo portfolio — music video"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-40 border-t border-ink">
        <FadeUp>
          <h2
            className="font-serif text-ink leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Let&apos;s make something
            <br />
            <em>worth watching.</em>
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="mt-10">
            <Link
              href="/contact"
              className="font-sans text-xs tracking-widest uppercase bg-ink text-paper px-8 py-4 transition-all duration-200 hover:bg-paper hover:text-ink border border-ink inline-block"
            >
              Start a project
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
