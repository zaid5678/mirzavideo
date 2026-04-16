import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Mirzavideo",
  description:
    "Get in touch with Mirzavideo. Based in Birmingham, available for videography, photography and cinematography projects across the UK.",
};

export default function ContactPage() {
  return (
    <div className="px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-24">
      {/* Page header */}
      <div className="mb-16 md:mb-24">
        <h1
          className="font-serif text-ink leading-none"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.02em" }}
        >
          Contact
        </h1>
        <p className="font-sans text-xs tracking-widest uppercase text-grey mt-6">
          Let&apos;s talk about your project
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: contact info */}
        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-grey mb-8">
            Get in touch
          </p>

          <div className="space-y-6">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-grey mb-1">
                Email
              </p>
              <a
                href="mailto:hello@mirzavideo.co.uk"
                className="nav-link font-sans text-sm text-ink"
              >
                hello@mirzavideo.co.uk
              </a>
            </div>

            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-grey mb-1">
                Phone
              </p>
              {/* TODO: Replace with real phone number */}
              <a
                href="tel:+447000000000"
                className="nav-link font-sans text-sm text-ink"
              >
                +44 7000 000 000
              </a>
            </div>

            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-grey mb-1">
                Location
              </p>
              <p className="font-sans text-sm text-ink">
                Based in Birmingham
              </p>
              <p className="font-sans text-sm text-grey">
                Covering all of the UK
              </p>
            </div>

            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-grey mb-1">
                Instagram
              </p>
              <Link
                href="https://instagram.com/mirzavideo"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link font-sans text-sm text-ink"
              >
                @mirzavideo
              </Link>
            </div>

            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-grey mb-1">
                TikTok
              </p>
              <Link
                href="https://tiktok.com/@mirzavideo"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link font-sans text-sm text-ink"
              >
                @mirzavideo
              </Link>
            </div>
          </div>

          {/* Divider + note */}
          <div className="hairline mt-12 pt-12">
            <p className="font-sans text-sm text-grey leading-relaxed">
              We aim to respond to all enquiries within one working day.
              For urgent bookings, calling is always faster.
            </p>
          </div>
        </div>

        {/* Right: contact form */}
        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-grey mb-8">
            Send an enquiry
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
