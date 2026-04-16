"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-paper flex flex-col"
        >
          {/* Close button */}
          <div className="flex justify-end px-6 py-6">
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex flex-col gap-[6px] p-2 relative w-8 h-8"
            >
              <span className="block w-6 h-px bg-ink absolute top-1/2 left-1 rotate-45" />
              <span className="block w-6 h-px bg-ink absolute top-1/2 left-1 -rotate-45" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-serif text-4xl text-ink hover:italic transition-all duration-200"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Bottom info */}
          <div className="px-6 pb-8 text-center">
            <p className="font-sans text-xs tracking-widest uppercase text-grey">
              Birmingham · Covering all of the UK
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
