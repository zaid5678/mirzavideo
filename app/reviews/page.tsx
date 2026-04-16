import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews — Mirzavideo",
  description:
    "What our clients say about Mirzavideo's videography, photography and cinematography services across the UK.",
};

// TODO: Replace placeholder reviews with real client testimonials.
// Update name and project type to reflect actual Mirzavideo clients.
const reviews = [
  {
    quote:
      "The wedding film is genuinely one of the most treasured things we own. We've watched it more times than we can count. It doesn't feel like a highlight reel — it feels like the actual day, somehow better.",
    name: "Sarah & James Thornton",
    project: "Wedding Film — Coventry",
  },
  {
    quote:
      "We needed something that would genuinely represent our brand, not just look like every other corporate video. Mirzavideo delivered exactly that. Our engagement across socials has been unrecognisable since we launched the film.",
    name: "Marcus Elliot",
    project: "Brand Campaign — Birmingham",
  },
  {
    quote:
      "Working with Mirzavideo on my EP visuals was the right call. They understood the tone I was going for without me having to over-explain. The final cuts are exactly how I'd imagined them, and then some.",
    name: "Amara K.",
    project: "Music Video — London",
  },
  {
    quote:
      "Professional from start to finish. They arrived, got on with it, and the event photography was edited and delivered faster than I expected. High quality, no fuss.",
    name: "Damien Clarke",
    project: "Corporate Event — Manchester",
  },
  {
    quote:
      "I was nervous about the photography side of our launch — we're a new studio and first impressions matter. The shots are stunning. They've ended up on every piece of collateral we've printed.",
    name: "Priya Mehta",
    project: "Studio Launch Photography — Birmingham",
  },
  {
    quote:
      "Honest, talented, and excellent at making you feel at ease in front of the camera. The portraits from our engagement shoot look like they belong in a magazine. We can't wait to work with them again for the wedding.",
    name: "Leila & Tom Rashidi",
    project: "Engagement Photography — Worcestershire",
  },
];

export default function ReviewsPage() {
  return (
    <div className="px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-24">
      {/* Page header */}
      <div className="mb-16 md:mb-24">
        <h1
          className="font-serif text-ink leading-none"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.02em" }}
        >
          Reviews
        </h1>
        <p className="font-sans text-xs tracking-widest uppercase text-grey mt-6">
          What our clients say
        </p>
      </div>

      {/* Reviews list */}
      <div className="max-w-4xl">
        {reviews.map((review, i) => (
          <div key={i}>
            <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
              {/* Quote */}
              <div className="md:col-span-9">
                <blockquote
                  className="font-serif italic text-ink leading-snug"
                  style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)" }}
                >
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>

              {/* Attribution */}
              <div className="md:col-span-3 md:pt-2">
                <p className="font-sans text-xs tracking-widest uppercase text-ink">
                  {review.name}
                </p>
                <p className="font-sans text-xs text-grey mt-1">
                  {review.project}
                </p>
              </div>
            </div>
            <div className="hairline" />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 md:mt-32">
        <p
          className="font-serif text-ink leading-tight"
          style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)" }}
        >
          Ready to add yours?
        </p>
        <div className="mt-6">
          <a
            href="/contact"
            className="font-sans text-xs tracking-widest uppercase bg-ink text-paper px-8 py-4 transition-all duration-200 hover:bg-paper hover:text-ink border border-ink inline-block"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
